import React from "react";

const Projects = () => {
  const projects = [
    {
      name: " Programing-Tracks",
      link: "https://aymanghomim.github.io/programing-tracks-website/",
      desc: "Html & Css",
    },
    {
      name: "Magazine Site",
      link: "https://aymanghomim.github.io/Magazine/",
      desc: "Html & Css layout",
    },
    {
      name: "Weather",
      link: "https://aymanghomim.github.io/Weather/",
      desc: "Using Html & Css & Javascript",
    },
  ];
  return (
    <section id="projects" data-aos="fade-up">
      <h2 className="section-title">Projects</h2>
      <div className="project-cards">
        {projects.map((p, i) => (
          <div key={p.name} className="card" data-aos="flip-left" data-aos-delay={i*100}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} className="view">View</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
