const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to my Github page</h1>
            <div className="projects">
                <div className="project">
                    <h2>Shoes</h2>
                    <a href="https://riosdrc.github.io/shoes/">
                        <img src="./img/Shoes.jpg" alt="" />
                        <button>Visit</button>
                    </a>
                </div>
                <div className="project">
                    <h2>GTP3</h2>
                    <a href="https://riosdrc.github.io/gpt3/">
                        <img src="./img/gpt3.jpg" alt="" />
                        <button>Visit</button>
                    </a>
                </div>
                <div className="project">
                    <h2>GTP3</h2>
                    <a href="https://riosdrc.github.io/restaurant/">
                        <img src="./img/restaurant.jpg" alt="" />
                        <button>Visit</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Home;