export const personalInfo = {
  name: "Kriti Priya",
  title: "Creative Full Stack & 3D Web Engineer",
  taglines: [
    "Three.js & 3D Creative Web Engineer",
    "Full-Stack React & Node.js Developer",
    "350+ LeetCode Problem Solver",
    "Modern UI/UX & High-Performance Frontend"
  ],
  bio: "Computer Science and Engineering undergraduate at Sandip University (2023-2027) with a passion for blending algorithmic problem-solving (350+ LeetCode problems solved, JEE Mains qualified) with cutting-edge 3D interactive web experiences. Former Full Stack Development Intern at Codec Technologies.",
  email: "kritipriyas2004@gmail.com",
  phone: "+91-8538908849",
  location: "India",
  status: "Available for High-Impact Roles & Internships",
  resumeUrl: "/Kriti_Priya_Resume.pdf",
  socials: {
    github: "https://github.com/KritiPriya14",
    linkedin: "https://www.linkedin.com/in/kritipriya14/",
    leetcode: "https://leetcode.com/u/KritiPriya_coder/",
    email: "mailto:kritipriyas2004@gmail.com",
    phone: "tel:+918538908849"
  },
  leetcodeUsername: "KritiPriya_coder",
  web3FormsKey: "b4cde030-f166-4a52-982a-ddb4dd265571"
};

export const keyStats = [
  { label: "DSA Problems Solved", value: "350+", sub: "LeetCode (@KritiPriya_coder)", highlight: true },
  { label: "Academic Milestone", value: "JEE Mains", sub: "National Qualified", highlight: false },
  { label: "B.Tech CSE CGPA", value: "7.3", sub: "Sandip University (till 6th sem)", highlight: false },
  { label: "English Proficiency", value: "C1 Advanced", sub: "EF SET Certified (Score 61)", highlight: true },
  { label: "Industry Experience", value: "Full Stack", sub: "Codec Technologies Intern", highlight: false },
];

export const skillsData = {
  categories: [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend & 3D Web" },
    { id: "backend", name: "Backend & Database" },
    { id: "languages", name: "Languages & DSA" },
    { id: "tools", name: "Tools & Fundamentals" },
  ],
  skills: [
    // Frontend & 3D
    { name: "React.js", category: "frontend", level: 92, icon: "Atom", desc: "Component architecture, hooks, state management, custom hooks", color: "#61DAFB" },
    { name: "Three.js / R3F", category: "frontend", level: 88, icon: "Box", desc: "3D scene graphs, lighting, camera parallax, Drei, 60fps performance", color: "#EC4899" },
    { name: "Framer Motion", category: "frontend", level: 90, icon: "Sparkles", desc: "Complex physics animations, gestures, staggered reveals", color: "#A855F7" },
    { name: "Tailwind CSS", category: "frontend", level: 95, icon: "Palette", desc: "Modern utility-first styling, glassmorphism, responsive systems", color: "#38BDF8" },
    { name: "JavaScript (ES6+)", category: "frontend", level: 90, icon: "FileCode", desc: "Async/await, closures, prototypes, event loops, DOM manipulation", color: "#FBBF24" },
    { name: "HTML5 & CSS3", category: "frontend", level: 95, icon: "Layout", desc: "Semantic tags, CSS Grid, Flexbox, Keyframe animations", color: "#E44D26" },

    // Languages & DSA
    { name: "C++", category: "languages", level: 88, icon: "Terminal", desc: "STL, memory optimization, competitive programming, OOP", color: "#00599C" },
    { name: "Java", category: "languages", level: 84, icon: "Coffee", desc: "Core Java, OOP principles, collections framework", color: "#E76F00" },
    { name: "Data Structures & Algo", category: "languages", level: 92, icon: "Cpu", desc: "350+ LeetCode solved (Trees, Graphs, DP, Arrays, Backtracking)", color: "#10B981" },

    // Backend
    { name: "Node.js", category: "backend", level: 82, icon: "Server", desc: "Event-driven runtime, asynchronous architecture, REST APIs", color: "#22C55E" },
    { name: "Express.js", category: "backend", level: 85, icon: "Layers", desc: "Middleware pipelines, routing, API design, error handling", color: "#94A3B8" },
    { name: "MongoDB", category: "backend", level: 80, icon: "Database", desc: "NoSQL document schema design, CRUD operations, integration", color: "#16A34A" },
    { name: "RESTful API Design", category: "backend", level: 88, icon: "Network", desc: "Status codes, secure auth, endpoints, Postman testing", color: "#3B82F6" },

    // Tools & CS Fundamentals
    { name: "Git & GitHub", category: "tools", level: 90, icon: "GitBranch", desc: "Version control, branching workflows, pull requests, CI/CD", color: "#F05032" },
    { name: "VS Code", category: "tools", level: 94, icon: "Code", desc: "Debugging, extensions, performance profiling, workflow efficiency", color: "#007ACC" },
    { name: "OOP & Operating Systems", category: "tools", level: 85, icon: "Component", desc: "Modularity, abstraction, encapsulation, process scheduling", color: "#6366F1" },
    { name: "DBMS", category: "tools", level: 82, icon: "HardDrive", desc: "Relational database concepts, normalization, SQL queries", color: "#8B5CF6" },
  ]
};

export const projectsData = [
  {
    id: "aurel",
    title: "AUREL – Premium Fashion E-Commerce",
    subtitle: "Responsive luxury fashion storefront with immersive 3D visuals & high-converting shopping flows",
    featured: true,
    year: "2026",
    role: "Full-Stack & 3D Creative Engineer",
    badge: "Flagship Production Project",
    statusBadge: "Live Deployed on Vercel",
    gradient: "from-purple-600 via-indigo-600 to-cyan-500",
    description: "Built a responsive e-commerce frontend using React, Vite, Tailwind CSS, and React Router, featuring reusable components and a premium editorial UI. Engineered an immersive 3D hero experience using Three.js, React Three Fiber, and Drei, with interactive animations and transitions powered by Framer Motion.",
    bulletPoints: [
      "Built a responsive e-commerce frontend using React, Vite, Tailwind CSS, and React Router, featuring reusable components and premium editorial UI.",
      "Created an immersive 3D hero experience using Three.js, React Three Fiber, and Drei, with interactive animations and transitions powered by Framer Motion.",
      "Implemented product browsing, search and filtering, shopping cart state management using Context API and useReducer, wishlist functionality, and a simulated checkout flow.",
      "Optimized production build and deployed live with zero latency on Vercel."
    ],
    techStack: [
      "React.js",
      "Three.js",
      "React Three Fiber",
      "Drei",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "React Router",
      "Context API",
      "useReducer"
    ],
    features: [
      { title: "3D Hero Atelier", desc: "Interactive cursor-reactive 3D form manipulation running at a rock-solid 60 FPS." },
      { title: "Editorial Shopping UI", desc: "Minimalist luxury dark aesthetic inspired by modern haute couture storefronts." },
      { title: "State-Driven Cart & Wishlist", desc: "Real-time cart count, quantity adjustments, wishlist toggling via Context API & useReducer." },
      { title: "Simulated Checkout Flow", desc: "Complete end-to-end purchasing simulation with client-side order confirmation." }
    ],
    metrics: [
      { label: "Interactive 3D Engine", value: "60 FPS" },
      { label: "Production Deployment", value: "Vercel Live" },
      { label: "State Architecture", value: "Context + Reducer" }
    ],
    demoUrl: "https://ecommerce-mauve-chi-68.vercel.app/",
    githubUrl: "https://github.com/KritiPriya14",
    previewImage: "/projects/aurel.jpg"
  }
];

export const experienceData = [
  {
    title: "Full Stack Development Intern",
    company: "Codec Technologies Pvt. Ltd.",
    period: "Oct 2026",
    location: "India",
    type: "Industry Internship",
    description: "Learned and executed full-stack development using HTML, CSS, JavaScript, React.js, Node.js, and Express.js, integrating modern front-end interfaces with back-end architectures.",
    achievements: [
      "Learned full-stack development using HTML, CSS, JavaScript, React.js, Node.js, and Express.js.",
      "Studied RESTful API development, MongoDB, authentication, and front-end/back-end integration.",
      "Explored Git/GitHub, application deployment, CI/CD, performance optimization, and testing."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git/GitHub", "CI/CD"]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Sandip University, Sijoul",
    period: "2023 – 2027",
    score: "CGPA: 7.3 (till 6th sem.)",
    rollNo: "230205131009",
    highlights: [
      "Specializing in Computer Science and Engineering with strong focus on Data Structures & Algorithms, Object-Oriented Programming, and Modern Web Systems.",
      "Key Coursework: Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, DBMS.",
      "Areas of Interest: DSA, AI-Assisted Web Development."
    ]
  },
  {
    degree: "Board of Intermediate Education, Bihar",
    institution: "JN college",
    period: "2019 – 2021",
    score: "Intermediate (Class XII)",
    highlights: [
      "Strong foundation in Physics, Chemistry, and Mathematics (PCM).",
      "Analytical discipline that enabled qualifying competitive JEE Mains."
    ]
  },
  {
    degree: "Central Board of Secondary Education (CBSE)",
    institution: "Regional Secondary School",
    period: "2018 – 2019",
    score: "Secondary (Class X)",
    highlights: [
      "Graduated with distinction across science, mathematics, and computer applications.",
      "Early start in programming fundamentals and logic development."
    ]
  }
];

export const certificationsData = [
  {
    title: "Goldman Sachs – Risk Job Simulation",
    issuer: "Forage",
    year: "Oct 2026",
    badge: "Risk Engineering & Analysis",
    date: "October 21st, 2026",
    enrolmentCode: "6ad88fc67fae55e1c92cb3a1",
    userCode: "6ad870437fae55e1c9274a29",
    pdfUrl: "/certificates/goldman_sachs_risk.pdf",
    tasks: [
      "An introduction to risk",
      "Evaluating client profiles and real estate investments"
    ],
    description: "Completed practical simulation tasks in risk evaluation, client financial profiles assessment, and real estate investment models.",
    icon: "ShieldAlert"
  },
  {
    title: "Walmart Global Tech – Advanced Software Engineering Job Simulation",
    issuer: "Forage",
    year: "Oct 2026",
    badge: "System Design & Architecture",
    date: "October 21st, 2026",
    enrolmentCode: "6ad872377fae55e1c9279f2c",
    userCode: "6ad870437fae55e1c9274a29",
    pdfUrl: "/certificates/walmart_software_engineering.pdf",
    tasks: [
      "Advanced Data Structures",
      "Software Architecture",
      "Relational Database Design",
      "Data Munging"
    ],
    description: "Completed practical engineering tasks under Walmart Global Tech leadership (Suresh Kumar, Global CTO), focusing on advanced data structures, software architecture, and relational database schema design.",
    icon: "Cpu"
  },
  {
    title: "EF SET English Certificate – C1 Advanced",
    issuer: "EF Standard English Test",
    year: "Oct 2026",
    badge: "CEFR C1 Advanced (Score 61/100)",
    date: "October 21st, 2026",
    verifyUrl: "https://cert.efset.org/Czetaj",
    pdfUrl: "/certificates/efset_c1_advanced.pdf",
    tasks: [
      "Reading: 71/100 (C2 Proficient)",
      "Listening: 50/100 (B1 Intermediate)"
    ],
    description: "Earned C1 Advanced English certification with C2 Proficient in Reading (71/100). Demonstrates fluent and nuanced professional and technical communication ability.",
    icon: "Award"
  }
];

export const achievementsData = [
  {
    title: "Qualified JEE Mains",
    period: "2021 – 2022",
    badge: "National Competitive Exam",
    description: "Qualified prestigious national engineering entrance exam, testing advanced mathematical aptitude, analytical problem solving, and scientific reasoning.",
    icon: "Trophy"
  },
  {
    title: "Solved 350+ Coding Problems",
    period: "2023 – 2025",
    badge: "LeetCode: KritiPriya_coder",
    description: "Solved 350+ algorithmic challenges across Arrays, Trees, Graphs, Dynamic Programming, and Sorting in C++ and Java.",
    icon: "Code2"
  }
];

export const leetcodeStats = {
  username: "KritiPriya_coder",
  profileUrl: "https://leetcode.com/u/KritiPriya_coder/",
  totalSolved: 350,
  easy: 155,
  medium: 165,
  hard: 30,
  streak: "Consistent Problem Solver",
  acceptanceRate: "72.4%",
  topTopics: [
    { name: "Dynamic Programming", count: 45 },
    { name: "Binary Trees & BST", count: 62 },
    { name: "Graph Algorithms", count: 38 },
    { name: "Arrays & Two Pointers", count: 85 },
    { name: "String Manipulation", count: 50 },
    { name: "Sorting & Searching", count: 40 },
    { name: "Stack & Queue", count: 30 }
  ]
};
