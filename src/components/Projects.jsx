import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Event Booking Platform",
    description: "A fullstack MERN app for managing and booking events.",
    techStack: "React, Node.js, Express, MongoDB",
    frontendGit: "https://github.com/Jayasri9694/eventbooking-frontend",
    backendGit: "https://github.com/Jayasri9694/Eventbooking-backend",
    liveUrl: "https://radiant-pegasus-245097.netlify.app",
  },
  {
    title: "Pet Adoption Platform (Capstone)",
    description: "Platform to list pets and manage adoption applications.",
    techStack: "React, Node.js, Express, MongoDB",
    frontendGit: "https://github.com/Jayasri9694/petadoptionproject-frontend",
    backendGit: "https://github.com/Jayasri9694/petadoptionproject-backend",
    liveUrl: "https://sunny-cannoli-cb078b.netlify.app",
  },
  {
    title: "Cake Website",
    description: "A web platform to order cakes with a custom CMS backend.",
    techStack: "React, Node.js, Express, MongoDB",
    frontendGit: "https://github.com/Jayasri9694/cakewebsite-frontend",
    backendGit: "https://github.com/Jayasri9694/cakewebsite-backend",
    liveUrl: "https://melodic-mooncake-693776.netlify.app",
  },
  {
    title: "Simple Portfolio",
    description: "Basic portfolio built using HTML, CSS, and React.",
    techStack: "React, HTML, CSS, JavaScript",
    frontendGit: "https://github.com/yourgithub/portfolio-html",
    backendGit: "",
    liveUrl: "https://clever-cranachan-9f29ce.netlify.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <div className="project-links">
              <a className="btn" href={project.frontendGit} target="_blank" rel="noopener noreferrer">Frontend GitHub</a>
              {project.backendGit && (
                <a className="btn" href={project.backendGit} target="_blank" rel="noopener noreferrer">Backend GitHub</a>
              )}
              <a className="btn" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


