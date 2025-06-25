import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import {
  ArrowDownUpIcon,
  ArrowUpRight,
  ExternalLink,
  Link2,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiOpencv } from "react-icons/si";
import { SiRaspberrypi } from "react-icons/si";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
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
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
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
  opencv: {
    title: "OpenCV",
    bg: "white",
    fg: "#5C3EE8", 
    icon: <SiOpencv />,
  },
  raspberrypi: {
  title: "Raspberry Pi",
  bg: "#c51a4a", 
  fg: "white",
  icon: <SiRaspberrypi />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
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
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
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
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
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
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  emailjs: {
    title: "EmailJS",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/emailjs.svg" alt="EmailJS" />,
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
    // 01. AI Docker file optimizer project
    id: "youtubeclone",
    category: "React Frontend",
    title: "Youtube Clone",
    src: "/assets/projects-screenshots/youtubeclone/2.png",
    screenshots: ["1.png", "2.png"],
    live: "https://youtube-clone-lac-mu.vercel.app/",
    github: "https://github.com/dikshant-s/YoutubeClone",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [PROJECT_SKILLS.openai, PROJECT_SKILLS.netlify],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            YouTubeClone is a modern web application that replicates the core
            features of YouTube using React and Material UI. It allows users to
            explore trending videos, search content, view video details, and
            navigate a user-friendly interface — all in real-time. Designed with
            responsiveness and clean UI in mind, this clone delivers a seamless
            user experience across devices. Deployed on Vercel, it ensures
            lightning-fast performance and global availability for users
            accessing video content.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/youtubeclone/1.png`,
              `${BASE_PATH}/youtubeclone/2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    // 02. CSI project
    id: "CSI",
    category: "Computer Society of India",
    title: "CSI: Computer Society of India(CBIT Chapter)",
    src: "/assets/projects-screenshots/CSI/1.png",
    screenshots: ["/assets/projects-screenshots/CSI/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        // PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.emailjs,
      ],
      backend: [],
    },
    live: "https://dikshant-s.github.io/CSI/",
    github: "https://github.com/dikshant-s/CSI",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            CSI: Computer Society of India(CBIT Chapter)
          </TypographyP>
          <TypographyP className="font-mono ">
            The Computer Society of India (CSI) is the largest and most
            professionally managed association of IT professionals in India.
            Established in 1965, CSI plays a vital role in promoting and
            advancing the theory and practice of computer science and IT.
            Through workshops, conferences, technical events, and student
            chapters across the country, CSI empowers both students and
            professionals to innovate, network, and stay ahead in a rapidly
            evolving digital world.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture </TypographyH3>
          <p className="font-mono mb-2">
            The CSI CBIT Chapter architecture includes:
            <br />
            1. Leadership & Governance
            <br />
            2. Event Management
            <br />
            3. Membership Engagement
            <br />
            4. Skill Development Units
            <br />
            5. Monitoring & Impact Tracking
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/CSI/1.png`,
              `${BASE_PATH}/CSI/2.png`,
              `${BASE_PATH}/CSI/3.png`,
              `${BASE_PATH}/CSI/4_A.png`,
              `${BASE_PATH}/CSI/5.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    // 03. Portfolio project
    id: "PersonalFinanceDashboard",
    category: "Pernal Finance Dashboard",
    title: "Personal Finance Dashboard",
    src: "/assets/projects-screenshots/personalfinancemanager/login.png",
    screenshots: [
      "assets/projects-screenshots/personalfinancemanager/dashboard.png",
    ],
    live: "https://personalfinancedashboard-9giv.onrender.com",
    github: "https://github.com/dikshant-s/Personal-Finance-Dashboard",
    skills: {
      frontend: [PROJECT_SKILLS.tailwind, PROJECT_SKILLS.js],
      backend: [
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to the Personal Finance Dashboard, your go-to web app for
            managing your finances. This responsive application allows you to
            manage your personal finances.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Intro </TypographyH3>
          <p className="font-mono mb-2">
            The Personal Finance Dashboard is a responsive web application that
            helps users manage, visualize, and plan their finances. It provides
            a centralized platform to track income, expenses, savings,
            investments, and budgets through interactive charts and
            user-friendly forms.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/personalfinancemanager/login.png`,
              `${BASE_PATH}/personalfinancemanager/dashboard.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Light Theme</TypographyH3>
          <p className="font-mono mb-2">
            It has both light and dark themes, ensuring a seamless user
            experience across different preferences.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/personalfinancemanager/darkmode.png`]}
          />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>

          <p className="font-mono mb-2">
            {/* My top personal and freelance projects — no filler, all killer.
             */}
            Track smart. Spend wise. Save more. Your money, your rules.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/personalfinancemanager/expense.png`,
              `${BASE_PATH}/personalfinancemanager/savingsgoals.png`,
              `${BASE_PATH}/personalfinancemanager/addbank.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This is not just a dashboard; it's your financial companion,
            designed to help you take control of your money and achieve your
            financial goals. Whether you're looking to save for a vacation, pay
            off debt, or simply keep track of your spending, this app has got
            you covered.
          </p>
        </div>
      );
    },
  },
  {
    // 04. Smart parking assitant
    id: "SelfDrivingCar",
    category: "IoT",
    title: "Self Driving Car",
    src: "/assets/projects-screenshots/smartparkingassitant/car1.jpg",
    screenshots: ["02.png", "03.png"],
    live: "",
    github: "https://github.com/dikshant-s/SelfDrivingCar",
    skills: {
      frontend: [PROJECT_SKILLS.cplusplus],
      backend: [PROJECT_SKILLS.arduino, PROJECT_SKILLS.raspberrypi,PROJECT_SKILLS.opencv],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            This project demonstrates a basic self-driving car simulation using
            computer vision techniques like lane detection, perspective
            transform, and object detection. The system is designed to
            autonomously recognize the road, detect lanes, and make driving
            decisions in real time.
          </TypographyP>
          <ProjectsLinks  repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/smartparkingassitant/01.png`,
              `${BASE_PATH}/smartparkingassitant/02.png`,
              // `${BASE_PATH}/smartparkingassitant/04.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  {
    // 05. Smart Job Tracker project
    id: "smartjobtracker",
    category: "Full stack",
    title: "Smart Job Tracker",
    src: "/assets/projects-screenshots/smartjobtracker/02.png",
    screenshots: [
      "01.png",
      "02.png",
      "03.png",
      "04.png",
      "05.png",
      "06.png",
      "07.png",
    ],
    live: "https://job-tracker-application-eight.vercel.app/",
    github: "https://github.com/Abhiz2411/Job-tracker-application",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Track your job applications effortlessly with a sleek, dark-themed
            app that lets you manage, filter, and visualize your job search.
            Organize your applications with a Kanban board, monitor progress
            through status updates, and store everything securely. Enjoy
            seamless access across devices with a responsive design and email
            reminders for interviews. A smarter, more intuitive way to stay on
            top of your job hunt!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/smartjobtracker/01.png`,
              `${BASE_PATH}/smartjobtracker/02.png`,
              `${BASE_PATH}/smartjobtracker/03.png`,
              `${BASE_PATH}/smartjobtracker/04.png`,
              `${BASE_PATH}/smartjobtracker/05.png`,
              `${BASE_PATH}/smartjobtracker/06.png`,
              `${BASE_PATH}/smartjobtracker/07.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    // 06. Savinder Puri portfolio project
    id: "savinderpurisportfolio",
    category: "Web Development",
    title: "Savinder Puri Portfolio",
    src: "/assets/projects-screenshots/savinderpuriportfolio/01.png",
    screenshots: ["01.png", "02.png", "03.png", "04.png", "05.png"],
    live: "https://savinder-puri.vercel.app/",
    github: "https://github.com/Abhiz2411/savinder-puri",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Step into the digital world of Savinder Puri, the beloved DevOps
            guru and Spiritual Alchemist, with this responsive portfolio
            website. 🌐✨ Explore his inspiring journey, milestones, and
            life-changing services blending tech and spirituality. Built with
            modern tools like React and TypeScript, it’s a heartfelt tribute to
            a mentor who transforms lives. 💻🕊️ Crafted with ❤️ by Abhijit
            Zende! 🚀
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/savinderpuriportfolio/01.png`,
              `${BASE_PATH}/savinderpuriportfolio/02.png`,
              `${BASE_PATH}/savinderpuriportfolio/03.png`,
              `${BASE_PATH}/savinderpuriportfolio/04.png`,
              `${BASE_PATH}/savinderpuriportfolio/05.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
