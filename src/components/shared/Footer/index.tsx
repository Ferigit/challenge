import React from 'react';
import './Footer.scss'; // Import your SCSS styles here

const Footer: React.FC = () => (
  <footer className="footer-container">
    <p>&copy; {new Date().getFullYear()} Your Company Name</p>
  </footer>
);

export default Footer;
