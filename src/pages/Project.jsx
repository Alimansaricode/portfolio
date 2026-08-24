import ecommerce from "../assets/image3.jpg";
import food from "../assets/image4.jpg";
import blinkit from "../assets/image2.jpg";
import fullstack from "../assets/image5.jpg";
import freelancer from "../assets/image6.jpg";

const fullStackProjects = [
  {
    title: "Property Dealing",
    image: fullstack,
    desc: "Full-stack real estate application featuring user authentication, property filtering (buy/rent/sell), and dynamic listings with responsive UI.",
    techStack: ["React.js", "TailwindCSS", "Redux Toolkit", "Python", "REST API"],
    link: "https://propery-sell.netlify.app/",
  },
  {
    title: "Freelancer Platform",
    image: freelancer,
    desc: "Full-stack freelance marketplace application with user authentication, project listings, and real-time communication features.",
    techStack: ["React.js", "TailwindCSS", "Redux Toolkit", "Python", "REST API"],
    link: "https://freelancerand.netlify.app/",
  },
];

const frontEndProjects = [
  {
    title: "E-Commerce App",
    image: ecommerce,
    desc: "Built using React.js, TailwindCSS, Redux Toolkit & Router.",
    techStack: ["React.js", "TailwindCSS", "Redux Toolkit"],
    link: "https://alime-commerec.netlify.app/",
  },
  {
    title: "Food Delivery App",
    image: food,
    desc: "Modern UI with React, Router & responsive layout.",
    techStack: ["React.js", "TailwindCSS", "React Router"],
    link: "https://alimansarifood.netlify.app/",
  },
  {
    title: "Blinkit Clone",
    image: blinkit,
    desc: "Fully functional clone using React & TailwindCSS.",
    techStack: ["React.js", "TailwindCSS"],
    link: "#",
  },
];

function ProjectCard({ project, type }) {
  return (
    <div
      className="
        group
        bg-[#1e293b]
        rounded-2xl
        overflow-hidden
        border border-slate-700
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-500
        flex
        flex-col
        h-full
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            aspect-video
            object-cover
            object-center
            group-hover:scale-105
            transition-transform
            duration-700
          "
        />

        {/* Image Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/0
            group-hover:bg-black/10
            transition-all
            duration-500
          "
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-6 mb-5">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className={`
                px-3
                py-1.5
                rounded-full
                text-xs
                font-medium
                border
                ${
                  type === "fullstack"
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                }
              `}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-blue-500
              hover:bg-blue-600
              text-white
              font-medium
              px-6
              py-2.5
              rounded-lg
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Live Demo
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen text-white py-16 px-5">

      {/* ================= FULL STACK ================= */}

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-400 text-transparent bg-clip-text">
            Full Stack Projects
          </span>
        </h2>

        {/* 2 cards → 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {fullStackProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              type="fullstack"
            />
          ))}
        </div>
      </div>

      {/* ================= FRONTEND ================= */}

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
            FrontEnd Projects
          </span>
        </h2>

        {/* 3 cards → 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {frontEndProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              type="frontend"
            />
          ))}
        </div>
      </div>

    </section>
  );
}