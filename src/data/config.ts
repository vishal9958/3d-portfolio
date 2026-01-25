const config = {
  title: "Bappaditya Biswas | Full Stack Developer",
  description: {
    long: "Explore the portfolio of Bappaditya Biswas, a full-stack developer specializing in interactive web experiences, 3D animations, and modern web applications.",
    short:
      "Portfolio of Bappaditya Biswas – Full Stack Developer building modern and interactive web experiences.",
  },

  keywords: [
    "Bappaditya Biswas",
    "portfolio",
    "full stack developer",
    "web developer",
    "react",
    "next.js",
    "three.js",
    "framer motion",
  ],

  author: "Bappaditya Biswas",
  email: "vk6051950@gmail.com",

  // ✅ NEVER keep this empty
  site: "http://localhost:3000",

  // GitHub stars button
  githubUsername: "vishal9958",
  githubRepo: "3d-portfolio",

  // ✅ safe og image
  get ogImg() {
    return `${this.site}/assets/seo/og-image.png`;
  },

  // ✅ IMPORTANT: keep empty strings, not empty object
  social: {
    linkedin: "https://www.linkedin.com/in/bappaditya-biswas/",
    github: "https://github.com/vishal9958",
  },
};

export { config };
