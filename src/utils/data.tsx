import {
  Code2,
  Briefcase,
  GraduationCap,
  Search,
  BookOpen,
  Coffee,
  User,
  Mail
} from "lucide-react";

import { FiGithub, FiLinkedin } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/Interview-ai.png";
import PROJECT_IMG_2 from "../assets/images/PriceChecker.png";
import PROJECT_IMG_3 from "../assets/images/CoinFinder.png";
import PROJECT_IMG_4 from "../assets/images/Get-It.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Interview Prep AI",
    image: PROJECT_IMG_1,
    description:
      "An AI-powered platform designed to help users prepare for interviews by generating tailored questions",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini AI API",
    ],
    live_url: "https://prep-ai-v1.vercel.app/",
    github_url: "https://github.com/KangLin104/prep-ai",
  },
  {
    id: 2,
    title: "Price Checker",
    image: PROJECT_IMG_2,
    description:
      "A web application to check the prices of products from Amazon",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    live_url: "https://price-checker-amber.vercel.app/",
    github_url: "https://github.com/KangLin104/PriceChecker",
  },
  {
    id: 3,
    title: "Coin Finder",
    image: PROJECT_IMG_3,
    description:
      "A web application to search for cryptocurrencies and view their details",
    tags: ["React.js", "Redux", "Tailwind CSS"],
    live_url: "https://coinfinder3.netlify.app/",
    github_url: "https://github.com/KangLin104/CoinFinder",
  },
  {
    id: 4,
    title: "Get It",
    image: PROJECT_IMG_4,
    description:
      "Using React, Node.js, Express & PostgreSQl I was able to create an e-commerce web application in a team of 3. This project was created for Cuny Tech Prep.",
    tags: ["React.js","Node", "Express", "PostgreSQL", "Bootstrap"],
    live_url: null,
    github_url: "https://github.com/WENKAITAN/GET_IT",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Software Engineer journey",
    Company: "Self-taught",
    description:
      "Began learning programming in HTML, CSS, JavaScript and React. Built my first Project",
    icon: Code2,
    color: "bg-yellow-500",
  },
  {
    year: "2022",
    title: "First Internship",
    Company: "Holocron Technologies",
    description:
      "Joined Holocron Technologies as a Software engineer where I worked on various projects using React.js.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2022 - 2024",
    title: "second Internship",
    Company: "New York Public Library",
    description:
      "joined the New York Public Library as an Application Developer Intern, where I helped modernize various legacy applications using React.js and collaborated closely with backend engineers.",
    icon: Briefcase,
    color: "bg-gray-500",
  },
  {
    year: "2024",
    title: "Graduated from College",
    Company: "Cuny Baruch College",
    description:
      "Graduated with a Bachelor of Business Administration in Computer Information Systems from CUNY Baruch College, and Trying to find my next role",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "Third Internship",
    Company: "GrubHub",
    description:
      "Started working at Grubhub as a Software Engineer Intern, where I gained hands-on experience with Python and contributed to our pipeline repository, focusing on CI/CD processes and integrating data visualization with Datadog.",
    icon: Briefcase,
    color: "bg-orange-500",
  },
  {
    year: "2025",
    title: "Fourth Internship",
    Company: "Progyny",
    description:
      "Worked at Progyny as a Software Engineer Intern, where I get a chance to work on a little bit of everything, including Next.js to create frontend applications, Python for backend services",
    icon: Briefcase,
    color: "bg-red-500",
  },
  {
    year: "present",
    title: "Finding my next role",
    Company: "N/A",
    description:
      "Currently seeking a full time job to apply my skills and continue my professional growth in software engineering.",
    icon: Search,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always keeping up to date in technology and best practices",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Likes to tackle complex challenges and find solutions",
  },
  {
    icon: User,
    title: "User Experience",
    description: "Think about the end user in every project and how to improve their experience",
  },
];

export const SOCIALS = [
  {
    name: "Github",
    icon : FiGithub,
    url: "https://github.com/KangLin104",
    color: "hover:text-gray-600",
    bgColor: "hover: bg-gray-800",
    type: "link",
  },
  {
    name: "LinkedIn",
    icon : FiLinkedin,
    url: "https://www.linkedin.com/in/kang-lin-104/",
    color: "hover:text-blue-400",
    bgColor: "hover: bg-blue-500/10",
    type: "link",
  },
  {
    name: "Email",
    icon : Mail,
    url: "mailto:Kanglin104@gmail.com", 
    color: "hover:text-red-400",
    bgColor: "hover: bg-red-500/10",
    type: "email",
  }

]
