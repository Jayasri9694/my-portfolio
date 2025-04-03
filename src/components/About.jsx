import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">
            About <span>Me</span>
          </h2>
          <p className="about-text">
            I'm a <strong>MERN Stack Developer</strong> passionate about building
            dynamic and interactive web applications. I specialize in
            developing full-stack solutions using <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
            With a strong foundation in front-end and back-end technologies, I create
            seamless user experiences and scalable applications.
          </p>
          <p className="about-text">
            My expertise includes crafting <strong>RESTful APIs, database design, authentication,
            and state management</strong>. I thrive in solving complex problems and implementing
            efficient solutions using the latest JavaScript technologies.
          </p>
          <p className="about-text">
            Let's build something amazing together! 🚀
          </p>
          <Link to="/contact" className="btn">Contact Me</Link>
        </div>
        <div className="about-image">
          <img src="/images/profile.jpg" alt="MERN Developer" />
        </div>
      </div>
    </section>
  );
};

export default About;
