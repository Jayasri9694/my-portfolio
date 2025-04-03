import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Event Booking Platform",
    description: "A full-stack event booking system with authentication, payment integration, and real-time updates.",
    demoLink: "https://event-booking.netlify.app/",
    githubLink: "https://github.com/yourgithub/event-booking",// Replace with actual video ID
  },
  {
    title: "Pet Adoption Platform",
    description: "A React & Node.js-based platform where users can adopt pets and manage pet profiles.",
    demoLink: "https://pet-adoption.netlify.app/",
    githubLink: "https://github.com/yourgithub/pet-adoption",
    videoSrc: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  },
  {
    id: 3,
    title: "Simple Portfolio",
    description: "A clean HTML , CSS , react , javascript portfolio",
    demoLink: "/projects/portfolio/index.html", // Path inside public folder
    sourceCode: "https://github.com/yourgithub/portfolio-html",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My <span>Projects</span></h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="video-container">
              <iframe
                src={project.videoSrc}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
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
