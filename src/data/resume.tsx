import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { start } from "repl";
import { AnimatedNumberRandomDemo } from "@/components/animated-number-demo";

export const DATA = {
  name: "Amanpreet Singh",
  initials: "AS",
  url: "https://next-portfolix.vercel.app/",
  location: "Dehradun, Uttarakhand",
  locationLink: "https://www.google.com/maps/place/Dehradun,+Uttarakhand",
  description:
    "Full Stack Web Developer and Product Designer. I love building innovative web applications and creating seamless user experiences.",
  summary:
    "I am a passionate Full Stack Product Developer with expertise in modern web technologies including React, Node.js, Python, and Java. I have hands-on experience in building scalable web applications, working with databases, and creating responsive user interfaces. I enjoy solving complex problems and staying updated with the latest technology trends.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "Spring Boot",
    "PHP",
    "C++",
    "MongoDB",
    "MySQL",
    "Express.js",
    "HTML",
    "CSS",
    "Bootstrap",
    "WordPress",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amanpreetsingh2019463@gmail.com",
    tel: "+91 8630447658",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Amanpreet325",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amanpreet-singh-62bb49251",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/amanpreetXing",
        icon: Icons.x,
        navbar: true,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://next-portfolix.vercel.app",
        icon: Icons.globe,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/amanpreet325/",
        icon: Icons.globe,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:amanpreetsingh2019463@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Merchant Navy Decoded",
      href: "https://www.merchantnavydecodedjobs.com/",
      badges: [],
      location: "Dehradun, Uttarakhand",
      title: "Software Developer Intern",
      logoUrl: "/mnd.webp",
      start: "July 2025",
    },
    {
      company: "Universal Engineers",
      href: "https://universalengineerrs.com/",
      badges: [],
      location: "Dehradun, Uttarakhand",
      title: "Software Developer & Creative Intern",
      logoUrl: "/universal.png",
      start: "November 2024",
      end: "February 2025",
    },
    {
      company: "RankMantra",
      href: "https://rankmantra.com",
      badges: [],
      location: "Dehradun, Uttarakhand",
      title: "Full Stack Developer Intern",
      logoUrl: "/rankmantra.png",
      start: "March 2024",
      end: "September 2024",
      description:
        "Excelled in building and maintaining websites with a focus on both frontend and backend development, utilizing PHP, JavaScript, Bootstrap, HTML, CSS, and WordPress to create dynamic, responsive designs and custom theme plugins. Applied MERN stack expertise to develop scalable full-stack applications, integrating MongoDB, Express.js, React.js, Node.js, PHP backend for efficient industry-level web solutions.",
    },
    {
      company: "CodeClause",
      href: "https://codeclause.com/",
      badges: [],
      location: "Dehradun, Uttarakhand",
      title: "Front End Developer Intern",
      logoUrl: "/codeclause.webp",
      start: "November 2023",
      end: "December 2023",
      description:
        "Excelled in building and maintaining websites with a focus on both frontend and backend development, utilizing PHP, JavaScript, Bootstrap, HTML, CSS, and WordPress to create dynamic, responsive designs and custom theme plugins. Applied MERN stack expertise to develop scalable full-stack applications, integrating MongoDB, Express.js, React.js, Node.js, PHP backend for efficient industry-level web solutions.",
    },
  ],
  education: [
    {
      school: "Graphic Era University Dehradun",
      href: "https://geu.ac.in/",
      degree: "B.TECH in Computer Science",
      logoUrl: "/geu.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Doon International School",
      href: "https://dooninternational.com/",
      degree: "12th Grade",
      logoUrl: "/dis.png",
      start: "2020",
      end: "2021",
    },
    {
      school: "Doon International School",
      href: "https://dooninternational.com/",
      degree: "10th Grade",
      logoUrl: "/dis.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "aClassMilk - Organic Farm Dairy Store",
      href: "https://aclassmilk.com/",
      dates: "Jan 2024 - Apr 2024",
      active: true,
      description:
        "An organic farm dairy ecommerce platform for milk, ghee, and traditional desi items with integrated delivery API. Complete solution for farm-to-table dairy products with real-time order tracking and delivery management.",
      technologies: [
        "PHP",
        "React.js",
        "JavaScript",
        "MySQL",
        "Bootstrap",
        "API Integration",
        "Payment Gateway",
        "Delivery Tracking",
      ],
      links: [
        {
          type: "Coming Soon",
          href: "https://aclassmilk.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/doodh.mp4",
    },
    {
      title: "Financix - Financial Dashboard",
      href: "https://github.com/Amanpreet325/NextJs-Financial-Planner-App",
      dates: "Mar 2024 - May 2024",
      active: true,
      description:
        "Comprehensive financial planning dashboard built with Next.js, featuring expense tracking, budget management, financial analytics, and investment portfolio visualization for personal finance management.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Financial Analytics",
        "Data Visualization",
        "TailwindCSS",
        "Financial Planning",
        "Dashboard UI",
      ],
      links: [
        {
          type: "Coming Soon",
          href: "https://github.com/Amanpreet325/NextJs-Financial-Planner-App",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fin.webp",
      video: "",
    },
    {
      title: "Merchant Navy Job Portal",
      href: "https://www.merchantnavydecodedjobs.com/",
      dates: "Jun 2024 - Sep 2024",
      active: true,
      description:
        "A comprehensive job portal with intelligent recommendation system filtering jobs based on maritime ranks, NLP-powered resume parser and maker, and detailed company comparison features. Complete solution for merchant navy career management.",
      technologies: [
        "PHP",
        "JavaScript",
        "MySQL",
        "NLP",
        "Machine Learning",
        "Resume Parser",
        "Recommendation System",
        "Bootstrap",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://www.merchantnavydecodedjobs.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Purple App Phone Mockup Sales Marketing Presentation.gif",
    },
    {
      title: "Eventura - Smart Event Management",
      href: "https://github.com/Amanpreet325/Eventura_SocialApp",
      dates: "Feb 2024 - Jun 2024",
      active: true,
      description:
        "MERN stack event management application with role-based access control and AI-integrated chatbot for seamless event planning and management. Features real-time notifications and intelligent event recommendations.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "AI Chatbot",
        "Role-based Auth",
        "Socket.io",
        "JWT",
      ],
      links: [
        {
          type: "github",
          href: "https://github.com/Amanpreet325/Eventura_SocialApp",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eventurra.png",
      video: "",
    },
    {
      title: "Peer Penny - Web3 Savings Vault",
      href: "https://peerpenny.ca/",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "Blockchain-based secure money saving vault application with smart contract integration for safe wallet management and decentralized savings solutions. Built with Web3 technologies for enhanced security and transparency.",
      technologies: [
        "Web3",
        "Blockchain",
        "Smart Contracts",
        "PHP",
        "Ethereum",
        "Solidity",
        "MetaMask Integration",
        "Cryptocurrency",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://peerpenny.ca/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/App Launch Your Story in Black Bright Green Cool Corporate Style.gif",
    },
    {
      title: "Smart Seating Posture Recognition",
      href: "https://github.com/Amanpreet325/intelligent-seating-posture-recognition",
      dates: "Aug 2024 - Nov 2024",
      active: true,
      description:
        "AI-powered posture recognition system for health and productivity improvement using computer vision and deep learning models. Real-time analysis and feedback for better ergonomic practices.",
      technologies: [
        "Python",
        "OpenCV",
        "TensorFlow",
        "Deep Learning",
        "Computer Vision",
        "Healthcare",
        "Machine Learning",
        "Real-time Processing",
      ],
      links: [
        {
          type: "Coming Soon",
          href: "https://github.com/Amanpreet325/intelligent-seating-posture-recognition",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/4222bec0-13b9-4871-b75b-f3684ee84825.png",
      video: "",
    },
    {
      title: "Heart Disease Detection System",
      href: "https://github.com/Amanpreet325/Heart_FailurePrediction",
      dates: "May 2024 - Jul 2024",
      active: true,
      description:
        "Advanced heart disease prediction system using Artificial Neural Networks with TensorFlow and Keras for accurate medical diagnosis and early detection.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "ANN",
        "Machine Learning",
        "Healthcare",
        "Data Analysis",
        "Medical AI",
      ],
      links: [
        {
          type: "Coming Soon",
          href: "https://github.com/Amanpreet325/Heart_FailurePrediction",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/heart-based.jpg",
      video: "",
    },
    {
      title: "CRM for Pathology Labs",
      href: "https://github.com/Amanpreet325/PathologyCRM",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Coming Soon",
      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "REST API",
      ],
      links: [
        {
          type: "Coming Soon",
          href: "https://github.com/Amanpreet325/PathologyCRM",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/crm for pathology labs.webp",
      video: "",
    },
    {
      title: "Universal Engineers",
      href: "https://www.universalengineerrs.com",
      dates: "2024",
      active: true,
      description:
        "React-based web application for Universal Engineers, featuring modern design and responsive user interface for engineering solutions and services.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive Design",
        "Modern UI/UX",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.universalengineerrs.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/uee.png",
      video: "",
    },
    {
      title: "Real-Time Chat Application",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Real-time chat application built with React and Socket.io, featuring instant messaging, online user status, and seamless communication experience with modern UI design.",
      technologies: [
        "React",
        "Socket.io",
        "Node.js",
        "JavaScript",
        "Real-time Communication",
        "WebSockets",
        "Express.js",
        "Modern UI/UX",
      ],
      links: [
        {
          type: "Coming Soon",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/chat.jpg",
      video: "",
    },
    {
      title: "Interactive Number Animation",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Interactive animated number component with smooth transitions and shuffle functionality. Features currency formatting, percentage displays, and engaging click interactions.",
      technologies: [
        "React",
        "TypeScript",
        "Framer Motion",
        "UI Components",
        "Animation",
        "Interactive Design",
      ],
      links: [
        {
          type: "Try Demo",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
      interactiveComponent: AnimatedNumberRandomDemo,
    },
  ],
  
} as const;
