from flask import Flask, render_template, session, request, redirect, jsonify
from flask_session import Session
from cs50 import SQL
import os
from werkzeug.security import check_password_hash, generate_password_hash
from tempfile import mkdtemp
from functools import wraps
from datetime import datetime, date


app = Flask(__name__)

IMG_FOLDER = os.path.join('static', 'IMG')
"""Load image folder"""
app.config['UPLOAD_FOLDER'] = IMG_FOLDER
app.config["TEMPLATES_AUTO_RELOAD"] = True

'''make sure cache does not save responses'''
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

""""Define security key"""
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

db = SQL("sqlite:///database.db")
# Get time
def current_time():
    today = date.today()
    now = datetime.now()
    current_time = str(today) + " " + str(now.strftime("%H:%M:%S"))
    return current_time

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("user_id") is None:
            return redirect("/login")
        return f(*args, **kwargs)
    return decorated_function

@app.route("/", methods=["POST", "GET"])
@login_required
def index():
    # Loading storage
    storage = db.execute("SELECT * FROM storage")
    # If a user makes a request...
    if request.method == "POST":
        # Checking input
        if not request.form.get("product"):
            return index("Please, write a name.", "")
        elif not request.form.get("units"):
            return index("Please, write the number of units.", "")
        if db.execute("SELECT product_id FROM storage WHERE name = ?", request.form.get("product").capitalize()):
            return index("This product already exists. Please, go to modify storage", "")
        # Updating storage
        else:
            db.execute("INSERT INTO storage (name, units, measure_unit, price, comments) VALUES (?, ?, ?, ?, ?)",
                       request.form.get("product").capitalize(), int(request.form.get("units")), request.form.get("measure_unit"),
                       request.form.get("price"), request.form.get("comment"))
            storage = db.execute("SELECT * FROM storage")
            # Saving changes into history
            changes = request.form.get("product") + " - " + str(request.form.get("units")) + " " + request.form.get("measure_unit") + " - $" + str(request.form.get("price")) + " - " + request.form.get("comment")
            db.execute("INSERT INTO history (user_id, changes, action, time) VALUES (?, ?, ?, ?)", session["user_id"], changes, "Add new product", current_time())
            return index("", "Succesful!")
    else:
        storage = db.execute("SELECT * FROM storage")
        return render_template("index.html", storage=storage)

def index(message, message1):
    storage = db.execute("SELECT * FROM storage")
    return render_template("index.html",storage=storage, message=message, message1=message1)

@app.route("/search")
@login_required
def search():
    return render_template("search.html")

@app.route("/query")
def query():
    q = request.args.get("q")
    if q:
        storage = db.execute("SELECT * FROM storage WHERE name LIKE ?", '%' + q + '%')
    else:
        storage = []
    return jsonify(storage)

@app.route("/queryid")
def queryid():
    q = request.args.get("q")
    if q:
        storage = db.execute("SELECT * FROM storage WHERE product_id = ?", q)
    else:
        storage = []
    return jsonify(storage)

@app.route("/update", methods=["POST", "GET"])
@login_required
def update():
    if request.method == "POST":
        if not request.form.get("options"):
            return update("Please, choose the product you want to update", "")
        changes = ""
        if request.form.get("name"):
            update_values(request.form.get("options"), "name", request.form.get("name"))
            changes = changes + "name: " + request.form.get("name")
        if request.form.get("units"):
            update_values(request.form.get("options"), "units", request.form.get("units"))
            changes = changes + "- units: " + str(request.form.get("units"))
        if request.form.get("measure_unit"):
            update_values(request.form.get("options"), "measure_unit", request.form.get("measure_unit"))
            changes = changes + "- measure_unit: " + request.form.get("measure_unit")
        if request.form.get("price"):
            update_values(request.form.get("options"), "price", request.form.get("price"))
            changes = changes + "- price: " + str(request.form.get("price"))
        if request.form.get("comment"):
            update_values(request.form.get("options"), "comments", request.form.get("comment"))
            changes = changes + "- comment: " + request.form.get("comment")
        if not request.form.get("name") and not request.form.get("units") and not request.form.get("measure_unit") and not request.form.get("price") and not request.form.get("comment"):
            return update("You must write value you want to update", "")
        else:
            db.execute("INSERT INTO history (user_id, changes, action, time) VALUES (?, ?, ?, ?)", session["user_id"], changes, "Update info", current_time())
            return update("", "Update sucessful")
    else:
        storage = db.execute("SELECT * FROM storage")
        return render_template("update.html", storage=storage)

# function to update storage value by value
def update_values(id, column, value):
    db.execute("UPDATE storage SET ? = ? WHERE product_id = ?", column, value, id)
    return

# function to return update.html with a message
def update(negative, positive):
    storage = db.execute("SELECT * FROM storage")
    return render_template("update.html", message=negative, message1=positive, storage=storage)

@app.route ("/delete", methods=["POST"])
def delete():
    if request.method == "POST":
        # Checking input
        if not request.form.get("product_id"):
            return index("Write the product id you want to delete.", "")
        else:
            product = db.execute("SELECT * FROM storage WHERE product_id = ?", request.form.get("product_id"))
            if not product or not request.form.get("product_id").isnumeric():
                return index("Product id invalid.", "")
            # Deleting and saving change into history
            else:
                changes = product[0]["name"] + " - " + str(product[0]["units"]) + " " + product[0]["measure_unit"] + " - $"  + str(product[0]["price"]) + " - " + product[0]["comments"]
                db.execute("INSERT INTO history (user_id, changes, action, time) VALUES (?, ?, ?, ?)",
                            session["user_id"], changes, "Delete a product", current_time())
                db.execute("DELETE FROM storage WHERE product_id = ?", request.form.get("product_id"))
                return index(product[0]["name"] + " " + "deleted.", "")

@app.route("/history")
@login_required
def history():
    history=db.execute("SELECT * FROM history")
    for id in history:
        username = db.execute("SELECT username FROM users WHERE id = ?", id["user_id"])
        id["user_id"] = username[0]["username"]
    return render_template("history.html", history=history)

@app.route("/login", methods=["POST", "GET"])
def login():
    session.clear()
    if request.method == "POST":
        """Checking if input was sent"""
        if not request.form.get("username"):
            return render_template("login.html", message="You must provide a username")
        elif not request.form.get("password"):
            return render_template("login.html", message="You must provide a password")
        #Accesing database
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username").lower())
        #Checking username/password against database
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return render_template("login.html", message="Invalid username/password")
        if rows[0]["clearance"] == "temp":
            return render_template("login.html", message="You have not been granted access yet")
        #Remembering the user
        else:
            print("successful")
            session["user_id"] = rows[0]["id"]
            session["name"] = rows[0]["name"]
            session["username"] = rows[0]["username"]
            session["clearance"] = rows[0]["clearance"]
            return redirect("/")
    else:
        return render_template("login.html")

@app.route("/logout")
def logout():
    #Clear session info
    session.clear()
    return redirect("/")

@app.route("/register", methods=["POST", "GET"])
def register():
    if request.method == "POST":
        # Checking input
        if not request.form.get("name"):
            return render_template("register.html", message="You must provide your name")
        if not request.form.get("username"):
            return render_template("register.html", message="You must provide a username")
        elif not request.form.get("password"):
            return render_template("register.html", message="You must provide a password")
        elif request.form.get("name").lower() == request.form.get("username").lower():
            return render_template("register.html", message="Your username cannot be your name")
        elif request.form.get("password") != request.form.get("password_conf"):
            return render_template("register.html", message="Password does not match password confirmation")
        # Checking existance of an user waiting for registration
        elif db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username").lower()):
            return render_template("register.html", message="This user name already exists")
        # Saving user info
        else:
            db.execute("INSERT INTO users (name, username, hash) VALUES (?, ?, ?)", request.form.get("name").capitalize(),
                       request.form.get("username").lower(), generate_password_hash(request.form.get("password")))
            return render_template("login.html", message1="Registration successful")
    else:
        return render_template("register.html")

@app.route("/password", methods=["POST", "GET"])
@login_required
def password():
    if request.method == "POST":
        # Checking that input is enter
        if not request.form.get("old-password"):
            return render_template("password.html", message="You must enter your old password")
        elif not request.form.get("new-password"):
            return render_template("password.html", message="You must enter a new password")
        elif not request.form.get("password-conf"):
            return render_template("password.html", message="You must re-confirm your new password")
        users = db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])
        #checking old password
        if not check_password_hash(users[0]["hash"], request.form.get("old-password")):
            return render_template("password.html", message="Invalid old password")
        #checking password confirmation
        elif not request.form.get("new-password") == request.form.get("password-conf"):
            return render_template("password.html", message="Your confirmation password does not match")
        #Checking old password is not new password
        if check_password_hash(users[0]["hash"], request.form.get("new-password")):
            return render_template("password.html", message="Your new password must be different from the old password")
        #Changing password
        else:
            db.execute("UPDATE users SET hash = ? WHERE id = ?", generate_password_hash(request.form.get("new-password")), session["user_id"])
            return index("", "Password changed succesfully!")
    return render_template("password.html")

@app.route("/admin", methods=["POST", "GET"])
@login_required
def admin():
    if request.method == "POST":
        users = db.execute("SELECT username, clearance FROM users")
        if request.form.get("options"):
            options = request.form.get("options").split()
            # Eliminating accounts
            if options[1] == "eliminate":
                # Not allowing to erase all the administrators accounts
                if db.execute("SELECT * FROM users WHERE username = ? AND clearance = 'admin'", options[0]):
                    rows = db.execute("SELECT * FROM users WHERE clearance = 'admin'")
                    if len(rows) == 1:
                        return render_template("/admin.html", users=users, message="At least one administrator must remain")
                else:
                    db.execute("DELETE FROM users WHERE username = ?", options[0])
                    users = db.execute("SELECT username, clearance FROM users")
                    return render_template("/admin.html", users=users, message="User " + options[0] + " eliminated")
            # Changing user account to admin
            elif options[1] == "admin":
                if db.execute("SELECT clearance FROM users WHERE username = ? AND clearance = 'admin'", options[0]):
                    return render_template("admin.html", users=users, message="This user is already an admin")
                else:
                    db.execute("UPDATE users SET clearance = 'admin' WHERE username = ?", options[0])
                    users = db.execute("SELECT username, clearance FROM users")
                    return render_template("admin.html", users=users, message1="User " + options[0] + " is now an admin")
            # Chaging admin to user
            elif options[1] == "user":
                if db.execute("SELECT clearance FROM users WHERE username = ? AND clearance = 'user'", options[0]):
                    return render_template("admin.html", users=users, message="This user is already an user")
                elif db.execute("SELECT * FROM users WHERE id = ? AND clearance = 'admin'", session["user_id"]) and session["username"] == options[0]:
                    return render_template("admin.html", users=users, message="An Admin cannot change their own status")
                else:
                    db.execute("UPDATE users SET clearance = 'user' WHERE username = ?", options[0])
                    users = db.execute("SELECT username, clearance FROM users")
                    return render_template("admin.html", users=users, message1="User " + options[0] + " is now an user")
    else:
        users = db.execute("SELECT username, clearance FROM users")
        return render_template("admin.html", users=users)
