import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import WebIcon from '@mui/icons-material/Web'
import AssignmentIcon from '@mui/icons-material/Assignment'
import Devcon from '../Assets/Images/devCon.webp'
import Tru from '../Assets/Images/truevue.webp'
import mac from '../Assets/Images/machinist.png'
import wink from '../Assets/Images/wink.png'
import todo from '../Assets/Images/todo.png'

const resumeData = {
  name: 'Ramandeep Singh',
  title: 'Full Stack Developer',
  birthday: 'April 6th, 1996',
  email: 'ramandeep.9333@gmail.com',

  social: ['Facebook', 'LinkedIn', 'GitHub'],
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
      link: 'https://github.com/nexusraman',
      text: 'GitHub',
      icon: <GitHubIcon />
    }
  },

  about:
    'As a highly adaptable, innovative, and skilled Full Stack Developer, I possess extensive experience in developing enterprise-level web applications, web services, and microservices across multiple frameworks and languages. With a strong motivation for delivering high-quality software solutions, I have spent the last 3 years honing my technical skills and driving business growth and success through my work. \n\nMy expertise in a wide range of programming languages, including as Java, Python, C, C++, C#, SQL, JavaScript, jQuery, PHP, XML, and HTML&CSS as well as popular frameworks, including, ReactJS, React hooks, React Native, NodeJS, TypeScript, AngularJS, VueJS, MaterialUI, Bootstrap, Redux, JSX, which allows me to create highly scalable and efficient solutions that meet the unique needs of each project. I am highly motivated, results-driven, and passionate about utilizing my skills and experience to deliver innovative and effective software solutions that exceed expectations.',

  experiences: [
    {
      title: 'Junior Software Developer',
      date: 'October 2021- Present',
      description:
        '✦ Developing and maintaining custom components using TypeScript, JavaScript, React, XML, and CSS (Sass). \n ✦ Creating custom applications using PowerApps, resulting in increased business automation and streamlined workflows \n ✦ Contributing to the successful implementation of D365/CRM system by actively participating in designing and customizing the system to meet client requirements. \n ✦ Developing custom components in Omnichannel for HP, utilizing out-of-the-box functionality to deliver quality solutions. '
    },
    {
      title: 'Research Assistant - Software Developer',
      date: 'May 2021- December 2021',
      description:
        '✦ Actively contributed to understanding user stories and translating to application development framework and improving User Experience. \n ✦ Acted as the Project coordinator and collaborated with client and other stakeholders. \n ✦ Developed a full stack responsive web application with multi-tenant architecture for users to view real-time and historical data of sensors via API. \n ✦ Worked with BeagleBoard to design a system that can collect data from the field'
    }
  ],

  education: [
    {
      title: 'Computer Applications Development - Conestoga College',
      date: 'September 2020 - Present',
      description:
        '✦ Design, input, extract, format, and report information from a database and Analyze and design an information system in an object-oriented environment.'
    },
    {
      title: 'Software and Information System Testing - Fanshawe College',
      date: 'September 2019 - April 2020',
      description:
        '✦ Develop test cases to verify system functionality and individual components of the system architecture. \n✦ Test, verify, and evaluate procedures to assess software quality and improve software performance.'
    },
    {
      title:
        'Bachelor of Science in Information technology - Guru Nanak Dev University',
      date: 'June 2014 - June 2017',
      description:
        '✦ Apply knowledge of computing requirements and mathematics for technology solutions in business applications.\n✦ Design and use spreadsheets and database applications for business processes and tracking. \n✦ Develop an ability to communicate effectively with a range of audiences.'
    }
  ],
  services: [
    {
      title: 'Software Development',
      description:
        ' Analyze users needs and design, develop, and test software and applications.',
      icon: <WebIcon />
    },
    {
      title: 'Mobile Development',
      description:
        'Building Mobile apps, such as personal digital assistants, enterprise digital assistants or mobile phones',
      icon: <AssignmentIcon />
    },
    {
      title: 'Web Development',
      description:
        'Building websites which includes web design, web publishing, web programming, and database management.',
      icon: <WebIcon />
    }
  ],

  skills: [
    {
      title: 'FRONT-END',
      description: [
        'ReactJS',
        'JavaScript',
        'JQuery',
        'BootStrap',
        'Material UI',
        'Tailwind CSS',
        'CSS'
      ]
    },
    {
      title: 'BACK-END',
      description: ['Java', 'Python', 'PHP', 'C# .NET', 'JavaScript']
    },
    {
      title: 'SOURCE CONTROL',
      description: ['Git', 'GitHub', 'BitBucket', 'SCRUM/Agile', 'Azure DevOps']
    },
    {
      title: 'DATABASES',
      description: ['MS SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL']
    }
  ],

  projects: [
    {
      image:
        'https://www.augmenify.com/wp-content/uploads/2020/04/ai_clean_cropped.png',
      title: 'Augmenity',
      description:
        'Content Management System for admin to allow CRUD operations on the web pages.',
      stack: 'Strapi, React, MongoDB, JavaScript, Material UI',
      links: [
        {
          link: 'https://github.com/nexusraman/Augmenify',
          icon: <GitHubIcon />
        },
        {
          link: 'https://www.augmenify.com/',
          icon: <WebIcon />
        }
      ]
    },
    {
      image: Devcon,
      title: 'Dev Connector',
      description:
        ' Small social network app for developers that includes authentication, profiles and forum posts',
      stack: 'Node.js, React, MongoDB',
      links: [
        {
          link: 'https://github.com/nexusraman/DevConnector',
          icon: <GitHubIcon />
        }
      ]
    },
    {
      image: Tru,
      title: 'Chemical Monitoring System',
      description:
        'Full stack responsive web application with multi-tenant architecture for users to view real-time and historical data of sensors via API',
      stack: 'Node.js, React, Material UI, MongoDB',
      links: [
        {
          link: 'https://github.com/nexusraman/Transchem',
          icon: <GitHubIcon />
        }
      ]
    },

    {
      image:
        'https://www.musictech.net/wp-content/uploads/2019/10/tutorial-create-edm-free-header@1400x1050.jpg',
      title: 'Audio Dash',
      description:
        'Music streaming site just like Spotify that allows users to listen to music online.',
      stack: 'PHP, HTML/CSS, JQuery, MySQL',
      links: [
        {
          link: 'https://github.com/nexusraman',
          icon: <GitHubIcon />
        }
      ]
    },
    {
      image: mac,
      title: 'Machinist Hub',
      description:
        'Full Stack Web Application to track Daily activities and transactions of a small scale spare parts factory.',
      stack: 'React, HTML/CSS, JavaScript, MongoDb, Tailwind CSS',
      links: [
        {
          link: 'https://github.com/nexusraman/machinistHubClient',
          icon: <GitHubIcon />
        },
        {
            link: 'https://manjitsingh.netlify.app/',
            icon: <WebIcon />
          }
      ]
    },
    {
      image: wink,
      title: 'Winkworthy',
      description:
        'Full Stack Web dating and match making website, that connects users with compatible partners based on various factors, such as personality traits, interests, and location. ',
      stack: 'React, HTML/CSS, JavaScript, MongoDb',
      links: [
        {
          link: 'https://github.com/nexusraman/WinkWorthy',
          icon: <GitHubIcon />
        }
      ]
    },
    {
      image: todo,
      title: 'To do Tasks',
      description:
        'A To-Do Tasks app is a software application that helps users to manage their tasks and activities in a digital format. This app enables users to create, organize, prioritize, and manage tasks efficiently.',
      stack: 'React, HTML/CSS, JavaScript, MongoDb',
      links: [
        {
          link: 'https://github.com/nexusraman/todoStarter',
          icon: <GitHubIcon />
        }
      ]
    }
  ]
}

export default resumeData
