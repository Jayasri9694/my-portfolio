import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import profilePic from "../assets/profile.jpg"; 

const Home = () => {
  return (
    <section className="home container">
      <div className="row align-items-center">
        {/* Profile Image Column */}
        <div className="col-md-5 text-center">
          <img src={profilePic} alt="Jayashree Kumaresan" className="profile-img img-fluid rounded-circle" />
        </div>

        {/* Content Column */}
        <div className="col-md-7">
          <h1>Hi, I'm <span className="highlight">Jayashree Kumaresan</span></h1>
          <h2 className="text-success">Full Stack MERN Developer</h2>
          <p>
            Passionate about building scalable and efficient web applications using **MongoDB, Express.js, React, and Node.js**. Experienced in designing full-stack solutions, integrating RESTful APIs, and ensuring optimal performance.
          </p>
          <div className="buttons">
            <a href="https://drive.google.com/file/d/1ntzd3KotAtLq1Pcwhy-lIlnyMPQx5jZO/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-success me-3">
              My Resume
            </a>
            <a href="#" className="btn btn-outline-success">
              See Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
