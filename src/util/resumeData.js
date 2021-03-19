import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutLined from '@material-ui/icons/WebOutlined';
import AssignmentOutlined from '@material-ui/icons/AssignmentIndOutlined';
import YouTube from '@material-ui/icons/YouTube';
import WebIcon from '@material-ui/icons/Web';

export default {
    name: 'Ramandeep Singh',
    title: 'Full Stack Developer',
    birthday: 'April 6th, 1996',
    email: 'ramandeep.9333@gmail.com',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com/pnexus1',
            text: 'Facebook',
            icon: <FacebookIcon />
        },
        LinkedIn: {
            link: 'https://www.linkedin.com/in/ramandeep-singh-975b7516b',
            text: 'LinkedIn',
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: 'https://github.com/11Lucifer11',
            text: 'GitHub',
            icon: <GitHubIcon />
        }
    },

    about: 'An adaptable, innovative and highly skilled Full Stack Developer with a wide range of experiences across multiple frameworks and languages utilized to develop enterprise-level web applications, web services and microservices. \n\n Experienced in architecting, developing and maintaining software deliveries using NodeJS, Java, C#, PHP and front-end development using Vanilla.Js, React, HTML, CSS, JQuery, Pug and EJs.'

    , experiences: [
        {
            title: 'Customer Fulfillment Associate - Walmart',
            date: 'October 2019-Present',
            description: 'Demonstrating flexibility in completing and adjusting to work assignments based on customer requests and meeting daily delivery schedules. Correctly documenting and labeling all orders correctly through interpretation and understanding documents including pick slips, packaging details, labels, etc.'

        },
        {
            title: 'Customer Service Associate - Amazon',
            date: 'August 2017- April 2018',
            description: 'Managed and worked with a team of professionals to maintain a positive and high-performance culture. Worked with clients and customers from United States, United Kingdom, and India.'
        }
    ],

    education: [
        {
            title: 'Computer Applications Development - Conestoga College',
            date: 'September 2020 - Present',
            description: 'Design, input, extract, format, and report information from a database and Analyze and design an information system in an object-oriented environment.'
        },
        {
            title: 'Software and Information System Testing - Fanshawe College',
            date: 'September 2019 - April 2020',
            description: 'Develop test cases to verify system functionality and individual components of the system architecture. Test, verify, and evaluate procedures to assess software quality and improve software performance.'
        },
        {
            title: 'Bachelor of Science in Information technology - Guru Nanak Dev University',
            date: 'June 2014 - June 2017',
            description: 'Apply knowledge of computing requirements and mathematics for technology solutions in business applications. Design and use spreadsheets and database applications for business processes and tracking. Develop an ability to communicate effectively with a range of audiences.'

        },
    ],
    services: [
        {
            title: 'Software Development',
            description: ' Analyze users needs and design, develop, and test software and applications.',
            icon: <WebOutLined />
        },
        {
            title: 'Google Analytic and SEO',
            description: 'Web Integration with Google analytics and SEO to improve the quality and quantity of website traffic.',
            icon: <AssignmentOutlined />
        },
        {
            title: 'Web Development',
            description: 'Building websites which includes web design, web publishing, web programming, and database management.',
            icon: <WebOutLined />
        }
    ],

    skills: [
        {
            title: 'FRONT-END',
            description: [
                "ReactJS",
                "JavaScript",
                "JQuery",
                "BootStrap",
                "Material UI"
            ],
        },
        {
            title: "BACK-END",
            description: [
                "NodeJS", "Express.js", "Java", "Python", "PHP", "C# .NET"
            ],
        },
        {
            title: "SOURCE CONTROL",
            description: ["Git", "GitHub", "BitBucket", "SCRUM/Agile"],
        },
        {
            title: "DATABASES",
            description: ["MS SQL Server", "MySQL", "MongoDB"],
        },
    ],

    projects: [
        {
            tag: 'React',
            image: "https://www.augmenify.com/wp-content/uploads/2020/04/ai_clean_cropped.png",
            title: 'Augmenity',
            description: "Content Management System for admin to allow CRUD operations on the web pages.",
            stack: "Strapi, React, MongoDB",
            links: [
                {
                    link: "#", icon: <GitHubIcon />
                },
                {
                    link: "https://www.augmenify.com/", icon: <WebIcon />
                }
            ],
        },
        {
            tag: 'React',
            image: "https://www.nicolauria.com/images/dev-connector-logo.jpg",
            title: 'Dev Connector',
            description: " Small social network app for developers that includes authentication, profiles and forum posts",
            stack: "Node.js, React, MongoDB",
            links: [
                {
                    link: "#", icon: <GitHubIcon />
                },
                {
                    link: "https://www.augmenify.com/", icon: <WebIcon />
                }
            ],
        },

        {
            tag: 'PHP',
            image: "https://www.musictech.net/wp-content/uploads/2019/10/tutorial-create-edm-free-header@1400x1050.jpg",
            title: 'Audio Dash',
            description: "Music streaming site just like Spotify.",
            stack: 'PHP, HTML/CSS, JQuery, MySQL',
            links: [
                {
                    link: "https://www.google.com", icon: <YouTube />
                },
                {
                    link: "https://www.google.com", icon: <YouTube />
                }
            ],
        },

    ]

}
