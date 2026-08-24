// import React from 'react'
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa6";
// import { RiTailwindCssLine } from "react-icons/ri";
// import { IoLogoJavascript } from "react-icons/io";
// import { FaReact } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
// import { FaGithubSquare } from "react-icons/fa";
// import { SiRedux } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";

// import { FaGitSquare } from "react-icons/fa";


//
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  {
    name: "python",
    percent: 95,
    icon: <FaPython />,
    iconColor: "text-blue-500",
    barColor: "from-blue-400 to-blue-600",
  },
  {
    name: "HTML5",
    percent: 100,
    icon: <FaHtml5 />,
    iconColor: "text-orange-500",
    barColor: "from-orange-400 to-orange-600",
  },
  {
    name: "CSS3",
    percent: 92,
    icon: <FaCss3Alt />,
    iconColor: "text-blue-500",
    barColor: "from-blue-400 to-blue-600",
  },
  {
    name: "TAILWIND CSS",
    percent: 95,
    icon: <TbBrandTailwind />,
    iconColor: "text-blue-500",
    barColor: "from-blue-400 to-blue-600",
  },
  {
    name: "JavaScript",
    percent: 88,
    icon: <SiJavascript />,
    iconColor: "text-yellow-400",
    barColor: "from-yellow-300 to-yellow-500",
  },
  {
    name: "React",
    percent: 95,
    icon: <FaReact />,
    iconColor: "text-cyan-400",
    barColor: "from-cyan-400 to-blue-500",
  },
  {
    name: "Node",
    percent: 85,
    icon: <FaNodeJs />,
    iconColor: "text-green-500",
    barColor: "from-green-400 to-green-600",
  },
  {
    name: "MongoDB",
    percent: 88,
    icon: <SiMongodb />,
    iconColor: "text-green-600",
    barColor: "from-emerald-400 to-emerald-600",
  },
  {
    name: "Express",
    percent: 85,
    icon: <SiExpress />,
    iconColor: "text-gray-300",
    barColor: "from-gray-400 to-gray-600",
  },
  {
    name: "Git",
    percent: 90,
    icon: <FaGitAlt />,
    iconColor: "text-red-500",
    barColor: "from-red-400 to-red-600",
  },
  {
    name: "GitHUB",
    percent: 90,
    icon: <IoLogoGithub />,
    iconColor: "text-gray-500",
    barColor: "from-gray-400 to-gray-600",
  },
  {
    name: "VS Code",
    percent: 90,
    icon: <VscVscode />,
    iconColor: "text-blue-500",
    barColor: "from-blue-400 to-blue-600",
  },
  {
    name: "Postman",
    percent: 85,
    icon: <SiPostman />,
    iconColor: "text-orange-500",
    barColor: "from-orange-400 to-orange-600",
  },
];


export default function Skill() {
  return (
    <div className="grid md:grid-cols-4 gap-8 my-10">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-105 transition duration-500"
    >
      {/* Icon + Percentage */}
      <div className="flex justify-between items-center mb-4">
        <div className={`text-3xl ${skill.iconColor}`}>
          {skill.icon}
        </div>
        <span className="text-sm font-bold text-gray-300">
          {skill.percent}%
        </span>
      </div>

      <h3 className="mb-3 font-semibold text-white">
        {skill.name}
      </h3>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${skill.barColor} transition-all duration-1000`}
          style={{ width: `${skill.percent}%` }}
        ></div>
      </div>
    </div>
  ))}
</div>

  );
}
