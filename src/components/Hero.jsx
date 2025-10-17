import React from "react";
import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <h2>
        Hello, I'm <span className="badge">Ayman Ghonim</span>
      </h2>
      <p>Frontend Developer · React · UI/UX · Animations</p>

      <div className="social-icons" aria-hidden="false">
        <a href="https://www.linkedin.com/in/ayman-ghonim-944796238" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/AymanGhonim" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.behance.net/" target="_blank" rel="noreferrer" aria-label="Behance"><FaBehance /></a>
        <a href="mailto:aymanmando367@gmail.com" aria-label="Email"><FaEnvelope /></a>
      </div>

      <a href="#projects" className="btn">View Work</a>
    </section>
  );
};

export default Hero;
