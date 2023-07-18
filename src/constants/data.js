import shoes from "../assets/img/shoes.jpg"
import gpt3 from "../assets/img/gpt3.jpg"
import restaurant from "../assets/img/restaurant.jpg"
import bank from "../assets/img/bank.jpg"
import blog from "../assets/img/blog.jpg"
import rent from "../assets/img/rent-a-car.jpg"

const projects = [
    {
        id: 1,
        title: "Shoes Store",
        img: shoes,
        url: "https://riosdrc.github.io/shoes/",
        desc: ""
    },
    {
        id: 2,
        title: "GPT-3",
        img: gpt3,
        url: "https://riosdrc.github.io/gpt3/",
        desc: ""
    },
    {
        id: 3,
        title: "Restaurant",
        img: restaurant,
        url: "https://riosdrc.github.io/restaurant/",
        desc: ""
    },
    {
        id: 4,
        title: "Bank Modern App",
        img: bank,
        url: "https://riosdrc.github.io/bank_modern_app/",
        desc: ""
    },
    {
        id: 5,
        title: "Rios Blog",
        img: blog,
        url: "https://riosdrc.github.io/rios-blog-client/",
        desc: ""
    },
    {
        id: 6,
        title: "Rent-a-Car",
        img: rent,
        url: "https://riosdrc.github.io/rent-a-car",
        desc: ""
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