import React, { useRef } from 'react';
import "../Styles/Home.css";
import profileVideo from "../Media/profile.mp4";
import linkedinicon from "../Media/linkedinicon.png";
import emailinicon from "../Media/emailicon.png";
import aboutVideo from "../Media/aboutvideo.mp4"

function Home() {
  const profileVideoRef = useRef(null);
  const aboutVideoRef = useRef(null);

  const handleLoadedData = () => {
    if (profileVideoRef.current) {
      profileVideoRef.current.playbackRate = 0.3;
    }
  };



  return (
    <div className="main-section">
      <div className="mt"></div>
      <div className="main-content">
        <div className="half-left-side">
          <h1>Hi, I’m Nikki Kim</h1>
          <h2>Computer Science Student</h2>
          <button className="cta-button">More about me</button>
          <div className="icons-ctr">
            <div className="icons">
              <img
              src={linkedinicon}
              alt="LinkedIn Logo"
              className="icons"
              />
            </div>
            <div className="icons">
              <img
                src={emailinicon}
                alt="Email Logo"
                className="icons"
                />
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
      <div className="mt"></div>
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
    </div>


  );
}

export default Home;