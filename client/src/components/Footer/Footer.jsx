import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5 border-t">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">

        {/* Logo & Copyright */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-2">+Medicare</h2>
          <p className="mb-4">
            Copyright © 2023 developed by Muhibur Rahman. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xl text-gray-600">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-black mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* I want to: */}
        <div>
          <h3 className="font-semibold text-black mb-3">I want to:</h3>
          <ul className="space-y-2">
            <li>Find a Doctor</li>
            <li>Request an Appointment</li>
            <li>Find a Location</li>
            <li>Get an Opinion</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-black mb-3">Support</h3>
          <ul className="space-y-2">
            <li>Donate</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
