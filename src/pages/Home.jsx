import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to my Github page</h1>
            <div className="projects">
                <div className="project">
                    <h2>Shoes</h2>
                    <Link to="https://riosdrc.github.io/shoes">
                        <img src="./img/Shoes.jpg" alt="" />
                        <button>Visit</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Home;