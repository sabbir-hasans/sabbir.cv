//Education
import kyau from "../assets/education/kyau.png";
import bsdusc from "../assets/education/bsdusc.png";
import RHS from "../assets/education/RHS.png";
// Certificates
import achievement from "../assets/certificates/achievement.png";
import certificate1 from "../assets/certificates/certificate1.png";
import certificate2 from "../assets/certificates/certificate2.png";
import certificate3 from "../assets/certificates/certificate3.png";
//Experience
import ideeza from "../assets/experiences/ideeza.png";
import sitet from "../assets/experiences/sitet.png";
import jhstc from "../assets/experiences/jhstc.png";
import asianitinc from "../assets/experiences/asianitinc.png";
//Projects
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
//QA toos
import playwrightLogo from "../assets/skills/playwright.png";
import seleniumLogo from "../assets/skills/selenium.png";
import jiraLogo from "../assets/skills/jira.png";
import TestRailLogo from "../assets/skills/TestRail.png";
import Apache_JMeterLogo from "../assets/skills/Apache_JMeter.png";
import appiumLogo from "../assets/skills/appium.png";
//frontend
import reactLogo from "../assets/skills/react.png";
import TailwindLogo from "../assets/skills/Tailwind.png";
import ViteLogo from "../assets/skills/Vite.png";
import FigmaLogo from "../assets/skills/Figma.png";
import MySqlLogo from "../assets/skills/MySql.png";
import MongoDBLogo from "../assets/skills/MongoDB.png";
//programming language
import jsLogo from "../assets/skills/javascript.png";
import PythonLogo from "../assets/skills/Python.png";
import cLogo from "../assets/skills/c.png";
import cppLogo from "../assets/skills/cpp.png";
//Tools & Platforms
import PostmanLogo from "../assets/skills/postman.png";
import githubLogo from "../assets/skills/github.png";
import gitLogo from "../assets/skills/git.png";
import swaggerLogo from "../assets/skills/swagger.png";
import cypressLogo from "../assets/skills/cypress.png";
import browser_stackLogo from "../assets/skills/browser_stack.png";



export const education = [
    {
        id: 1,
        img: kyau,
        school: "Khwaja yunus Ali University, Sirajganj, Bangladesh",
        date: "2016 - 2021",
        grade: "Bachelor Degree",
        degree: "Bachelor of Computer Science",
        desc: "Graduated with a Bachelor of Computer Science Engineering from Khwaja Yunus Ali University (2016–2021). Built strong skills in software engineering, problem-solving, software testing, and quality assurance through academic projects and continuous learning.Passionate about delivering high-quality software solutions while continuously improving technical and analytical expertise.",
    },

    {
        id: 2,
        img: bsdusc,
        school: "Baghopara Shaheed Danesh Uddin School & College, Gokul, Bogura",
        date: "2024 - 2016",
        grade: "HSC",
        degree: "Higher Secondary Certificate",
        desc: "Completed Higher Secondary Certificate (HSC) in Science from Baghopara Shaheed Danesh Uddin School & College (2014–2016). Developed a strong foundation in mathematics, physics, and analytical thinking through academic studies and practical learning. Built problem-solving and logical reasoning skills that later supported a career in computer science and software engineering.",
    },
    {
        id: 3,
        img: RHS,
        school: "Rajapur High School",
        date: "2009 - 2014",
        grade: "SSC",
        degree: "Secondary School Certificate",
        desc: "Completed Secondary School Certificate (SSC) in Science from Rajapur High School (2009–2014). Built a strong academic foundation in science, mathematics, and analytical problem-solving through consistent learning and dedication.Developed an early interest in technology and logical thinking that inspired the journey toward computer science and software engineering.",
    },
    {
        id: 4,
        img: achievement,
        school: "Professional Certifications",
        date: "2024 - Present",
        grade: "Achievements",
        degree: "Certificates",
        desc: "View my professional certifications and achievements earned through continuous learning and technical training.",
        link: "/certificates",
    },
];
//certificates
export const certificates = [
    {
        id: 1,
        title: "Software Quality Assurance",
        issuer: "Ostad",
        date: "2025",
        image: certificate1,
        link: "https://ostad.app/share/certificate/c22407-md.-sabbir-hasan",
    },
    {
        id: 2,
        title: "Software Quality Assurance Assessment",
        issuer: "Ostad",
        date: "2025",
        image: certificate2,
        link: "https://ostad.app/share/certificate/a22408-md.-sabbir-hasan",
    },

    {
        id: 3,
        title: "Software Quality Assurance Career Bootcanp",
        issuer: "Mallik Galib Shahriar",
        date: "2025",
        image: certificate3,
        link: "https://drive.google.com/file/d/1ohkJX-BUbRMekwNxscQCGjKskEfeO3rp/view",
    },

    // {
    //     id: 4,
    //     title: "JavaScript Essentials",
    //     issuer: "freeCodeCamp",
    //     date: "2024",
    //     image: certificate4,
    //     link: certificate4,
    // },
];

// Experience section
export const experiences = [
    {
        id: 1,
        img: ideeza,
        role: "QA Engineer",
        company: "IDEEZA",
        date: "2025 - Present",
        desc: "Working as a Software Quality Assurance Engineer focused on both manual and automation testing for modern web applications. Responsible for ensuring product quality, improving testing efficiency through automation, and collaborating with cross-functional teams to deliver reliable and user-friendly software solutions.",
        skills: [
            "Manual Testing",
            "Automation Testing",
            "Playwright",
            "Selenium",
            "Postman",
            "Agile/Scrum",
            "Swagger",
            "Postman",
            "Jira",
            "Regression Testing",
            "Functional Testing",
        ],
    },

    {
        id: 2,
        img: asianitinc,
        role: "QA Engineer Manul",
        company: "AsianItinc",
        date: "December 2024 - August 2025",
        desc: "Worked as a Manual QA Engineer responsible for ensuring the quality, stability, and usability of web applications. Collaborated closely with developers and stakeholders to identify defects, improve product reliability, and deliver a smooth user experience across multiple releases.",
        skills: [
            "Bug Reporting",
            "Responsive Testing",
            "QA Documentation",
            "Manual Testing",
            "Regression Testing",
            "API Testing",
            "Bug Reporting & Tracking",
            "Team Collaboration",
        ],
    },

    {
        id: 3,
        img: jhstc,
        role: "Jannat Ara Henry Science and Technology College, Sirajganj",
        company: "College",
        date: "August 2023 - November 2024",
        desc: "Worked as a Lecturer teaching programming and web development courses to undergraduate students. Guided students through academic projects, organized technical workshops, and collaborated with faculty members to improve course content and teaching methodologies.",
        skills: [
            "rogramming Instruction",
            "Web Development",
            "Student Mentoring",
            "Technical Workshops",
            "Project Supervision",
            "Coding Interview Preparation",
            "Curriculum Development",
            "Academic Guidance",
            "Classroom Management",
        ],
    },

    {
        id: 4,
        img: sitet,
        role: "Sirajganj Institute of Textile Engineering and Technology, Sirajganj",
        company: "College",
        date: "December 2021 - May 2023",
        desc: "Worked as an Instructor delivering technical and programming-related courses to students through interactive teaching methods and practical lab sessions. Focused on simplifying complex technical concepts, improving student engagement, and supporting hands-on learning experiences.",
        skills: [
            "rogramming Instruction",
            "Web Development",
            "Student Mentoring",
            "Technical Workshops",
            "Project Supervision",
            "Coding Interview Preparation",
            "Curriculum Development",
            "Academic Guidance",
            "Classroom Management",
        ],
    },
];


// project section
export const projects = [
    {
        id: 1,
        title: "QA Automation Project",

        description:
            "Automation testing project using Playwright and Selenium for validating user workflows and software quality assurance.",

        image: project1,

        tags: [
            "Playwright",
            "Selenium",
            "Automation Testing",
            "JavaScript",
        ],

        github:
            "https://github.com/sabbir-hasans/automation-saucedemo.git",

        webapp:
            "https://github.com/sabbir-hasans/automation-saucedemo.git",
    },

    {
        id: 2,
        title: "Automation With WebDriverIO",

        description:
            "Modern responsive portfolio website built with React, Tailwind CSS, and Framer Motion.",

        image: project2,

        tags: [
            "Playwright",
            "Selenium",
            "Automation Testing",
            "JavaScript",
        ],

        github:
            "https://github.com/sabbir-hasans/Automation-with-WebdriverIO.git",

        webapp:
            "https://github.com/sabbir-hasans/Automation-with-WebdriverIO.git",
    },

    {
        id: 3,
        title: "Competitive Programming Journey",

        description:
            "Collection of competitive programming solutions and problem-solving practice.",

        image: project3,

        tags: [
            "C++",
            "Algorithms",
            "Problem Solving",
            "Data Structures",
        ],

        github:
            "https://github.com/sabbir-hasans/Problem-Solving-Diary.git",

        webapp:
            "https://github.com/sabbir-hasans/Problem-Solving-Diary.git",
    },
];

// skill section

export const SkillsInfo = [
    {
        title: "QA & Testing",

        skills: [
            {
                name: "Playwright",
                logo: playwrightLogo,
            },

            {
                name: "Selenium",
                logo: seleniumLogo,
            },

            {
                name: "Jira",
                logo: jiraLogo,
            },

            {
                name: "TestRail",
                logo: TestRailLogo,
            },

            {
                name: "Apache_JMeter",
                logo: Apache_JMeterLogo,
            },

            {
                name: "Appium",
                logo: appiumLogo,
            },
        ],
    },

    {
        title: "Frontend",

        skills: [
            {
                name: "React",
                logo: reactLogo,
            },

            {
                name: "Tailwind CSS",
                logo: TailwindLogo,
            },

            {
                name: "Vite",
                logo: ViteLogo,
            },

            {
                name: "Figma",
                logo: FigmaLogo,
            },
            
            {
                name: "MySql",
                logo: MySqlLogo,
            },

            {
                name: "MongoDB",
                logo: MongoDBLogo,
            },
        ],
    },

    {
        title: "Programming",

        skills: [
            {
                name: "C",
                logo: cLogo,
            },

            {
                name: "C++",
                logo: cppLogo,
            },

            {
                name: "Python",
                logo: PythonLogo,
            },

            {
                name: "JavaScript",
                logo: jsLogo,
            },
        ],
    },

    {
        title: "Tools & Platforms",

        skills: [
            {
                name: "GitHub",
                logo: githubLogo,
            },

            {
                name: "Git",
                logo: gitLogo,
            },

            {
                name: "Postman",
                logo: PostmanLogo,
            },

            {
                name: "Swagger",
                logo: swaggerLogo,
            },

            {
                name: "Cypress",
                logo: cypressLogo,
            },

            {
                name: "BrowserStack",
                logo: browser_stackLogo,
            },
        ],
    },
];