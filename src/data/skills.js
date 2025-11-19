// src/data/skills.js
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaLanguage } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiTypescript, SiFigma, SiPostman, SiVuedotjs } from "react-icons/si";
import { IoIosPeople } from "react-icons/io"
export const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Vue", icon: SiVuedotjs, color: "#41B883" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
        ],
    },
    {
        category: "Languages & Soft Skills",
        skills: [
            { name: "English (TOEIC 815)", icon: FaLanguage, color: "#2563EB" },
            { name: "Teamwork", icon: IoIosPeople, color: "#DC2626" },
            { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        ],
    },
];