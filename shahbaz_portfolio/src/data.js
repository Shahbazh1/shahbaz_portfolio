const projectsData = [
  {
    id: 1,
    title: "SCRIPT 2 VIDEO",
    image: "/project_images/Script2Video.webp",
    alt: "SCRIPT 2 VIDEO",

    tags: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Google Gemini AI",
      "Pollinations AI",
    ],

    description:
      "An AI-powered video pre-production application that transforms creative ideas, story concepts, or video prompts into structured 5-scene storyboards. It uses Google Gemini AI to generate scene chronology, visual descriptions, narration, and image prompts, then automatically generates cinematic visuals for each scene using Pollinations AI.",

    features: [
      "Generates structured 5-scene video storyboards using Google Gemini AI",
      "Creates scene titles, visual descriptions, narration, and cinematic image prompts",
      "Uses Gemini structured output for consistent and validated storyboard data",
      "Automatically generates AI visuals for each scene using Pollinations AI",
      "Sequential image generation with real-time Waiting, Generating, Ready, and Failed statuses",
      "Interactive storyboard interface for reviewing scenes and narration",
      "Responsive dark UI with Tailwind CSS, glassmorphism, gradients, and smooth interactions",
      "Built with React 19, React Router v7, and Vite for a fast development experience",
    ],

    links: [
      {
        name: "Live Website",
        url: "https://script2videos.netlify.app/",
        type: "live",
      },
      {
        name: "GitHub",
        url: "https://github.com/Shahbazh1/Script2Video",
        type: "github",
      },
    ],
  },
  {
  id: 2,
  title: "Elevate CV",
  image: "/project_images/elevate_cv.webp",
  alt: "Elevate CV - AI Resume Builder",

  tags: [
    "Next.js",
    "React 19",
    "Tailwind CSS",
    "Google Gemini AI",
    "PDF.js",
    "html2pdf.js",
    "Lucide React",
  ],

  description:
    "Elevate CV is an AI-powered resume builder that helps users create professional, ATS-friendly CVs through intelligent resume parsing, multiple professionally designed templates, and an intuitive live editor. Users can upload an existing PDF resume, review AI-extracted information using Google Gemini, customize their resume, and export the final version as a high-quality PDF.",

  features: [
    "AI-powered resume parsing using Google Gemini API",
    "Upload existing PDF resumes and automatically extract structured information",
    "8+ professional ATS-friendly resume templates for different industries",
    "Interactive resume editor with real-time preview",
    "Support for personal information, summary, experience, education, skills, projects, and certifications",
    "Add, remove, and reorder resume sections",
    "PDF text processing using PDF.js",
    "High-quality PDF export using html2pdf.js",
    "Review and correct AI-extracted resume data before importing",
    "Responsive and modern resume-building interface",
  ],

  links: [
    {
      name: "Live Website",
      url: "https://elevateyourresume.netlify.app/",
      type: "live",
    },
    {
      name: "GitHub",
      url: "https://github.com/Shahbazh1/Elevate-CV",
      type: "github",
    },
  ],
},
  {
    id: 3,
    title: "PPEPCA",
    image: "/project_images/pakistan_petroleum.webp",
    alt: "PAKISTAN PETROLEUM EXPLORATION & PRODUCTION COMPANY LIMITED",
    tags: [
      "Nextjs",
      "Tailwind",
      "Type Script",
      "Strapi",
      "cloudinary",
      "React icon library",
    ],
    description:
      "PPEPCA is a corporate web platform developed for Pakistan Petroleum Exploration & Production Company Limited. It presents organizational information, projects, and industry insights with a clean, professional interface, ensuring easy access to corporate data and improved digital presence.",
    features: [
      "Corporate information showcase",
      "Project portfolio display",
      "Industry insights and reports",
      "Professional user interface",
      "Easy data access and navigation",
    ],
    links: [
      {
        name: "Live Website",
        url: "https://ppeca-xm2j.vercel.app/",
        type: "live",
      },
      { name: "GitHub", url: "#", type: "github" },
    ],
  },
  {
    id: 4,
    title: "Fresh Basket",
    image: "/project_images/fresh_basket.webp",
    alt: "Fresh Basket",
    tags: ["React", "Tailwind", "Java script", "Framer Motion", "Firebase"],
    description:
      "Fresh Basket is a smart grocery and essentials platform that helps users find the best prices, discounts, and deals across multiple online stores. It offers real-time price comparisons, deal tracking, and alerts to ensure users save both time and money while shopping.",
    features: [
      "Real-time price comparison across multiple stores",
      "Deal tracking and alerts",
      "Smart grocery recommendations",
      "Price history and trend analysis",
      "User-friendly shopping lists",
    ],
    links: [
      {
        name: "Live Website",
        url: "https://fresh-basket-d671c.web.app/",
        type: "live",
      },
      {
        name: "GitHub",
        url: "https://github.com/Shahbazh1/fresh-basket",
        type: "github",
      },
    ],
  },
  {
    id: 5,
    title: "AI VET CARE",
    image: "/project_images/ai_vet_care.webp",
    alt: "AI VET CARE",
    tags: [
      "Android Studio",
      "Java",
      "XML",
      "Firebase",
      "TensorFlow",
      "Room Database",
    ],
    description:
      "An AI-powered Android application designed to assist livestock owners in diagnosing animal diseases offline. The app uses a TensorFlow neural network to predict diseases based on three selected symptoms, provides vaccination reminders, and helps farmers locate nearby veterinarians using Google Maps integration.",

    features: [
      "Built a 4-layer neural network with 94.2% disease classification accuracy",
      "Trained the AI model for 50 epochs using an 80/20 train-test split",
      "Offline disease prediction using TensorFlow Lite",
      "Google Maps integration to locate nearby veterinarians",
      "Vaccination reminders with local Room Database and Firebase support",
    ],

    links: [
      {
        name: "GitHub",
        url: "https://github.com/Shahbazh1/MyAndroidApp",
        type: "github",
      },
    ],
  },
  {
    id: 6,
    title: "College Management System",
    image: "/project_images/college.webp",
    alt: "College Management System",
    tags: ["Java Script", "React", "Tailwind", "Express", "Mysql"],
    description:
      "A comprehensive web-based College Management System designed to manage students, teachers, classes, attendance, exams, and reports. It provides role-based access for admins, teachers, and students, along with automated attendance tracking, performance analytics, and parent notifications to streamline academic operations.",
    features: [
      "Student and teacher management with role-based access",
      "Automated attendance tracking system",
      "Performance analytics and reporting",
      "Parent notification system",
      "Exam management and grading",
    ],
    links: [
      {
        name: "Live Website",
        url: "https://associate-college.vercel.app/",
        type: "live",
      },
      {
        name: "GitHub",
        url: "https://github.com/Shahbazh1/Associate_college",
        type: "github",
      },
    ],
  },
  {
  id: 7,
  title: "LUMISCAPE",
  image: "/project_images/lumiscape.webp",
  alt: "Lumiscape Smart Home Dashboard",

  tags: [
    "React 19",
    "Vite",
    "Tailwind CSS",
    "React Router",
    "React Hook Form",
    "Iconify",
  ],

  description:
    "Lumiscape is a modern smart-home dashboard built with React for managing connected devices, rooms, energy goals, custom categories, smart controls, and usage history through a responsive and intuitive interface.",

  features: [
    "Device management with responsive table and card-based views",
    "Room management with dedicated room creation workflows",
    "Custom category creation and category overview pages",
    "Energy goal configuration and management",
    "Smart control workflows for connected devices",
    "Usage history and activity views",
    "Shared form state management using React Hook Form and React Context",
    "Reusable navigation, sidebar, table, form, and layout components",
    "Responsive dashboard interface built with Tailwind CSS",
    "Client-side routing with React Router",
  ],

  links: [
    {
      name: "Live Website",
      url: "https://lumiscap3.netlify.app/",
      type: "live",
    },
    {
      name: "GitHub",
      url: "https://github.com/Shahbazh1/lumiscape",
      type: "github",
    },
  ],
},
];

export default projectsData;
