import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { AiFillDatabase } from "react-icons/ai";


import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "Python", percent: 95, icon: <FaPython />, iconColor: "text-blue-400", barColor: "from-blue-400 to-blue-600" },
  { name: "HTML5", percent: 100, icon: <FaHtml5 />, iconColor: "text-orange-400", barColor: "from-orange-400 to-orange-600" },
  { name: "CSS3", percent: 92, icon: <FaCss3Alt />, iconColor: "text-blue-400", barColor: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", percent: 95, icon: <TbBrandTailwind />, iconColor: "text-cyan-400", barColor: "from-cyan-400 to-blue-500" },
  { name: "JavaScript", percent: 88, icon: <SiJavascript />, iconColor: "text-yellow-400", barColor: "from-yellow-300 to-yellow-500" },
  { name: "React", percent: 95, icon: <FaReact />, iconColor: "text-cyan-400", barColor: "from-cyan-400 to-violet-500" },
  { name: "Node.js", percent: 85, icon: <FaNodeJs />, iconColor: "text-green-500", barColor: "from-green-400 to-green-600" },
  { name: "MongoDB", percent: 88, icon: <SiMongodb />, iconColor: "text-green-600", barColor: "from-emerald-400 to-emerald-600" },
  { name: "Express", percent: 85, icon: <SiExpress />, iconColor: "text-gray-300", barColor: "from-gray-400 to-gray-600" },
  { name: "Git", percent: 90, icon: <FaGitAlt />, iconColor: "text-red-500", barColor: "from-red-400 to-red-600" },
  { name: "GitHub", percent: 90, icon: <IoLogoGithub />, iconColor: "text-gray-300", barColor: "from-gray-400 to-gray-600" },
  { name: "VS Code", percent: 90, icon: <VscVscode />, iconColor: "text-blue-400", barColor: "from-blue-400 to-blue-600" },
  { name: "Postman", percent: 85, icon: <SiPostman />, iconColor: "text-orange-400", barColor: "from-orange-400 to-orange-600" },
  { name: "DSA", percent: 40, icon: <AiFillDatabase />, iconColor: "text-green-600", barColor: "from-emerald-400 to-emerald-600" },
];

export default function Skill() {
  return (
    <div className="grid md:grid-cols-4 max-md:grid-cols-2 gap-6 my-10 px-6 max-w-[1300px] mx-auto">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition duration-300"
          style={{ background: 'var(--glass)', border: '1px solid var(--line)' }}
        >
          <div className="flex justify-between items-center mb-4">
            <div className={`text-3xl ${skill.iconColor}`}>{skill.icon}</div>
            <span className="text-sm font-bold" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
              {skill.percent}%
            </span>
          </div>

          <h3 className="mb-3 font-semibold" style={{ color: 'var(--text)' }}>{skill.name}</h3>

          <div className="w-full rounded-full h-2" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${skill.barColor} transition-all duration-1000`}
              style={{ width: `${skill.percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
