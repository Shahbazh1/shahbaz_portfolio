const projectsData = [
  {
    id: 1,
    title: "AI VET CARE",
    image: "/project_images/ai_vet_care.png",
    alt: "AI VET CARE",
    tags: [
      "Android Studio","Java","XML","Firebase","TensorFlow","Room Database",
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
    id: 2,
    title: "College Management System",
    image: "/project_images/college.png",
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
    id: 3,
    title: "Fresh Basket",
    image: "/project_images/fresh_basket.png",
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
    id: 4,
    title: "PPEPCA",
    image: "/project_images/pakistan_petroleum.png",
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
];

export default projectsData;
