import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiBootstrap, SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Tech Stack</h2>
      <p className="section-subtitle">Technologies I work with as a MERN Stack Developer</p>

      <div className="skills-container">
        <div className="skill">
          <FaHtml5 className="skill-icon html" />
          <span>HTML5</span>
        </div>
        <div className="skill">
          <FaCss3Alt className="skill-icon css" />
          <span>CSS3</span>
        </div>
        <div className="skill">
          <FaJs className="skill-icon js" />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FaReact className="skill-icon react" />
          <span>React.js</span>
        </div>
        <div className="skill">
          <SiRedux className="skill-icon redux" />
          <span>Redux</span>
        </div>
        <div className="skill">
          <SiBootstrap className="skill-icon bootstrap" />
          <span>Bootstrap</span>
        </div>
        <div className="skill">
          <SiExpress className="skill-icon express" />
          <span>Express.js</span>
        </div>
        <div className="skill">
          <FaNodeJs className="skill-icon node" />
          <span>Node.js</span>
        </div>
        <div className="skill">
          <SiMongodb className="skill-icon mongodb" />
          <span>MongoDB</span>
        </div>
        <div className="skill">
          <FaDatabase className="skill-icon database" />
          <span>Database Management</span>
        </div>
        <div className="skill">
          <FaGithub className="skill-icon github" />
          <span>Git & GitHub</span>
        </div>
        <div className="skill">
          <SiPostman className="skill-icon postman" />
          <span>Postman API</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
