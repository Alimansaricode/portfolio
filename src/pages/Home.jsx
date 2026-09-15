import React from 'react'
import image from '../assets/image1.jpg';
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";

import Skill from './Skill';
import Project from './Project';

function Home() {
  return (
    <>

      <div className='w-full min-h-screen items-center flex max-md:flex-col max-md:items-center py-10 gap-10'>
        <div className='pt-10 pl-35 w-[75%] max-md:pl-6 max-md:w-[90%] max-md:order-2 max-md:text-center home-text-block'>

          <p
            className='inline-block text-[13px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border mb-5 fade-up delay-1'
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)', borderColor: 'var(--line)' }}
          >
            ~/ full stack developer
          </p>

          <h1
            className='text-[52px] max-md:text-[38px] font-bold leading-tight fade-up delay-2'
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Hi, I'm Alim Ansari
          </h1>

          <h2 className='flex max-md:justify-center flex-wrap text-[28px] max-md:text-[22px] font-semibold mt-2 fade-up delay-3' style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
            I build&nbsp;
            <span className='bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text'>
              modern web experiences
            </span>
          </h2>

          {/* NOTE: original screenshots did not show this description paragraph,
              add your own intro text here if you have one */}
          <p
            className='mt-4 text-[16px] max-md:text-[14px] leading-relaxed fade-up delay-4'
            style={{ color: 'var(--text-muted, #94a3b8)', maxWidth: '560px' }}
          >
            I design and build clean, responsive, full-stack web applications
            with modern tools and a focus on performance and user experience.
          </p>

          {/* Social icon pills - update hrefs with your real profile links */}
          <div className='flex gap-3 mt-6 max-md:justify-center fade-up delay-5'>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="icon-pill">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:your-email@example.com" className="icon-pill">
              <BiLogoGmail size={20} />
            </a>
            <a href="https://youtube.com/@your-channel" target="_blank" rel="noreferrer" className="icon-pill">
              <IoLogoYoutube size={20} />
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="icon-pill">
              <FaGitAlt size={20} />
            </a>
          </div>

          <div className='flex mt-8 max-md:justify-center fade-up delay-7'>
            <a
              href='https://docs.google.com/document/d/1yXif5Nd3ZTdHNRRWErBOfJ2N4LZXB9U4Bqt4HLcf6Jw/edit?usp=sharing'
              target='_blank' rel="noreferrer"
            >
              <button
                className='px-7 h-13 font-bold text-[16px] rounded-full transition hover:opacity-90 cv-btn'
                style={{ background: 'var(--cyan)', color: '#0a0e17' }}
              >
                Download CV
              </button>
            </a>
          </div>

          <style>{`
            .icon-pill{
              width: 44px; height: 44px;
              display:flex; align-items:center; justify-content:center;
              border-radius: 999px;
              color: var(--text);
              background: var(--glass);
              border: 1px solid var(--line);
              transition: all .25s ease;
            }
            .icon-pill:hover{
              color: #0a0e17;
              background: var(--cyan);
              border-color: var(--cyan);
              transform: translateY(-3px);
            }

            .cv-btn{
              position: relative;
              overflow: hidden;
              transition: all .3s ease;
            }
            .cv-btn:hover{
              transform: translateY(-3px) scale(1.03);
              box-shadow: 0 8px 24px 0px var(--cyan);
            }

            .fade-up{
              opacity: 0;
              transform: translateY(20px);
              animation: fadeUp .6s ease forwards;
            }
            @keyframes fadeUp {
              to { opacity: 1; transform: translateY(0); }
            }
            .delay-1{ animation-delay: .05s; }
            .delay-2{ animation-delay: .15s; }
            .delay-3{ animation-delay: .25s; }
            .delay-4{ animation-delay: .35s; }
            .delay-5{ animation-delay: .45s; }
            .delay-6{ animation-delay: .55s; }
            .delay-7{ animation-delay: .65s; }

            @keyframes floatGlow {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-14px); }
            }
            .profile-float{
              animation: floatGlow 4s ease-in-out infinite;
            }

            @keyframes pulseGlow {
              0%, 100% { opacity: .5; }
              50% { opacity: .85; }
            }
            .glow-pulse{
              animation: pulseGlow 3s ease-in-out infinite;
            }

            @media (max-width: 768px){
              .fade-up{ animation-delay: 0s !important; }
            }
          `}</style>
        </div>

        <div className="relative w-[300px] h-[300px] max-md:w-[190px] max-md:h-[190px] max-md:order-1 shrink-0 mx-auto profile-float">
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-50 glow-pulse"
            style={{ background: 'linear-gradient(135deg, var(--cyan), var(--violet))' }}
          />
          <div
            className="relative w-full h-full rounded-full p-1.5"
            style={{ background: 'linear-gradient(135deg, var(--cyan), var(--violet))' }}
          >
            <div className="w-full h-full rounded-full p-1.5" style={{ background: 'var(--bg)' }}>
              <img
                src={image}
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className='min-h-screen py-6'>
        <div className='flex justify-center flex-wrap gap-2 text-center text-3xl font-bold py-10' style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>
          FrontEnd /
          <span className='bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text'>
            FULLStack Developer Skills
          </span>
        </div>
        <Skill />
      </div>

      <Project />
    </>
  )
}

export default Home