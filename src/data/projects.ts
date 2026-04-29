export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: "web" | "api";
  image: string;
  link: string;
  details: {
    screenshots: string[];
    github: string;
    demo: string;
    longDescription: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Quantum Task Engine",
    description:
      "A high-performance task scheduler built with Node.js and Redis, capable of handling millions of jobs with sub-millisecond latency.",
    tech: ["Node.js", "Redis", "TypeScript", "Docker"],
    category: "api",
    image: "https://picsum.photos/seed/engine/800/600",
    link: "#",
    details: {
      screenshots: [
        "https://picsum.photos/seed/engine1/800/600",
        "https://picsum.photos/seed/engine2/800/600",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "The Quantum Task Engine was designed to solve the bottleneck of distributed task processing. It uses a custom priority queue implementation in Redis and a cluster of Node.js workers to ensure high availability and low latency.",
    },
  },
  {
    id: 2,
    title: "Neural Vision API",
    description:
      "A Python-based image recognition service using TensorFlow and FastAPI, optimized for real-time edge computing.",
    tech: ["Python", "TensorFlow", "FastAPI", "MongoDB"],
    category: "api",
    image: "https://picsum.photos/seed/vision/800/600",
    link: "#",
    details: {
      screenshots: [
        "https://picsum.photos/seed/vision1/800/600",
        "https://picsum.photos/seed/vision2/800/600",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "Neural Vision API provides state-of-the-art object detection and classification. Built with FastAPI for high-performance asynchronous request handling and MongoDB for storing metadata and processing logs.",
    },
  },
  {
    id: 3,
    title: "Nexus Dashboard",
    description:
      "A real-time analytics dashboard for monitoring distributed systems, featuring interactive D3.js visualizations.",
    tech: ["React", "Express.js", "D3.js", "Tailwind CSS"],
    category: "web",
    image: "https://picsum.photos/seed/dashboard/800/600",
    link: "#",
    details: {
      screenshots: [
        "https://picsum.photos/seed/dashboard1/800/600",
        "https://picsum.photos/seed/dashboard2/800/600",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "Nexus Dashboard aggregates metrics from multiple microservices and presents them in a unified, interactive view. It leverages WebSockets for real-time updates and D3.js for complex data visualizations.",
    },
  },
  {
    id: 4,
    title: "E-Commerce Core",
    description:
      "A scalable e-commerce backend with integrated payment processing and inventory management.",
    tech: ["Node.js", "Express.js", "MongoDB", "Stripe"],
    category: "api",
    image: "https://picsum.photos/seed/shop/800/600",
    link: "#",
    details: {
      screenshots: [
        "https://picsum.photos/seed/shop1/800/600",
        "https://picsum.photos/seed/shop2/800/600",
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "E-Commerce Core provides a robust foundation for online stores. It features a secure checkout flow, real-time inventory tracking, and an administrative dashboard for order management.",
    },
  },
  {
    id: 5,
    title: "Math-Falta",
    description:
      "A math learning website for primary and preparatory students with organized lessons and exercises in a simple and engaging interface.",
    tech: ["Javascript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    category: "api",
    image: "/img/math-falta.png",
    link: "#",
    details: {
      screenshots: [
        "/img/math-falta.png"
      ],
      github: "https://github.com/baadishy/Math-Falta-frontend",
      demo: "https://math-falta.vercel.app",
      longDescription:
        "MathForMe is a web platform designed to help students in primary and preparatory school practice mathematics in a clear and structured way. The website organizes lessons and questions by grade level, making it easy for students to navigate and learn. It features a clean and responsive interface built with Javascript and a backend powered by Node.js and Express for managing content and users.",
    },
  },
  {
    id: 6,
    title: "Dr. Mina Samir Clinic Website",
    description:
      "A professional medical website designed to present clinic services, doctor information, and provide an easy way for patients to contact the clinic.",
    tech: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    category: "web",
    image: "/img/dr-mina-samir.png",
    link: "https://baadishy.github.io/Dr-Mina-Samir/",
    details: {
      screenshots: [
        "/img/dr-mina-samir.png"
      ],
      github: "https://github.com/baadishy/Dr-Mina-Samir",
      demo: "https://baadishy.github.io/Dr-Mina-Samir/",
      longDescription:
        "The Dr. Mina Samir Clinic Website is a clean and modern medical portfolio built to help a doctor present their services online. The site introduces the doctor, highlights available medical services, and allows visitors to easily find clinic contact information and location. The design focuses on clarity, responsiveness, and a professional look suitable for healthcare websites.",
    },
  },
  {
    id: 7,
    title: "Dr. Demiana Makram Clinic Website",
    description:
      "A modern medical portfolio website designed to present doctor information, clinic services, and contact details in a clean and professional layout.",
    tech: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    category: "web",
    image: "/img/dr-demiana.png",
    link: "https://baadishy.github.io/Dr-Demiana-Makram/",
    details: {
      screenshots: ["/img/dr-demiana.png"],
      github: "https://github.com/baadishy/Dr-Demiana-Makram",
      demo: "https://baadishy.github.io/Dr-Demiana-Makram/",
      longDescription:
        "The Dr. Demiana Makram Clinic Website is a responsive medical portfolio created to help present a doctor's professional profile online. The website highlights clinic services, doctor credentials, and essential contact information, making it easier for patients to learn about the clinic and reach out. The project focuses on a clean medical design, easy navigation, and mobile-friendly layout suitable for healthcare websites.",
    },
  },
];
