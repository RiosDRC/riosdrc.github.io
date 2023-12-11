import shoes from "../assets/img/shoes.jpg"
import restaurant from "../assets/img/restaurant.jpg"
import blog from "../assets/img/blog.jpg"
import realState from "../assets/img/real_state.jpg"

const projects = [
    {
        id: 1,
        title: "Rios Blog",
        img: blog,
        url: "https://riosdrc.github.io/rios-blog/",
        desc: "Explore my full-stack blog project developed with Node.js and React.js. The backend, powered by MySQLite, is hosted on Heroku. \
        Seamless image management is achieved through Dropbox, with new image integration facilitated by a Dropbox API. This project \
        highlights my prowess in API utilization and backend understanding. The user interface strikes a balance: a Bootstrap navbar for \
        streamlined navigation and custom CSS for design cohesiveness. User: test2, Password: test2"
    },
    {
        id: 2,
        title: "Restaurant",
        img: restaurant,
        url: "https://riosdrc.github.io/restaurant/",
        desc: "Embark on an exploration of this React.js front-end project—a simulated restaurant website. Crafted as a single, \
        cohesive webpage, it boasts a meticulously designed menu that effortlessly guides users through various sections. Leveraging \
        CSS, I've infused the site with an aesthetic that resonates with the restaurant's ambiance. While the login function remains \
        dormant due to the absence of a backend, a meticulously crafted booking logic invites users to engage. This project is a \
        testament to my frontend skills, showcasing both thoughtful design and interactive elements."
    },
    {
        id: 3,
        title: "Shoes Store",
        img: shoes,
        url: "https://riosdrc.github.io/shoes/",
        desc: "Embark on a journey through this immersive website, an emulation of an online shoe store. Originally crafted with plain HTML, \
        the project has been reimagined using the dynamic capabilities of React.js. The aesthetics are elegantly unified in a single Sass \
        stylesheet, harnessing the cascade function for seamless styling. While the login function remains inactive, localStorage technology \
        ensures your preferences, favorite shoes, and shopping cart are remembered. Additionally, an interactive feature enables users to \
        adjust unit quantities and observe the total price. This project elegantly demonstrates my expertise in frontend development and \
        user-centric design."
    },
    {
        id: 4,
        title: "Real State",
        img: realState,
        url: "https://riosdrc.github.io/real_state",
        desc: "Dive into a project that vividly demonstrates my prowess in crafting multi-page websites. This endeavor harnesses the power \
        of React.js, showcasing my adeptness in optimizing performance through code reuse. By ingeniously utilizing React's recycling feature, \
        I've seamlessly replicated similar code snippets with minor adjustments, enhancing both efficiency and maintainability. Additionally, \
        the project integrates captivating animations, further enriched with JavaScript interactions to enable personalized logins that imbue \
        each section with a unique touch."
    }
];

const education = [
    {
        id: 1,
        inst: "University of Costa Rica",
        area: "Barchelor's Degree in English Teaching",
        year: "2013 - 2021"
    },
    {
        id: 2,
        inst: "Harvard Online Courses",
        area: "CS50 - Introduction to Computer Science, Python, and Web Design",
        year: "2022 - 2023"
    },
    {
        id: 3,
        inst: "Alisson Courses",
        area: "Introduction to React.js",
        year: "2023"
    },
    {
        id: 4,
        inst: "The Net Ninja, Solo Python, and Lama Dev",
        area: "Web tutorials: React, Django Restframework, Node.js",
        year: "2023"
    }
];

export {education, projects};