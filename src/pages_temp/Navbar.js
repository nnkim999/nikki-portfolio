import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";

function Navbar({ scrollToSection, sectionRefs }) {
  const navRef = useRef();
  const [navColor, setNavColor] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const showNavbar = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeBG = () => {
    setNavColor(window.scrollY >= 10);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeBG);
    return () => window.removeEventListener("scroll", changeBG);
  }, []);

  const handleScrollClick = (ref) => {
    scrollToSection(ref);
    setMobileOpen(false);
  };

  return (
    <header className={`navbar-header ${navColor ? "active" : ""}`}>
      <div className="navbar-container">
        
        <button className="nav-btn" onClick={showNavbar}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <nav className={`navbar ${mobileOpen ? "mobile-open" : ""}`} ref={navRef}>
          <ul className="nav-links">
            <li>
              <button 
                className="nav-item"
                onClick={() => handleScrollClick(sectionRefs.home)}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className="nav-item"
                onClick={() => handleScrollClick(sectionRefs.skills)}
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                className="nav-item"
                onClick={() => handleScrollClick(sectionRefs.experiences)}
              >
                Experiences
              </button>
            </li>
            <li>
              <button 
                className="nav-item"
                onClick={() => handleScrollClick(sectionRefs.about)}
              >
                About me
              </button>
            </li>
            <li>
              <button 
                className="nav-item"
                onClick={() => handleScrollClick(sectionRefs.projects)}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                className="nav-item"
                onClick={() => handleScrollClick(sectionRefs.connect)}
              >
                Connect
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;