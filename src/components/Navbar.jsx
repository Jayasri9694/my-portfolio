import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
 // Import a logo image if needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo on the Left */}
      <div className="logo">
        <h1>Portfolio</h1>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links on the Right */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
        <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
