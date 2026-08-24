import React from "react";
import image from "../assets/image1.jpg";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

import Skill from "./Skill";
import Project from "./Project";

function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="w-full min-h-screen text-white flex items-center max-md:flex-col max-md:justify-center max-md:items-center px-6 md:px-12 lg:px-20 py-10">

        {/* LEFT CONTENT */}
        <div className="w-[70%] max-md:w-full max-md:order-2 md:pl-10 lg:pl-20">

          {/* Small Intro */}
          <p className="text-xl md:text-2xl font-semibold mb-3 animate-fade-up">
            Hello, It's Me
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up-delay">
            Alim Ansari
          </h1>

          {/* Developer Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-5 animate-fade-up-delay-2">
            I'm a{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
              Python Full Stack Developer
            </span>
          </h2>

          {/* Technology Stack */}
          <div className="flex flex-wrap gap-3 mb-6 animate-fade-up-delay-3">
            <span className="tech-badge">React.js</span>
            <span className="tech-badge">Python</span>
            <span className="tech-badge">FastAPI</span>
            <span className="tech-badge">MongoDB</span>
            <span className="tech-badge">REST API</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-7 max-w-2xl animate-fade-up-delay-3">
            I build modern, responsive and scalable full-stack web
            applications using React.js on the frontend and Python with
            FastAPI on the backend.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-7 max-w-2xl mt-3 animate-fade-up-delay-3">
            I work with REST APIs, MongoDB, JWT authentication and modern
            frontend technologies to create complete end-to-end applications.
          </p>

          {/* Availability Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm animate-fade-up-delay-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-sm text-gray-300">
              Building Full Stack Applications
            </span>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-7 animate-fade-up-delay-3">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/alim-ansari-1bbbb3306/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8 text-blue-200 hover:text-blue-500 hover:scale-125 transition duration-300" />
            </a>

            {/* Gmail */}
            <a
              href="mailto:alimansari70534@gmail.com"
              aria-label="Email"
            >
              <BiLogoGmail className="w-8 h-8 text-blue-200 hover:text-red-500 hover:scale-125 transition duration-300" />
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
            >
              <SiLeetcode className="w-8 h-8 text-blue-200 hover:text-red-500 hover:scale-125 transition duration-300" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Alimansaricode?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8 text-blue-200 hover:text-white hover:scale-125 transition duration-300" />
            </a>
          </div>

          {/* CV BUTTON */}
          <div className="flex gap-4 mt-7 animate-fade-up-delay-3">

            <a
              href="https://drive.google.com/file/d/1f1iz7Xp7AFAoVItUzJzTznfOAzGi3XJj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-[170px] h-13 bg-blue-500 hover:bg-blue-700 rounded-xl text-white font-bold text-lg transition duration-300 hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              CV Download
            </a>

          </div>
        </div>

        {/* ================= PROFILE IMAGE ================= */}
        <div className="relative w-[310px] h-[310px] max-md:w-[220px] max-md:h-[220px] max-md:order-1 max-md:mb-12 md:ml-10 lg:ml-20 animate-image">

          {/* Glow */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-2xl opacity-60 animate-pulse"
          ></div>

          {/* Outer Circle */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 p-[4px] shadow-2xl">

            {/* Inner Circle */}
            <div className="w-full h-full rounded-full bg-[#0f172a] p-2">

              <img
                src={image}
                alt="Alim Ansari"
                className="w-full h-full rounded-full object-cover"
              />

            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="min-h-screen py-16 px-5">

        <div className="flex justify-center text-2xl md:text-3xl font-bold py-6 text-white text-center flex-wrap">
          <span>Full Stack / </span>

          <span className="bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text ml-2">
            Python Developer Skills
          </span>
        </div>

        <Skill />

      </section>

      {/* ================= PROJECT SECTION ================= */}
      <section className="py-10">

        <Project />

      </section>
    </>
  );
}

export default Home;