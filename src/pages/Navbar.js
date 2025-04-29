import React from "react";
import '../Styles/Navbar.css';

function Navbar({ scrollToSection, sectionRefs }) {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <nav className="navbar">
          {/* Left-aligned brand */}
          <div className="navbar-brand">
            <button 
                  className="nav-item"
                  onClick={() => scrollToSection(sectionRefs.home)}
                >
                  Home
              </button>
          </div>
          
          {/* Right-aligned navigation */}
          <div className="navbar-right">
            <ul className="nav-links">
              <li>
                <button 
                  className="nav-item"
                  onClick={() => scrollToSection(sectionRefs.about)}
                >
                  About me
                </button>
              </li>
              <li>
                <button 
                  className="nav-item"
                  onClick={() => scrollToSection(sectionRefs.experiences)}
                >
                  Experiences
                </button>
              </li>
              <li>
                <button 
                  className="nav-item"
                  onClick={() => scrollToSection(sectionRefs.projects)}
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  className="nav-item"
                  onClick={() => scrollToSection(sectionRefs.connect)}
                >
                  Connect
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;