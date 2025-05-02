import React, { useRef } from 'react';
import "../Styles/Main.css";

import profileVideo from "../Media/profile.mp4";
import linkedinicon from "../Media/linkedinicon.png";
import emailinicon from "../Media/emailicon.png";
import giticon from "../Media/giticon.png";

import { TbBrandCSharp } from "react-icons/tb";

import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiPython,
    SiNodedotjs,
    SiReact,
    SiDjango,
    SiMysql, // Works for MySQL
    SiCplusplus, // Works for C++
    SiBlazor, // Works for Blazor
    SiGit, // Works for Git
    SiDocker, // Works for Docker
    SiSelenium, // Works for Selenium
    SiJunit5,
    SiC, // Works for JUnit
  } from "react-icons/si";

import { FaJava, FaJira } from "react-icons/fa"; // Java, JIRA, Git Alternative
import { DiDatabase } from "react-icons/di"; // General SQL/Database Icon
import { TbBrandVisualStudio, TbBrandVscode } from "react-icons/tb"; // VS & VS Code
import { BiSolidServer } from "react-icons/bi"; // SQL Server Studio (Alternative)
//import { SiCloud } from "react-icons/si"; // Cloud icon, a good substitute for Azure
import { VscSymbolNamespace } from "react-icons/vsc"; // Alternative for Eclipse

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
                   
                        <div className="skill-item">
                            <div className="skill-box">
                                <SiHtml5 className="skill-icon html-icon" />
                            </div>
                            <div className="skill-name">HTML</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <SiCss3 className="skill-icon css-icon" />
                            </div>
                            <div className="skill-name">CSS</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <SiJavascript className="skill-icon js-icon" />
                            </div>
                            <div className="skill-name">JavaScript</div>
                        </div>


                        <div className="skill-item">
                            <div className="skill-box">
                                <SiPython className="skill-icon python-icon" />
                            </div>
                            <div className="skill-name">Python</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <TbBrandCSharp className="skill-icon csharp-icon" />
                            </div>
                            <div className="skill-name">C#</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <SiCplusplus className="skill-icon cplusplus-icon" />
                            </div>
                            <div className="skill-name">C++</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <FaJava className="skill-icon java-icon" />
                            </div>
                            <div className="skill-name">Java</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <SiMysql className="skill-icon mysql-icon" />
                            </div>
                            <div className="skill-name">MySQL</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <DiDatabase className="skill-icon sql-icon" />
                            </div>
                            <div className="skill-name">SQL (General)</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <BiSolidServer className="skill-icon sql-server-icon" />
                            </div>
                            <div className="skill-name">SQL Server Studio</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <SiReact className="skill-icon react-icon" />
                            </div>
                            <div className="skill-name">React</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <SiDocker className="skill-icon docker-icon" />
                            </div>
                            <div className="skill-name">Docker</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <TbBrandVisualStudio className="skill-icon vs-icon" />
                            </div>
                            <div className="skill-name">Visual Studio</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <TbBrandVscode className="skill-icon vsc-icon" />
                            </div>
                            <div className="skill-name">Visual Studio Code</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <SiGit className="skill-icon git-icon"/>
                            </div>
                            <div className="skill-name">Git</div>
                        </div>

                        <div className="skill-item">
                            <div className="skill-box">
                                <SiBlazor className="skill-icon blazor-icon" />
                            </div>
                            <div className="skill-name">Blazor</div>
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