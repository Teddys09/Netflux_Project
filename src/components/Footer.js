import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://www.facebook.com/">
            <FaFacebookF />
          </a>

          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>

          <a href="https://twitter.com/">
            <FaTwitter />
          </a>

          <a href="https://www.youtube.com/">
            <FaYoutube />
          </a>
        </div>
        <ul className="footer-link">
          <li>Audio and Subtitles</li>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Inverstor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
