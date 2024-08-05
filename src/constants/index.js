import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  dotnetcore,
  docker,
  amana,
  pif,
  rcjy,
  sitcon,
  carrent,
  ecommerce,
  tripguide,
  threejs,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title:"Download Resume",
    download: true, // Add this flag to indicate download link
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Web Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: ".NET Core",
    icon: dotnetcore,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sr. Angular Developer",
    company_name: "Amana Jeddah",
    icon: amana,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Create visually appealing and intuitive user interfaces for the landing page, Amana Jeddah’s portfolio website, and the Investment Portal dashboard using Figma.",
      "Design and develop the company portfolio website to effectively showcase Amana Jeddah's expertise, projects, and achievements in a visually engaging manner.",
      "Utilize the latest version of Angular to develop the front-end of the Investment Portal dashboard, ensuring a professional and responsive user experience.",
      "Implement user-centric design principles to enhance the overall usability and accessibility of the web applications, ensuring a positive experience for end-users.",
      "Work closely with cross-functional teams, including developers and stakeholders, to ensure seamless integration of the designed UI/UX into the Angular frontend, maintaining consistency and professionalism throughout the web application.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Public Investment Fund",
    icon: pif,
    iconBg: "#383E56",
    date: "Aug 2022 - Aug 2023",
    points: [
      "Developing and maintaining QPR Software (web app) using MERN Stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers on JIRA to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Esar Information System",
    icon: rcjy,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - July 2022",
    points: [
      "Developing and maintaining Schools Learning Management System (web app) using React.js, .Net Core Web API, SQL and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing E2E solution for Royal Commission Schools (Jubail & Yanbu).",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Jr.Full Stack Developer",
    company_name: "SANI IT Consultant",
    icon: sitcon,
    iconBg: "#383E56",
    date: "Aug 2019 - Sep 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in SDLC and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Awais proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Awais does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Awais optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AwaisRehman",
  },
  {
    name: "E-Commerce",
    description:
      "Web-based application for shopping. By simply clicking on the product they wish to buy. The next steps, entering shipping and billing information, complete the process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: ".netcore webapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/AwaisRehman",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AwaisRehman",
  },
];

const socials = [
  {
    title: "LinkedIn",
    icon: linkedin,
    social_profile_link: "https://www.linkedin.com/in/awais-rehman-91b108138/",
  },
];

export { services, technologies, experiences, testimonials, projects, socials };
