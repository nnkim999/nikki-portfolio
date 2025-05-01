import React, { useRef } from 'react';
import "../Styles/Main.css";

import profileVideo from "../Media/profile.mp4";
import linkedinicon from "../Media/linkedinicon.png";
import emailinicon from "../Media/emailicon.png";
import giticon from "../Media/giticon.png";

function Main(){

    const profileVideoRef = useRef(null);
    const handleLoadedData = () => {
        if (profileVideoRef.current) {
          profileVideoRef.current.playbackRate = 0.3;
        }
      };

    return(
        <div className="constraint">
            <div className='content-container hero extra-padding-50'>
                <div className='hero-right extra-padding-25'>
                    <div className='video-container'>
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
                <div className='hero-left'>
                    <h1>Hi, I’m Nikki Kim</h1>
                    <h2>Computer Science Student</h2>
                    <button className='cta-btn'>More about me</button>
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
                        <div className="icons" >
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
            </div>


            <div className="content-container skills">
                <h1 className="centered-text extra-padding-25">
                    <span className="thin">My</span> Skills
                </h1>

                <div className="skills-grid-wrapper">
                    <div className="skills-grid">
                    {/* Skill 1 */}
                    <div className="skill-item">
                        <div className="skill-box">
                        <img src={expressIcon} alt="C#" className="skill-logo" />
                        </div>
                        <div className="skill-name">C#</div>
                    </div>

                    {/* Skill 2 */}
                    <div className="skill-item">
                        <div className="skill-box">
                        <img src={javascriptIcon} alt="Python" className="skill-logo" />
                        </div>
                        <div className="skill-name">Python</div>
                    </div>

                    {/* Skill 3 */}
                    <div className="skill-item">
                        <div className="skill-box">
                        <img src={angularIcon} alt="SQL" className="skill-logo" />
                        </div>
                        <div className="skill-name">SQL</div>
                    </div>

                    {/* Skill 4 */}
                    <div className="skill-item">
                        <div className="skill-box">
                        <img src={typescriptIcon} alt="React" className="skill-logo" />
                        </div>
                        <div className="skill-name">React</div>
                    </div>
                    </div>
                </div>
            </div>

            <div className='content-container about'>
                <div className='hero-right'>

                </div>
                <div className='hero-left'>
                    <div className='text-section-container'>
                        <h1 className='extra-padding-25'><span className='thin'>About</span> Me</h1>
                        <h2>Hi, I’m Nikki, a third-year Computer Science student at the University of Calgary with a passion for software and creative problem-solving. 
                        </h2>
                        <br/>
                        <h2>
                        Through my internship, personal projects, and hackathons, I’ve built a strong foundation in technical development and teamwork.                 For extracurriculars, I’m active with WiCS (Women in Computer Science), Competitive Programming Club, and the Garden Club!
                        </h2>
                        <br/>
                        <h2>
                        In my free time, I love reading books, running marathons, and gardening!
                        </h2>
                    </div>
                    

                </div>


            </div>

            <div className='content-container experiences'>
                <h1><span className='thin'>My</span> Experiences</h1>


            </div>

    

            <div className='content-container projects'>
                <h1><span className='thin'>My</span> Projects</h1>


            </div>

            <div className='content-container connect'>
                <h1>Connect with me</h1>


            </div>



        </div>


    );
}

export default Main;