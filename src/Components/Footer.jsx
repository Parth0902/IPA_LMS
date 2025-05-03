import React from 'react'
import communication from '../Assets/social/communication.png';
import facebook from '../Assets/social/facebook.png';
import instagram from '../Assets/social/instagram.png';
import linkedin from '../Assets/social/linkedin.png';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='flex flex-col w-full bg-gray-800 py-10 font-semibold'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white px-8 md:px-16'>

        {/* Left Section - Logo and Description */}
        <div className='flex flex-col gap-4 md:w-2/3'>
          <h1 className='font-Heading text-2xl text-white'>IPA EDUCATION ACADEMY</h1>
          <p className='text-white'>
            Indian Podiatry Association is the largest Indian professional body for FootCare specialists.
            It was registered under the Societies Registration Act, XXI of 1860 by the Registrar of Societies,
            Delhi Administration vide dated April 4, 2010 at Delhi.
          </p>

          {/* Social Icons */}
          <div className='flex gap-4 mt-4 pb-6'>
            <a href='mailto:ipaedutech@gmail.com'>
              <img src={communication} alt="email" className='w-6 h-6' />
            </a>
            <a href='https://www.facebook.com/people/Indian-Podiatry-Association/61557916982106/'>
              <img src={facebook} alt="facebook" className='w-6 h-6' />
            </a>
            <a href='https://www.instagram.com/podiatryindia/'>
              <img src={instagram} alt="instagram" className='w-6 h-6' />
            </a>
            <a href='https://www.linkedin.com'>
              <img src={linkedin} alt="linkedin" className='w-6 h-6' />
            </a>
          </div>
        </div>

        {/* Right Section - Policies */}
        <div className='flex flex-col gap-2 mt-8 md:mt-0 md:items-end'>
          <Link to='/refundPolicy' className='text-white hover:underline'>Refund & Cancellation Policy</Link>
          <Link to='/term&Condition' className='text-white hover:underline'>Terms & Conditions</Link>
          <Link to='/privacyPolicy' className='text-white hover:underline'>Privacy Policy</Link>
        </div>
      </div>

      <p className='text-center text-white mt-6 '>&copy; IPA EDUCATION ACADEMY</p>
    </footer>

  )
}

export default Footer