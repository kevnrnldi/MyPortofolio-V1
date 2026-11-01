export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "techStack", link: "#techStack" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Hi, I'm Muhammad Kevin Rinaldi, \n a Backend Developer",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 min-h-[420px] md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-cover object-top",
    titleClassName: "justify-end",
    img: "/foto2.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Availability",
    description: "Open to work & collaboration",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning about GO and Docker.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title:
      "Monitoring and Evaluation Information System - University of Bengkulu ",
    des: "Web-based system for the Accounting Study Program to monitor and manage students' thesis progress, built with Laravel and React.",
    img: "/skripsi.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/Laravel.svg.webp",
      "/node.jpg",
      "/vue.webp",
    ],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "SIMBK UNIB - Student Counseling & Case Reporting Platform",
    des: "A confidential web-based counseling and campus reporting system for Universitas Bengkulu featuring multi-role administration, real-time case tracking, status filtering, and automated report exports in PDF/Excel.",
    img: "/Eco.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/Laravel.svg.webp",
      "/vue.webp",
      "/node.jpg",
    ],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Geographic Fire Mapping & Incident Reporting",
    des: "Multi-role backend with role-based access control for users, admins, and firefighters to report and manage fire incidents.",
    img: "/kebakaran.png",
    iconLists: ["/re.svg", "images.jpg", "/Laravel.svg.webp", "node.jpg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Lempuing Village - Digital Profile & CMS Platform",
    des: "Digitalize village administration and public announcements through a dynamic web application powered by a custom Content Management System.",
    iconLists: ["/tail.svg", "/ts.svg", "/Laravel.svg.webp", "/vue.webp"],
    img: "/desa.png",
    link: "/ui.apple.com",
  },

  {
    id: 5,
    title: "EcoBank - Waste Inventory & Financial System",
    des: "Automate waste deposit tracking, dynamic weight-to-currency conversions, and user balance management with a secure backend architecture.",
    img: "/Sampah.png",
    iconLists: ["/re.svg", "/tail.svg", "/Laravel.svg.webp", "/ts.svg"],
    link: "/ui.ecobank.com",
  },

  {
    id: 6,
    title: "FoodFinder - Local Culinary & Order App",
    des: "A full-stack MERN application built with React, Vite, Tailwind CSS, Express.js, and MongoDB for discovering regional restaurants, managing food catalogs, and processing orders.",
    img: "/.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "mongodb.png",
      "/node.jpg",
      "/ts.svg",
      "/express.png",
    ],
    link: "/ui.ecobank.com",
  },
  {
    id: 7,
    title: "VideoBrain - YouTube AI Summarizer & Contextual Chatbot",
    des: "An AI-powered full-stack web application built with Next.js (App Router), Express.js, MongoDB, Groq SDK, and Gemini API to extract YouTube transcripts, generate automated video summaries, and enable interactive video-based Q&A.",
    img: "/AIsummarize.png",
    iconLists: [
      "/tail.svg",
      "/node.jpg",
      "/ts.svg",
      "/express.png",
      "next.svg",
      "mongodb.png",
    ],
    link: "/ui.ecobank.com",
  },

  {
    id: 8,
    title: "Application of Two-Stream Late Fusion for AI Art Classifier",
    des: "Detect AI-generated paintings using a Two-Stream Late Fusion Deep Learning model combining EfficientNetV2 and Spatial Rich Models.",
    img: "/jurnal.png",
    iconLists: ["tensor.jpg", "python.png", "opencv.png"],
    link: "/ui.ecobank.com",
  },
];

export const techStack = [
  {
    icon: "/DATA/langflow.png",
    name: "Langflow",
  },
  {
    icon: "/DATA/mongoDB.svg",
    name: "MongoDB",
  },
  {
    icon: "/DATA/MySQL.svg",
    name: "MySQL",
  },
  {
    icon: "/DATA/PostgresSQL.svg",
    name: "PostgreSQL",
  },
  {
    icon: "/DATA/Python.svg",
    name: "Python",
  },
  {
    icon: "/DATA/TensorFlow.svg",
    name: "TensorFlow",
  },
  {
    icon: "/DATA/Postman.svg",
    name: "Postman",
  },
];

export const techStack2 = [
  {
    icon: "/AI/Docker.svg",
    name: "Docker",
  },
  {
    icon: "/AI/express.png",
    name: "Express",
  },
  {
    icon: "/next.svg",
    name: "NextJs",
  },
  {
    icon: "/AI/Node.js.svg",
    name: "NodeJs",
  },
  {
    icon: "/AI/React.svg",
    name: "React",
  },
  {
    icon: "/AI/Typescript.svg",
    name: "Typescript",
  },
  {
    icon: "/AI/Vue.js.svg",
    name: "Vue",
  },
  {
    icon: "/AI/Github.svg",
    name: "Github",
  },
  {
    icon: "/AI/Laravel.svg",
    name: "Laravel",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
