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
        <div className='pt-10 pl-35 w-[75%] max-md:pl-6 max-md:w-[90%] max-md:order-2 max-md:text-center'>

          <p
            className='inline-block text-[13px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border mb-5'
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)', borderColor: 'var(--line)' }}
          >
            ~/ full stack developer
          </p>

          <h1
            className='text-[52px] max-md:text-[38px] font-bold leading-tight'
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Hi, I'm Alim Ansari
          </h1>

          <h2 className='flex max-md:justify-center flex-wrap text-[28px] max-md:text-[22px] font-semibold mt-2' style={{ color: 'var(--muted)' }}>
            I build&nbsp;
            <span className='bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text'>
              modern web experiences
            </span>
          </h2>

          <p className='max-md:text-[16px] mt-5 max-w-[560px] max-md:mx-auto' style={{ color: 'var(--muted)' }}>
            As a Frontend Developer, I specialize in creating clean and responsive web applications
            using HTML, CSS, JavaScript, React, and Tailwind.
          </p>
          <p className='max-md:text-[16px] mt-2 max-w-[560px] max-md:mx-auto' style={{ color: 'var(--muted)' }}>
            I love building user-friendly interfaces, optimizing performance, and delivering modern,
            high-quality digital experiences.
          </p>

          <div className='flex gap-5 mt-8 max-md:justify-center'>
            <a href='https://www.linkedin.com/in/alim-ansari-1bbbb3306/' target='_blank' rel="noreferrer" className='icon-pill'>
              <FaLinkedin className='w-[20px] h-[20px]' />
            </a>
            <a href='mailto:alimansari70534@gmail.com' target='_blank' rel="noreferrer" className='icon-pill'>
              <BiLogoGmail className='w-[20px] h-[20px]' />
            </a>
            <a href='#' className='icon-pill'>
              <IoLogoYoutube className='w-[20px] h-[20px]' />
            </a>
            <a href='https://github.com/Alimansaricode?tab=repositories' target='_blank' rel="noreferrer" className='icon-pill'>
              <FaGitAlt className='w-[20px] h-[20px]' />
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
          `}</style>

          <div className='flex mt-8 max-md:justify-center'>
            <a
              href='https://docs.google.com/document/d/1yXif5Nd3ZTdHNRRWErBOfJ2N4LZXB9U4Bqt4HLcf6Jw/edit?usp=sharing'
              target='_blank' rel="noreferrer"
            >
              <button
                className='px-7 h-13 font-bold text-[16px] rounded-full transition hover:opacity-90'
                style={{ background: 'var(--cyan)', color: '#0a0e17' }}
              >
                Download CV
              </button>
            </a>
          </div>
        </div>

        <div className="relative w-[300px] h-[300px] max-md:w-[190px] max-md:h-[190px] max-md:order-1 shrink-0 mx-auto">
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-50"
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
