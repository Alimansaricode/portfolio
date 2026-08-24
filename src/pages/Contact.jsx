import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contacta'>
      <form action="https://formspree.io/f/mwpypgqe" method='POST'>
        <input  type="text" placeholder='Enter Your Name...' name='username' required />
        <input type="Email" placeholder='email' name='email' required />
        <textarea name="" placeholder='message' required></textarea>
        <button>Submite</button>
      </form>
      <div className='flex justify-center items-center flex-col'>
        <p className='text-white '>Gmail</p>
        <p className='text-white'>alimansari4175@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact
