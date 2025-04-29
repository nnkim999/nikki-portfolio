import React, { useRef } from 'react';
import "../Styles/Home.css";
import Navbar from '../Pages/Navbar';
import profileVideo from "../Media/profile.mp4";
import linkedinicon from "../Media/linkedinicon.png";
import emailinicon from "../Media/emailicon.png";
import giticon from "../Media/giticon.png";
import aboutVideo from "../Media/aboutvideo.mp4";

function Home() {
  const profileVideoRef = useRef(null);
  const aboutVideoRef = useRef(null);

  //section references
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const connectSectionRef = useRef(null);

  // Scroll handler
 

  const handleLoadedData = () => {
    if (profileVideoRef.current) {
      profileVideoRef.current.playbackRate = 0.3;
    }
  };

  // Add this effect to your scrollToSection function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Add temporary glow effect
    if (ref === experienceSectionRef) {
      const timeline = document.querySelector('.timeline-line');
      timeline.style.animation = 'none';
      setTimeout(() => {
        timeline.style.animation = 'glow 2s ease';
      }, 10);
    }
  };

  
  return (
    <div className="main-section" ref={homeSectionRef}>
        <Navbar scrollToSection={scrollToSection} sectionRefs={{
        home: homeSectionRef,
        about: aboutSectionRef,
        experiences: experienceSectionRef,
        projects: projectSectionRef,
        connect: connectSectionRef
      }} />
      <div className="mt-md"></div>
      <div className="main-content">
        <div className="half-left-side">
          <h1>Hi, I’m Nikki Kim</h1>
          <h2>Computer Science Student</h2>
          <button className="cta-button" onClick={() => scrollToSection(aboutSectionRef)}>More about me</button>
          <div className="icons-ctr">
            <div className="icons">
              <a 
                href="https://www.linkedin.com/in/nikki-kim-161749229/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinicon}
                  alt="LinkedIn Logo"
                  className="icons" 
                />
              </a>
            </div>
            <div className="icons" onClick={() => scrollToSection(connectSectionRef)}>
              <img
                src={emailinicon}
                alt="Email Logo"
                className="icons"
              />
            </div>
            <div className="icons">
              <a 
                  href="https://github.com/nnkim999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img
                    src={giticon}
                    alt="Github Logo"
                    className="icons"  
                  />
              </a>
            </div>
          </div>
        </div>
        <div className="half-right-side">
          <div className="round-video-container">
            <video
              ref={profileVideoRef}
              autoPlay
              loop
              muted
              playsInline
              className="round-video"
              onLoadedData={handleLoadedData}
              style={{
                pointerEvents: 'none' // Disables all interactions
              }}
            >
              <source src={profileVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="mt-lg"  ref={aboutSectionRef}></div>
      <div className='mt-sm'></div>
      <div className="about-content">
            <div className='half-left-side'>
              <div className="round-video-container">
                <video
                  ref={aboutVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="round-video-lg"
                  onLoadedData={handleLoadedData}
                  style={{
                    pointerEvents: 'none' // Disables all interactions
                  }}
                >
                  <source src={aboutVideo} type="video/mp4" />
                </video>
            </div>
            </div>
            <div className='half-right-side'>
              <div className='text-section-container'>
                <h1>About me</h1>
                <h2>Hi, I’m Nikki, a third-year Computer Science student at the University of Calgary with a passion for software and creative problem-solving. 
                </h2>
                <h2>
                Through my internship, personal projects, and hackathons, I’ve built a strong foundation in technical development and teamwork.                 For extracurriculars, I’m active with WiCS (Women in Computer Science), Competitive Programming Club, and the Garden Club!
                </h2>
                <h2>
                In my free time, I love reading books, running marathons, and gardening!
                </h2>
              </div>
            </div>
      </div>


      <div className="mt-lg" ref={experienceSectionRef}></div>
      <div className='mt-sm'></div>
      <div className='experience-content' >
        <h1>Experiences</h1>
        <div className="timeline-container">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          {/* Experience items */}
          <div className="experience-items">
            <div className="experience-box">
              <div className="experience-dot"></div>
              <div className="experience-card">
                <h2>Systems Developer Intern (Full-stack developer)</h2>
                <h3>AUC</h3>
                <p className="experience-date">Fall 2023 - Present</p>
                <ul className="experience-details">
                  <li>Developed a user-friendly interface to systematically measure architectural practices</li>
                  <li>Automated data collection, reducing manual effort from 15+ hrs to 20 mins</li>
                  <li>Presented system designs for optimizing enterprise systems</li>
                </ul>
              </div>
            </div>

            <div className="experience-box">
              <div className="experience-dot"></div>
              <div className="experience-card">
                <h2>Vice President of Marketing</h2>
                <h3>Women in Computer Science</h3>
                <p className="experience-date">Jan 2024 - Present</p>
                <ul className="experience-details">
                  <li>Led user testing resulting in 21% usability improvement</li>
                  <li>Integrated user insights across cross-functional teams</li>
                </ul>
              </div>
            </div>

            <div className="experience-box">
              <div className="experience-dot"></div>
              <div className="experience-card">
                <h2>Junior Vice President of Finance</h2>
                <h3>Competitive Programming Club</h3>
                <p className="experience-date">Jan 2024 - Present</p>
                <ul className="experience-details">
                  <li>Led user testing resulting in 21% usability improvement</li>
                  <li>Integrated user insights across cross-functional teams</li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="mt-lg"></div>
      <div className='project-content' ref={projectSectionRef}>
        <h1>Projects</h1>
      </div>

      <div className="mt-lg"></div>
      <div className='connect-content' ref={connectSectionRef}>
        <div className='half-left-side'>
          <h1>Let’s connect</h1>
          <h2>I’d love to get to know you.</h2>
          <h3>EMAIL</h3>
          <h2>nikkikim999@gmail.com</h2>
        </div>
        <div className='half-right-side'>
   
        </div>
      </div>

    </div>


  );
}

export default Home;