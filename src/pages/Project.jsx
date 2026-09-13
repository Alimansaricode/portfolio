import ecommerce from "../assets/image3.jpg";
import food from "../assets/image4.jpg";
import blinkit from "../assets/image2.jpg";
import fullstack from "../assets/image5.jpg";
import freelance from "../assets/image6.jpg";
import ai from "../assets/image11.jpg";

const fullStackProjects = [
  {
    title: "Property Dealing",
    image: fullstack,
    desc: "Full-stack real estate application featuring user authentication, property filtering (buy/rent/sell), and dynamic listings with responsive UI.",
    techStack: ["React.js", "TailwindCSS", "Redux Toolkit", "Python", "REST API"],
    link: "https://propery-sell.netlify.app/",
  },
  {
    title: "Property Dealing",
    image: freelance,
    desc: "Full-stack real estate application featuring user authentication, property filtering (buy/rent/sell), and dynamic listings with responsive UI.",
    techStack: ["React.js", "TailwindCSS", "Redux Toolkit", "Python", "REST API"],
    link: "https://freelancerand.netlify.app/",
  },
];

const frontEndProjects = [
  {
    title: "Ai Voice Remover",
    image: ai,
    desc: "Built using React.js, TailwindCSS and AI technologies.",
    techStack: [" javaScript", "React.js", "TailwindCSS", "Redux Toolkit GPT-4 API"],
    link: "https://voiceremove.netlify.app/",
  },
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

function ProjectCard({ project, accent }) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
      style={{ background: 'var(--glass)', border: '1px solid var(--line)' }}
    >
      <div>
        <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
            {project.title}
          </h3>
          <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>{project.desc}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {project.techStack?.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(255,255,255,0.06)', color: accent, fontFamily: 'var(--font-mono)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-6 text-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded-full font-semibold transition hover:opacity-90"
          style={{ background: 'var(--cyan)', color: '#0a0e17' }}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen py-16 px-5">
      <h2 className="text-4xl font-bold text-center mb-14" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
        My{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
          Full Stack Projects
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-20">
        {fullStackProjects.map((project, index) => (
          <ProjectCard key={index} project={project} accent="#34d399" />
        ))}
      </div>

      <h2 className="text-4xl font-bold text-center mb-14" style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
        My{" "}
        <span className="bg-gradient-to-r from-amber-400 to-rose-400 text-transparent bg-clip-text">
          FrontEnd Projects
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {frontEndProjects.map((project, index) => (
          <ProjectCard key={index} project={project} accent="#fbbf24" />
        ))}
      </div>
    </section>
  );
}
