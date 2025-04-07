import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Event Booking Platform",
    description: "A full-stack event booking system with authentication, payment integration, and real-time updates.",
    demoLink: "https://radiant-pegasus-245097.netlify.app/",
    githubLink: "https://github.com/Jayasri9694/eventbooking-frontend",
  },
  {
    id: 2,
    title: "Pet Adoption Platform",
    description: "A React & Node.js-based platform where users can adopt pets and manage pet profiles.",
    demoLink: "https://sunny-cannoli-cb078b.netlify.app",
    githubLink: "https://github.com/Jayasri9694/petadoptionproject-frontend",
  },
  {
    id: 3,
    title: "Cake Website",
    description: "A React & Node.js-based platform for cake lovers.",
    demoLink: "https://melodic-mooncake-693776.netlify.app",
    githubLink: "https://github.com/Jayasri9694/cakewebsite-frontend",
  },
  {
    id: 4,
    title: "Simple Portfolio",
    description: "A clean HTML, CSS, React, and JavaScript portfolio.",
    demoLink: "https://clever-cranachan-9f29ce.netlify.app",
    githubLink: "https://github.com/yourgithub/portfolio-html",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My <span>Projects</span></h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn demo-btn">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                GitHub Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
