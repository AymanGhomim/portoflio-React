import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React","Next.js","Tailwind", "AOS", "Animations","Git & Github"];
  return (
    <section id="skills" data-aos="zoom-in">
      <h2 className="section-title">Skills</h2>
      <div className="panel">
        <div className="skills-list">
          {skills.map((s) => (
            <span key={s} className="skill">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
