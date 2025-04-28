import React, { useRef } from 'react';
import "../Styles/Home.css";
import profileVideo from "../Media/profile.mp4";
import linkedinicon from "../Media/linkedinicon.png";
import emailinicon from "../Media/emailicon.png";

function Home() {
  const videoRef = useRef(null);

  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  };

  return (
    <div className="main-section">
      <div className="main-content">
        <div className="first-left-side">
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
        <div className="first-right-side">
          <div className="profile-video-container">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="profile-video"
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
    </div>
  );
}

export default Home;