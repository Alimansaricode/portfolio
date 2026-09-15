// import React, { useState } from 'react'
// import './Nav.css'
// import { Link } from 'react-router-dom'
// import { FiAlignJustify } from "react-icons/fi";
// import { RxCross1 } from "react-icons/rx";
// import Hero from '../Hero/Hero';

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/Project", label: "Projects" },
//   { to: "/Skill", label: "Skills" },
//   { to: "/Contact", label: "Contact" },
// ];

// function Nav() {
//   const [showMenu, setShowMenu] = useState(false)

//   return (
//     <>
//       <Hero />

//       <div className='flex justify-center sticky top-0 z-50 px-4'>
//         <div
//           className='w-full max-w-[1200px] h-[68px] flex justify-between items-center mt-6 px-8 max-lg:px-5
//                       rounded-full border'
//           style={{
//             background: 'rgba(10, 14, 23, 0.55)',
//             backdropFilter: 'blur(16px)',
//             borderColor: 'var(--line)',
//           }}
//         >
//           <Link to="/" className='flex items-center gap-2 cursor-pointer group'>
//             <span
//               className='w-2.5 h-2.5 rounded-full'
//               style={{ background: 'var(--cyan)' }}
//             />
//             <h1
//               className='text-[22px] font-bold tracking-tight'
//               style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
//             >
//               Alim<span style={{ color: 'var(--cyan)' }}>.dev</span>
//             </h1>
//           </Link>

//           <ul className='max-md:hidden flex justify-center items-center gap-10'>
//             {links.map((l) => (
//               <li key={l.to}>
//                 <Link to={l.to} className='nav-link'>{l.label}</Link>
//               </li>
//             ))}
//           </ul>

//           <div
//             className='nav-toggle'
//             onClick={() => setShowMenu(true)}
//           >
//             <FiAlignJustify />
//           </div>
//         </div>
//       </div>

//       {/* mobile menu */}
//       <div
//         className={`hidden max-md:block z-[60] max-sm:w-full h-full top-0 right-0 fixed duration-300 ${
//           showMenu ? "translate-x-0" : "translate-x-full"
//         }`}
//         style={{ background: 'rgba(10, 14, 23, 0.97)' }}
//       >
//         <header className='w-full flex justify-end p-6' onClick={() => setShowMenu(false)}>
//           <span className='text-[32px] cursor-pointer' style={{ color: 'var(--text)' }}>
//             <RxCross1 />
//           </span>
//         </header>

//         <div className='flex flex-col justify-center items-center gap-10 mt-16'>
//           <h2
//             className='text-[28px] font-bold mb-4'
//             style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
//           >
//             Alim<span style={{ color: 'var(--cyan)' }}>.dev</span>
//           </h2>
//           <ul className='flex flex-col justify-center items-center gap-8'>
//             {links.map((l) => (
//               <li key={l.to} onClick={() => setShowMenu(false)}>
//                 <Link to={l.to} className='text-[22px] font-semibold' style={{ color: 'var(--muted)' }}>
//                   {l.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Nav
import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Hero from '../Hero/Hero';

const links = [
  { to: "/", label: "Home" },
  { to: "/Project", label: "Projects" },
  { to: "/Skill", label: "Skills" },
  { to: "/Contact", label: "Contact" },
];

function Nav() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Hero />

      <div className='flex justify-center sticky top-0 z-50 px-4 nav-enter'>
        <div
          className='w-full max-w-[1200px] h-[68px] flex justify-between items-center mt-6 px-8 max-lg:px-5
                      rounded-full border'
          style={{
            background: 'rgba(10, 14, 23, 0.55)',
            backdropFilter: 'blur(16px)',
            borderColor: 'var(--line)',
          }}
        >
          <Link to="/" className='flex items-center gap-2 cursor-pointer group'>
            <span
              className='w-2.5 h-2.5 rounded-full logo-dot'
              style={{ background: 'var(--cyan)' }}
            />
            <h1
              className='text-[22px] font-bold tracking-tight'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
            >
              Alim<span style={{ color: 'var(--cyan)' }}>.dev</span>
            </h1>
          </Link>

          <ul className='max-md:hidden flex justify-center items-center gap-10'>
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className='nav-link'>{l.label}</Link>
              </li>
            ))}
          </ul>

          <div
            className='nav-toggle'
            onClick={() => setShowMenu(true)}
          >
            <FiAlignJustify />
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`hidden max-md:block z-[60] max-sm:w-full h-full top-0 right-0 fixed duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: 'rgba(10, 14, 23, 0.97)' }}
      >
        <header className='w-full flex justify-end p-6' onClick={() => setShowMenu(false)}>
          <span className='text-[32px] cursor-pointer close-icon' style={{ color: 'var(--text)' }}>
            <RxCross1 />
          </span>
        </header>

        <div className='flex flex-col justify-center items-center gap-10 mt-16'>
          <h2
            className='text-[28px] font-bold mb-4'
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}
          >
            Alim<span style={{ color: 'var(--cyan)' }}>.dev</span>
          </h2>
          <ul className='flex flex-col justify-center items-center gap-8'>
            {links.map((l, i) => (
              <li
                key={l.to}
                onClick={() => setShowMenu(false)}
                className={showMenu ? 'menu-item-enter' : ''}
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <Link to={l.to} className='text-[22px] font-semibold' style={{ color: 'var(--muted)' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav