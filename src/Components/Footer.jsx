import React from 'react';
import communication from '../Assets/social/communication.png';
import facebook from '../Assets/social/facebook.png';
import instagram from '../Assets/social/instagram.png';
import linkedin from '../Assets/social/linkedin.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-10 px-6 md:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-gray-600 pb-8 gap-8">
        {/* Left Section - Logo & Info */}
        <div className="flex flex-col gap-4 max-w-lg">
          <img
            src="https://IPA-Images.b-cdn.net/Assets/aboutUs.png"
            alt="IPA Logo"
            className="h-16 w-16 object-contain"
          />
          <h1 className="text-2xl font-semibold">IPA EDUCATION ACADEMY</h1>
          <p className="text-sm text-gray-300 text-justify">
            Indian Podiatry Association is the largest Indian professional body for FootCare specialists.
            It was registered under the Societies Registration Act, XXI of 1860 by the Registrar of Societies,
            Delhi Administration vide dated April 4, 2010 at Delhi.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="mailto:ipaedutech@gmail.com" aria-label="Email">
              <img src={communication} alt="email" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/people/Indian-Podiatry-Association/61557916982106/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebook} alt="facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/podiatryindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagram} alt="instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedin} alt="linkedin" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Section - Policies */}
        <div className="flex flex-col gap-3 mt-6 lg:mt-0 lg:items-end">
          <Link to="/refundPolicy" className="hover:underline text-sm">
            Refund & Cancellation Policy
          </Link>
          <Link to="/term&Condition" className="hover:underline text-sm">
            Terms & Conditions
          </Link>
          <Link to="/privacyPolicy" className="hover:underline text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-sm mt-6 text-gray-400">
        &copy; {new Date().getFullYear()} IPA EDUCATION ACADEMY
      </p>
    </footer>
  );
};

export default Footer;
