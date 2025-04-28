import React from "react";
import '../style/Navbar.css'; 

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home" className="nav-item">Home</a></li>
          <li><a href="#aboutme" className="nav-item">About me</a></li>
          <li><a href="#experiences" className="nav-item">Experiences</a></li>
          <li><a href="#projects" className="nav-item">Projects</a></li>
          <li><a href="#connect" className="nav-item">Connect</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
