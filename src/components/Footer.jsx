import React from "react";
import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/ayman-ghonim-944796238" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/AymanGhonim" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.behance.net/" target="_blank" rel="noreferrer" aria-label="Behance"><FaBehance /></a>
        <a href="mailto:aymanmando367@gmail.com" aria-label="Email"><FaEnvelope /></a>
      </div>
      <p>© {new Date().getFullYear()} Ayman Ghonim</p>
    </footer>
  );
};

export default Footer;
