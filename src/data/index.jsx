import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SupportIcon from "@mui/icons-material/Support";
import {IconButton} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Mail from "@mui/icons-material/Mail";

export const simulations = [
  {
    title: "Percolation",
    desc: "Uses union-find paradigm to check whether the system percolates - i.e. if there is a connected path from the top of the grid all the way to the bottom",
    route: "https://percolation-chi.vercel.app",
    img: "https://user-images.githubusercontent.com/76162540/213430161-28ba73f3-afb9-400d-8c2f-9eba394df912.gif",
  },
  {
    title: "Convex Hull",
    desc: "Demonstration of Jarvis March algorithm used for finding the convex hull of a set of randomly arranged points in a 2D plane",
    route: "https://convexhull.vercel.app",
    img: "https://user-images.githubusercontent.com/76162540/213430642-90bb7f96-264b-4ac0-9bc3-f3204a5f67d1.gif",
  },
  {
    title: "Minimum Spanning Tree",
    desc: "Demonstration of Kruskal's algorithm to find minimum spanning tree of a graph. Edge weights are proportional to the edge lengths. Graphs are generated randomly",
    route: "https://kruskals.vercel.app",
    img: "https://user-images.githubusercontent.com/76162540/213431824-4b816435-db0c-47bd-964a-ba0c71557d65.gif",
  },
  {
    title: "3D Graph",
    desc: "3D representation of the Graph data structure, using javascript.",
    route: "/simulations/3dgraph",
    img: "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648995060/graph_u13auj.png",
  },
  {
    title: "Graveyard simulation",
    desc: "A scene consisting of a house, bushes, ghosts and lots of tombstones. I made this to implement various concepts like adding shadows, various light effects, applying textures and normal maps.",
    route: "/simulations/graveyard",
    img: "https://res.cloudinary.com/daa4wqa2h/image/upload/v1648995061/graveyard_blo9ob.png",
  },
  {
    title: "Galaxy demo ",
    desc: "A scene consisting of a galaxy of atleast 10,000 particles, rendered without writing any custom shader code. My i5 machine can handle 10,00,000 particles - what's yours ?",
    route: "/simulations/galaxy",
    img: "https://res.cloudinary.com/daa4wqa2h/image/upload/v1649007940/galaxy_bjfddt.png",
  },
];

export const resume =
  "https://drive.google.com/file/d/1thkWzi6LMD-DXgvRH0ZmlpmSTuICzm3A/view?usp=sharing";
// "https://drive.google.com/file/d/1FausnXdwG2cN1NvjFlwpZFteYbERkYtb/view?usp=sharing";
// "https://drive.google.com/file/d/1Xvq_yZmJ-SOGtAT0Mu8nNsFYoY4A8cRL/view?usp=sharing";

export const intro =
  "I'm a budding software engineer based in Madhya Pradesh, India. I've been developing web apps and 2D / 3D simulations for over a year.";

export const about =
  "I'm a third year engineering student pursuing my bachelor's degree in Information Technology from Shri Govindram Seksaria Institute of Technology and Science, Indore. I like to code cool things and showcase them online. I enjoy building fullstack websites and sometimes android apps with flutter. My primary focus is towards backend development. I also spend time creating generative digital art and simulations using frameworks like three.js, WebGL, OpenGL and SFML. I like to explore and try out new technologies and currently I'm focusing on building something cool with java.";

export const skills = [
  "C",
  "C++",
  "Java",
  "Python",
  "GLSL",
  "Rust",
  "HTML",
  "CSS",
  "Javascript",
  "Bootstrap",
  "React JS",
  "Material-UI",
  "WebGL",
  "three.js",
  "Redux",
  "Node JS",
  "Express JS",
  "Nest JS",
  "Spring-boot",
  "Mongoose",
  "MongoDB",
  "Postgresql",
  "Docker",
];

export const socials = [
  <IconButton
    onClick={() => window.open("https://github.com/r0nz-29/", "_blank")}
  >
    <GitHubIcon/>
  </IconButton>,

  <IconButton
    onClick={() =>
      window.open("https://www.instagram.com/the_aloo_boi/", "_blank")
    }
  >
    <InstagramIcon/>
  </IconButton>,

  <IconButton
    onClick={() => window.open("mailto:raunits29@gmail.com", "_blank")}
  >
    <Mail/>
  </IconButton>,

  <IconButton
    onClick={() =>
      window.open("https://www.linkedin.com/in/raunitshrivastava29/", "_blank")
    }
  >
    <LinkedInIcon/>
  </IconButton>,
];

export const other_projects = [
  {
    name: "define",
    github: "https://github.com/r0nz-29/define",
    skills: ["Rust", "urban-dictionary"],
    desc: "Rust script to fetch results from urban dictionary's api",
  },
  {
    name: "shooter",
    github: "https://github.com/r0nz-29/Shooter",
    link: "https://three-cannon-shooter.herokuapp.com/",
    skills: ["three.js", "cannon.js"],
    desc: "Simple First-Person-Shooter implementation using three.js and cannon.js",
  },
  {
    name: "task manager",
    github: "https://github.com/r0nz-29/TaskManager",
    skills: ["C"],
    desc: "A command line utility, can be used for recording TODOs, notes, important reminders and such",
  },
  {
    name: "physics simulations",
    github: "https://github.com/r0nz-29/simulations-new",
    link: "https://3d-simulations.netlify.app/",
    skills: ["React", "three.js"],
    desc: "Some physics simulations made for educational purposes",
  },
  {
    name: "Plan your trip",
    // github: "https://github.com/r0nz-29/procedural-terrains",
    link: "https://trip-planner-29.netlify.app/",
    skills: ["React", "Material UI", "Redux", "Java", "Spring-boot"],
    desc: "Your next trip is a single click away! Set your preferences and let the app find your next destination",
  },
];

export const journey = [
  {
    icon: <AccountBalanceIcon/>,
    pre_head: "University",
    title: "Shri Govindram Seksaria Institute of Technology and Science",
    duration: "2020 - 2024",
    body: `Bachelor's degree in Information Technology`,
    company: "https://www.linkedin.com/school/shri-g-s-institute-of-technology-&-science/",
  },
  {
    icon: <SupportIcon/>,
    pre_head: "Coordinator",
    title: "Art for Charity",
    duration: "Jun 2021 - Present",
    body: "Coordinated in various charity events.",
    company: "https://www.linkedin.com/company/art-for-charity/mycompany/",
  },
  {
    icon: <SupportIcon/>,
    pre_head: "Coordinator",
    title: "E-Cell, SGSITS",
    duration: "Jun 2021 - Present",
    body: "Coordinated in various events, webinars and maintained their official website.",
    company: "https://www.linkedin.com/company/ecellsgsits/mycompany/",
  },
  {
    icon: <SupportIcon/>,
    pre_head: "Web Development intern",
    title: "Infigon Futures",
    duration: "Jun 2021 - Aug 2021",
    body: "A remote internship where I was required to build a website for the ed-tech company using React js and firebase",
    techstack: ["React js", "Bootstrap", "Firebase"],
    company: "https://www.linkedin.com/company/infigon-futures/",
  },
  {
    icon: <SupportIcon/>,
    pre_head: "WebGL Developer",
    duration: "Aug 2021 - Sep 2021",
    title: "SimPHY",
    body: "This was a local freelance job. I developed interactive 3D simulations for explaining complex physics concepts, and hosted them on the web to enable quality education during online classes.",
    techstack: ["React js", "Three js"],
    company: "https://www.linkedin.com/company/simphy/about/",
  },
  {
    icon: <SupportIcon/>,
    pre_head: "Member",
    duration: "Nov 2021 - July 2022",
    title: "Google Developer Student Club",
    body: "Facilitated in organising events like The Flutter Festival, GDSC-WOW, etc. raising awareness among college students regarding Open-Source contributions, hackathons, and developer events like The Devfest 2021.",
    company: "https://www.linkedin.com/company/google-developer-student-clubs-sgsits/",
  },
  {
    icon: <SupportIcon/>,
    pre_head: "Full Stack Developer - Internship",
    duration: "Jun 2022 - Aug 2022",
    title: "MarketInc",
    body: `Worked on an online ERP software to track, surface and understand their business metrics.
           Reduced build times of the complex web application by 60% and reduced overall bundle size of the application with the help of react’s lazy loading feature and code-splitting.`,
    techstack: ["React js", "Redux js", "Redux-saga", "Node js", "Express js", "MongoDB"],
    company: "https://www.linkedin.com/company/marketincorporated/",
  },
  {
    icon: null,
    duration: "...towards excellence",
    title: "",
    body: "",
  },
];
