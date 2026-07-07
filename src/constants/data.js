import shoes from "../assets/img/shoes.jpg"
import restaurant from "../assets/img/restaurant.jpg"
import blog from "../assets/img/blog.jpg"
import realState from "../assets/img/real_state.jpg"
import bank from "../assets/img/bank.jpg"

const projects = [
    {
        id: 1,
        title: "Bank App",
        img: bank,
        url: "https://riosdrc.github.io/bank_modern_app",
        // desc: "This website presents the main page design of a banking application built with modern UI elements. The project was \ developed using React.js and styled with Tailwind CSS. While the application focuses on UI rather than complex functionality, \ it demonstrates the flexibility and scalability of modern front-end technologies in creating clean and responsive designs."
        desc: "Diese Website präsentiert das Design der Startseite einer Banking-Anwendung, die mit modernen UI-Elementen entwickelt wurde. Das Projekt wurde mit React.js umgesetzt und mit Tailwind CSS gestaltet. Obwohl der Schwerpunkt der Anwendung auf der Benutzeroberfläche und nicht auf komplexen Funktionen liegt, zeigt sie die Flexibilität und Skalierbarkeit moderner Frontend-Technologien bei der Entwicklung übersichtlicher und responsiver Designs."
    },
    {
        id: 2,
        title: "Rios Blog",
        img: blog,
        url: "https://riosdrc.github.io/rios-blog-client/",
        desc: "Explore my full-stack blog project developed with Node.js and React.js. The backend, powered by MySQLite, is hosted on Heroku. \
        Seamless image management is achieved through Dropbox, with new image integration facilitated by a Dropbox API. This project \
        highlights my prowess in API utilization and backend understanding. The user interface strikes a balance: a Bootstrap navbar for \
        streamlined navigation and custom CSS for design cohesiveness. User: test2, Password: test2"
    },
    {
        id: 3,
        title: "Restaurant",
        img: restaurant,
        url: "https://riosdrc.github.io/restaurant/",
        // desc: "Embark on an exploration of this React.js front-end project—a simulated restaurant website. Crafted as a single, \
        // cohesive webpage, it boasts a meticulously designed menu that effortlessly guides users through various sections. Leveraging \
        // CSS, I've infused the site with an aesthetic that resonates with the restaurant's ambiance. While the login function remains \
        // dormant due to the absence of a backend, a meticulously crafted booking logic invites users to engage. This project is a \
        // testament to my frontend skills, showcasing both thoughtful design and interactive elements."
        desc: "Entdecken Sie dieses Frontend-Projekt, das mit React.js entwickelt wurde. Die Anwendung wurde als übersichtliche Single-Page-Webseite konzipiert und verfügt über ein sorgfältig gestaltetes Menü, das die Nutzer intuitiv durch die verschiedenen Bereiche führt. Mithilfe von CSS wurde das Design an die Atmosphäre eines Restaurants angepasst. Obwohl die Anmeldefunktion aufgrund des fehlenden Backends nicht aktiv ist, ermöglicht eine durchdachte Reservierungslogik eine interaktive Benutzererfahrung. Dieses Projekt zeigt meine Fähigkeiten im Frontend-Bereich und demonstriert sowohl ein durchdachtes Design als auch interaktive Elemente."
    },
    {
        id: 4,
        title: "Online Schuhladen",
        img: shoes,
        url: "https://riosdrc.github.io/shoes/",
        // desc: "Embark on a journey through this immersive website, an emulation of an online shoe store. Originally crafted with plain HTML, the project has been reimagined using the dynamic capabilities of React.js. The aesthetics are elegantly unified in a single Sass stylesheet, harnessing the cascade function for seamless styling. While the login function remains inactive, localStorage technology ensures your preferences, favorite shoes, and shopping cart are remembered. Additionally, an interactive feature enables users to adjust unit quantities and observe the total price. This project elegantly demonstrates my expertise in frontend development and user-centric design."
        desc: "Entdecken Sie diese interaktive Website, die einen Online-Schuhshop simuliert. Das Projekt wurde ursprünglich mit reinem HTML entwickelt und anschließend mithilfe der Möglichkeiten von React.js vollständig neu umgesetzt. Das gesamte Design wird in einer zentralen Sass-Stylesheet-Datei verwaltet, wodurch eine konsistente und übersichtliche Gestaltung gewährleistet wird. Obwohl die Login-Funktion aufgrund des fehlenden Backends nicht aktiv ist, speichert die Anwendung mithilfe von Local Storage die Benutzereinstellungen, favorisierte Schuhe und den Warenkorb. Dieses Projekt unterstreicht meine Kenntnisse in der Frontend-Entwicklung sowie in der Entwicklung benutzerfreundlicher und moderner Webanwendungen."
    },
    {
        id: 5,
        title: "Immobilien",
        img: realState,
        url: "https://riosdrc.github.io/real_state",
        // desc: "Dive into a project that vividly demonstrates my prowess in crafting multi-page websites. This endeavor harnesses the power of React.js, showcasing my adeptness in optimizing performance through code reuse. By ingeniously utilizing React's recycling feature, I've seamlessly replicated similar code snippets with minor adjustments, enhancing both efficiency and maintainability. Additionally, the project integrates captivating animations, further enriched with JavaScript interactions to enable personalized logins that imbue each section with a unique touch."
        desc: "Entdecken Sie ein Projekt, das meine Fähigkeiten in der Entwicklung von mehrseitigen Webanwendungen eindrucksvoll demonstriert. Es wurde mit React.js entwickelt und zeigt, wie sich durch die Wiederverwendung von Komponenten eine hohe Effizienz und Wartbarkeit erreichen lässt. Mithilfe wiederverwendbarer React-Komponenten konnten ähnliche Inhalte mit nur geringfügigen Anpassungen umgesetzt werden, wodurch der Code übersichtlich und leicht erweiterbar bleibt. Darüber hinaus enthält das Projekt ansprechende Animationen sowie interaktive JavaScript-Funktionen. Eine personalisierte Login-Funktion sorgt dafür, dass jeder Bereich der Anwendung individuell gestaltet werden kann. Dieses Projekt unterstreicht meine Kenntnisse in der Entwicklung moderner, performanter und benutzerfreundlicher Frontend-Anwendungen."
    }
];

const education = [
    {
        id: 1,
        inst: "Universität von Costa Rica",
        area: "Barchelor's Degree in English Teaching",
        year: "2013 - 2021"
    },
    {
        id: 2,
        inst: "Harvard Online-Kurse",
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