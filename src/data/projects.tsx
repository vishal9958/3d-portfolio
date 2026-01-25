import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiAndroid,
  SiCanva,
  SiChakraui,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  // FaJava,
  SiThreedotjs
  

} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
   css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
 android: {
    title: "Android",
    bg: "black",
    fg: "white",
    icon: <SiAndroid />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    // icon: <FaJava />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  canva: {
    title: "Canva",
    bg: "black",
    fg: "white",
    icon: <SiCanva />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  sql: {
  title: "SQL",
  bg: "black",
  fg: "white",
  icon: <SiPostgresql />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
  id: "soul-and-stitch",
  category: "E-commerce / Handicraft",
  title: "Soul & Stitch",
  src: "/assets/projects-screenshots/soul-stitch/landing.jpg",
  screenshots: [
    "landing.jpg",
    "login.jpg",
    "products.jpg",
    "product.jpg",
    "wishlist.jpg",
    "orders.jpg",
    "profile.png",
    "admin.jpg",
  ],
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.canva,
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.express,
      PROJECT_SKILLS.sql,
    ],
  },
  live: "https://expo.dev/accounts/vishal00/projects/soul-stitch/builds/3d655c24-8c6c-429e-b8eb-59f2c762af05",
  github: "https://github.com/vishal9958/soul-stitch",
  get content() {
    return (
      <div>
        {/* INTRO */}
        <TypographyP className="font-mono text-2xl text-center">
          Soul & Stitch — Handmade Crochet & Wool Products Platform
        </TypographyP>

        <TypographyP className="font-mono">
          Soul & Stitch is a full-featured e-commerce platform designed to sell
          handmade crochet and wool-based products. The project combines
          traditional craftsmanship with modern web technology to create a
          smooth shopping experience.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        {/* AUTH */}
        <TypographyH3 className="my-4 mt-8">Authentication</TypographyH3>
        <p className="font-mono mb-2">
          Users can create an account, log in securely, and manage their personal
          profile. Authentication ensures a personalized shopping experience.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/soul-stitch/login.jpg`,
            `${BASE_PATH}/soul-stitch/profile.jpg`,
          ]}
        />

        {/* PRODUCTS */}
        <TypographyH3 className="my-4 mt-8">Products & Categories</TypographyH3>
        <p className="font-mono mb-2">
          The platform displays a wide range of handmade crochet and wool
          products, organized into categories with detailed product pages.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/soul-stitch/products.jpg`,
            `${BASE_PATH}/soul-stitch/product.jpg`,
          ]}
        />

        {/* WISHLIST */}
        <TypographyH3 className="my-4 mt-8">Wishlist</TypographyH3>
        <p className="font-mono mb-2">
          Users can save their favorite products to a wishlist, making it easy
          to revisit and purchase items later.
        </p>
        <SlideShow
          images={[`${BASE_PATH}/soul-stitch/wishlist.jpg`]}
        />

        {/* ORDERS */}
        <TypographyH3 className="my-4 mt-8">Orders & Checkout</TypographyH3>
        <p className="font-mono mb-2">
          A complete order management system allows users to place orders, track
          their purchase history, and view order details.
        </p>
        <SlideShow
          images={[`${BASE_PATH}/soul-stitch/orders.jpg`]}
        />

        {/* USER DASHBOARD */}
        <TypographyH3 className="my-4 mt-8">User Dashboard</TypographyH3>
        <p className="font-mono mb-2">
          Each user has a dashboard to manage profile details, saved items, and
          order history in one place.
        </p>
        <SlideShow
          images={[`${BASE_PATH}/soul-stitch/profile.jpg`]}
        />

        {/* ADMIN */}
        <TypographyH3 className="my-4 mt-8">Admin Panel</TypographyH3>
        <p className="font-mono mb-2">
          An admin panel enables product management, order handling, and content
          updates, making the platform scalable and manageable.
        </p>
        <SlideShow
          images={[`${BASE_PATH}/soul-stitch/admin.jpg`]}
        />

        {/* PURPOSE */}
        <TypographyH3 className="my-4 mt-8">Project Goal</TypographyH3>
        <p className="font-mono mb-2">
          The goal of Soul & Stitch is to empower handmade creators by providing
          a digital storefront that highlights craftsmanship while offering a
          modern, user-friendly shopping experience.
        </p>
      </div>
    );
  },
},

 {
  id: "smart-pdf",
  category: "Productivity / Tools",
  title: "Smart PDF Toolkit",
  src: "/assets/projects-screenshots/smart-pdf/landing.png",
  screenshots: ["landing.png"],
  live: "https://pdf-smart.netlify.app/",
  github: "https://github.com/vishal9958/PDF-Smart",
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [
      PROJECT_SKILLS.python,
    ],
  },
  get content() {
    return (
      <div>
        {/* ===== INTRO ===== */}
        <TypographyP className="font-mono text-2xl text-center">
          Smart PDF – All-in-One PDF Toolkit 📄✨
        </TypographyP>

        <TypographyP className="font-mono mt-4">
          Smart PDF Toolkit is a productivity-focused web application that offers
          essential PDF tools in one place. It allows users to convert, edit,
          and manage PDF documents easily without installing heavy software.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        {/* ===== LANDING ===== */}
        <SlideShow
          images={[`${BASE_PATH}/smart-pdf/landing.png`]}
        />

        {/* ===== IMAGE TO PDF ===== */}
        <TypographyH3 className="my-4 mt-8">Image to PDF Conversion</TypographyH3>
        <p className="font-mono mb-2">
          Users can convert JPG and PNG images into high-quality PDF documents
          instantly with just a few clicks.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/smart-pdf/image-to-pdf.png`]}
        />

        {/* ===== PDF TO WORD ===== */}
        <TypographyH3 className="my-4 mt-8">PDF to Word Converter</TypographyH3>
        <p className="font-mono mb-2">
          Convert PDF files into editable Word documents while preserving the
          original layout and formatting.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/smart-pdf/pdf-to-word.png`]}
        />

        {/* ===== PDF TOOLS ===== */}
        <TypographyH3 className="my-4 mt-8">PDF Editing Tools</TypographyH3>
        <p className="font-mono mb-2">
          Edit and manage PDFs with tools like merge, organize, and update pages
          for better document handling.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/smart-pdf/pdf-tools.png`]}
        />

        {/* ===== RESUME BUILDER ===== */}
        <TypographyH3 className="my-4 mt-8">Resume Builder</TypographyH3>
        <p className="font-mono mb-2">
          A built-in resume builder that helps users create professional resumes
          and download them instantly in PDF format.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/smart-pdf/resume-builder.png`]}
        />

        {/* ===== SUMMARY ===== */}
        <TypographyP className="font-mono mt-8 text-center">
          Smart PDF simplifies document workflows for students, professionals,
          and job seekers by bringing all essential PDF tools into one clean and
          easy-to-use platform.
        </TypographyP>
      </div>
    );
  },
},

  {
  id: "vishal-bharat",
  category: "Travel & Tourism",
  title: "Vishal Bharat",
  src: "/assets/projects-screenshots/vishal-bharat/landing.png",
  screenshots: ["landing.png"],
  live: "https://vishal-bharat.netlify.app/", // agar live hai
  github: "https://github.com/vishal9958/vishal-bharat",
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [
      PROJECT_SKILLS.python,
      PROJECT_SKILLS.sql,
    ],
  },
  get content() {
    return (
      <div>
        {/* ===== INTRO ===== */}
        <TypographyP className="font-mono text-2xl text-center">
          Vishal Bharat – Travel India & Beyond 🌍
        </TypographyP>

        <TypographyP className="font-mono mt-4">
          Vishal Bharat is a complete travel booking and trip planning platform
          where users can explore destinations, book trips, and plan journeys
          across India as well as international locations.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        {/* ===== LANDING IMAGE ===== */}
        <SlideShow
          images={[`${BASE_PATH}/vishal-bharat/landing.png`]}
        />

        {/* ===== DESTINATIONS ===== */}
        <TypographyH3 className="my-4 mt-8">Explore Destinations</TypographyH3>
        <p className="font-mono mb-2">
          Users can explore popular tourist destinations across India and
          international locations with complete details, images, and highlights.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/vishal-bharat/destinations.png`]}
        />

        {/* ===== TRIP PLANNER ===== */}
        <TypographyH3 className="my-4 mt-8">Smart Trip Planner</TypographyH3>
        <p className="font-mono mb-2">
          Plan your entire journey by selecting destinations, duration, and
          budget. The trip planner helps users create customized travel plans
          easily.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/vishal-bharat/trip-planner.png`]}
        />

        {/* ===== PACKAGES ===== */}
        <TypographyH3 className="my-4 mt-8">Best Travel Packages</TypographyH3>
        <p className="font-mono mb-2">
          Vishal Bharat offers curated travel packages with pricing, itinerary
          details, and destination coverage for families, couples, and solo
          travelers.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/vishal-bharat/packages.png`]}
        />

        {/* ===== BOOKINGS ===== */}
        <TypographyH3 className="my-4 mt-8">Travel Booking System</TypographyH3>
        <p className="font-mono mb-2">
          Users can book trips directly through the platform with a smooth and
          user-friendly booking experience.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/vishal-bharat/bookings.png`]}
        />

        {/* ===== SUMMARY ===== */}
        <TypographyP className="font-mono mt-8 text-center">
          Vishal Bharat simplifies travel planning by combining destination
          discovery, trip planning, and booking into one seamless platform.
        </TypographyP>
      </div>
    );
  },
},

  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "#",
    github:"#",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
  id: "portfolio",
  category: "Portfolio Website",
  title: "Personal Portfolio",
  src: "/assets/projects-screenshots/oldfolio/3.png",
  screenshots: ["3.png"],
  live: "https://bappaditya-portfolio.netlify.app/",
  github: "https://github.com/vishal9958/Bappaditya-Portfolio",
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.canva,
    ],
    backend: [],
  },
  get content() {
    return (
      <div>
        {/* ===== INTRO ===== */}
        <TypographyP className="font-mono text-2xl text-center">
          My Personal Portfolio 🌐
        </TypographyP>

        <TypographyP className="font-mono mt-4">
          This was my earlier personal portfolio website designed to showcase my
          skills, projects, and journey as a developer. The goal was to keep the
          design clean, engaging, and informative for recruiters and clients.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        {/* ===== LANDING ===== */}
        <SlideShow
          images={[`${BASE_PATH}/oldfolio/3.png`]}
        />

        {/* ===== ABOUT ME ===== */}
        <TypographyH3 className="my-4 mt-8">About Me</TypographyH3>
        <p className="font-mono mb-2">
          The About Me section introduces who I am, my background as a student
          turned developer, and my passion for building user-friendly and
          impactful applications.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/oldfolio/2.png`]}
        />

        {/* ===== SKILLS ===== */}
        <TypographyH3 className="my-4 mt-8">My Skills</TypographyH3>
        <p className="font-mono mb-2">
          A dedicated skills section highlighting my technical abilities using
          a simple and visually clear layout.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/oldfolio/4.png`]}
        />

        {/* ===== PROJECTS ===== */}
        <TypographyH3 className="my-4 mt-8">My Projects</TypographyH3>
        <p className="font-mono mb-2">
          Showcased my personal and academic projects with descriptions, tech
          stack, and preview images to give a quick overview of my work.
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/oldfolio/1.png`,
            `${BASE_PATH}/oldfolio/7.png`,
          ]}
        />

        {/* ===== EXPERIENCE ===== */}
        <TypographyH3 className="my-4 mt-8">Work Experience</TypographyH3>
        <p className="font-mono mb-2">
          Included my academic and freelance experience to highlight practical
          exposure and hands-on development work.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/oldfolio/6.png`]}
        />

        {/* ===== CONTACT ===== */}
        <TypographyH3 className="my-4 mt-8">Get in Touch</TypographyH3>
        <p className="font-mono mb-2">
          A contact section allowing visitors to reach out via email or social
          platforms, making collaboration and communication easy.
        </p>

        <SlideShow
          images={[`${BASE_PATH}/oldfolio/5.png`]}
        />

        {/* ===== SUMMARY ===== */}
        <TypographyP className="font-mono mt-8 text-center">
          This portfolio laid the foundation of my journey as a developer and
          helped me understand design, layout, and personal branding.
        </TypographyP>
      </div>
    );
  },
},

  {
  id: "stay-organized",
  category: "Productivity App",
  title: "Stay Organized",
  src: "/assets/projects-screenshots/stay-organized/landing.png",
  screenshots: ["landing.png", "tasks.png"],
  live: "https://stayorganize.netlify.app/",
  github: "https://github.com/vishal9958/Task-Nest",
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.tailwind,
    ],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Stay Organized 📝
        </TypographyP>

        <TypographyP className="font-mono mt-4">
          Stay Organized is a simple task management application that helps
          users plan their day, manage tasks, and stay productive.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        {/* ===== LANDING ===== */}
        <SlideShow
          images={[
            `${BASE_PATH}/stay-organized/landing.png`,
          ]}
        />

        {/* ===== TASK MANAGEMENT ===== */}
        <TypographyH3 className="my-4 mt-8">Task Management</TypographyH3>
        <p className="font-mono mb-2">
          Users can add, view, update, and manage their daily tasks easily,
          making it simple to track progress and stay focused.
        </p>

        <SlideShow
          images={[
            `${BASE_PATH}/stay-organized/tasks.png`,
          ]}
        />

        <TypographyP className="font-mono mt-6 text-center">
          Stay Organized focuses on simplicity and usability to improve everyday
          productivity without unnecessary complexity.
        </TypographyP>
      </div>
    );
  },
},

];
export default projects;
