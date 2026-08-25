import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contacta'>
      <h2
        className='text-4xl font-bold text-center mb-10'
        style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
      >
        Get In{" "}
        <span className='bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text'>
          Touch
        </span>
      </h2>

      <form action="https://formspree.io/f/mwpypgqe" method='POST'>
        <input type="text" placeholder='Enter your name...' name='username' required />
        <input type="email" placeholder='Enter your email...' name='email' required />
        <textarea name="message" placeholder='Your message...' required></textarea>
        <button type="submit">Submit</button>
      </form>

      <div className='flex justify-center items-center flex-col mt-8'>
        <p style={{ color: 'var(--muted)' }}>Gmail</p>
        <p style={{ color: 'var(--text)' }}>alimansari4175@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact
