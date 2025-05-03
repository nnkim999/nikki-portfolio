import React, { useRef, useState } from 'react';
import "../Styles/Main.css";
import Navbar from '../Pages/Navbar';
import EmailForm from '../Pages/Email';

import { ReactTyped } from "react-typed";
import aboutVideo from "../Media/aboutvideo.mp4";
import profileVideo from "../Media/profile.mp4";
import linkedinicon from "../Media/linkedinicon.png";
import emailinicon from "../Media/emailicon.png";
import giticon from "../Media/giticon.png";
import aucicon from "../Media/aucicon.png";
import wicsicon from "../Media/wicsicon.png";
import cpcicon from "../Media/cpcicon.png";
import { TbBrandCSharp } from "react-icons/tb";
import emailjs from 'emailjs-com';

import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiPython,
    SiReact,
    SiMysql,
    SiCplusplus, 
    SiBlazor, 
    SiGit,
    SiDocker, 

  } from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { DiDatabase } from "react-icons/di"; 
import { TbBrandVisualStudio, TbBrandVscode } from "react-icons/tb"; 
import { BiSolidServer } from "react-icons/bi"; 
function Main(){

    //video ref
    const aboutVideoRef = useRef(null);
    const profileVideoRef = useRef(null);

    //section ref
    const homeSectionRef = useRef(null);
    const skillSectionRef = useRef(null);
    const aboutSectionRef = useRef(null);
    const experienceSectionRef = useRef(null);
    const projectSectionRef = useRef(null);
    const connectSectionRef = useRef(null);


    //scroll
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      };
    
    const handleLoadedData = () => {
        if (profileVideoRef.current) {
          profileVideoRef.current.playbackRate = 0.3;
        }
      };

    //projects
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
    {
        id: 1,
        title: "Evently",
        description: "I'm Kalvin Doe. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "Designed and developed a responsive portfolio site showcasing my work with animations."
    },
    {
        id: 3,
        title: "Coming soon",
        description: "..."
    }
    ];

    const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };


    
    return(
        <div className="constraint">
            <div className='content-container hero extra-padding-50' ref={homeSectionRef}>
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
                    <h2>
                        <ReactTyped
                            className="typing"
                            strings={[
                            "Computer Science Student",
                            "Full-stack Software Developer",
                            ]}
                            typeSpeed={100}
                            backSpeed={50}
                            loop
                        />
                    </h2>
                    <button className='cta-btn' onClick={() => scrollToSection(aboutSectionRef)}>More about me</button>
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
                            className="icons linkedin-icon" 
                            />
                        </a>
                        </div>
                        <div className="icons" onClick={() => scrollToSection(connectSectionRef)}>
                        <img
                            src={emailinicon}
                            alt="Email Logo"
                            className="icons "
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
                                className="icons github-icon"  
                            />
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='extra-padding-50'></div>
            <div className="content-container skills" ref={skillSectionRef}>
                <h1 className="centered-text extra-padding-25">
                    <span className="thin">My</span> Skills
                </h1>

                <div className="skills-grid-wrapper extra-padding-50">
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

            <div className='extra-padding-50'></div>
            <div className='content-container experiences' ref={experienceSectionRef}>
                <h1><span className='thin '>My</span> Experiences</h1>

                <div class="timeline extra-padding-25">
                <div class="experience-item">
                    <div class="experience-content">
                    <div class="job-header">
                        <img
                                src={aucicon}
                                alt="AUC Logo"
                                className="icons" 
                                />
                        <h2 class="job-title">Systems Developer Intern at <span className="bolded">AUC</span> </h2>
                    </div>
                    <div class="date">September 2023 – Present</div>
                        <p>As a developer, I created web applications using Blazor, HTML, CSS, C#, Entity Framework, REST API, and SQL to deliver efficient, user-friendly solutions while collaborating with a 7-member team through code reviews and Azure repository management.</p>
                        <p>Serving dual roles, I acted as Junior Project Manager to coordinate team efforts and stakeholder communication, while implementing agile methodologies to meet sprint deadlines. </p>
                        <p>I enhanced application quality by implementing new features, conducting thorough testing, improving UI with Radzen, and integrating Fluent Validation for robust data validation.</p>
                        <p>My exceptional performance was recognized with an Employee Appreciation Award, leading to a part-time position offer to balance continued contributions with academic commitments.</p>
                   </div>
                </div>

                    <div class="experience-item">
                        <div class="experience-content">
                        <img
                                src={wicsicon}
                                alt="WICS Logo"
                                className="icons" 
                                />
                        <h2 class="job-title">VP of Marketing at <span className='bolded'>WiCS</span></h2>
                        <div class="date">Oct 2023 - May 2025</div>
                        <p>At WiCS, I served as the VP of marketing, focusing on the design and marketing for the club's social media. Working on projects that involved multiple sponsors and events, I managed 2 Junior VPs and increased reachability and engagement by 200%.</p>
                        </div>
                    </div>

                    <div class="experience-item">
                        <div class="experience-content">
                        <img
                                src={cpcicon}
                                alt="CPC Logo"
                                className="icons" 
                                />
                        <h2 class="job-title">Junior VP of Finance at <span className='bolded'>Competitive Programming Club</span></h2>
                        <div class="date">Jan 2023 - May 2024</div>
                        <p>At CPC, I held the role of Jr VP of Finance, where I played a key role in managing the club finances. Responsible for creating and handling invoices to sponsors, I provided strong organization and communication to a cross-functional team.</p>
                        </div>
                    </div>
                </div>


            </div>

            <div className='extra-padding-50'></div>
            <div className='content-container about' ref={aboutSectionRef}>
                <div className='hero-right'>
                    <div className='video-container extra-padding-25'>
                        <video
                            ref={aboutVideoRef}
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
                            <source src={aboutVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className='hero-left'>
                    <div className='text-section-container'>
                        <h1 className='extra-padding-25'><span className='thin'>About</span> Me</h1>
                        <h2>Hi, I’m Nikki, a third-year Computer Science student at the University of Calgary with a passion for software and creative problem-solving. 
                        </h2>
                        <br/>
                        <h2>
                        Through my internship, personal projects, and hackathons, I’ve built a strong foundation in technical development and teamwork. For extracurriculars, I’m active with WiCS (Women in Computer Science), Competitive Programming Club, and the Garden Club!
                        </h2>
                        <br/>
                        <h2>
                        In my free time, I love reading books, running marathons and gardening!
                        </h2>
                    </div>
                </div>
            </div>

            <div className='extra-padding-50'></div>
            <div className='content-container projects' ref={projectSectionRef}>
                <h1 className='centered-text'><span className='thin'>My</span> Projects</h1>
                <div className='project-slider'>
                    {/* Left Arrow - now part of the flex flow */}
                    <div className="nav-arrow arrow-left" onClick={prevProject}>
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    </div>

                    {/* Project Box - centered with spacing */}
                    <div className="project-box">
                    <div className='project-content'>
                        <h3 className="project-name">{projects[currentProject].title}</h3>
                        <p className="project-description">
                        {projects[currentProject].description}
                        </p>
                    </div>
                    </div>

                    {/* Right Arrow - now part of the flex flow */}
                    <div className="nav-arrow arrow-right" onClick={nextProject}>
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    </div>
                </div>
            </div>


            <div className='content-container connect' ref={connectSectionRef}>
                <h1>Connect <span className='thin'>with me</span></h1>
                <EmailForm/>
            </div>


            <div className='content-container footer'>
                <h3>nikkikim999@gmail.com</h3>
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
                            className="icons linkedin-icon" 
                            />
                        </a>
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
                                className="icons github-icon"  
                            />
                        </a>
                        </div>
                </div>
                <h6 className='centered-text'>© 2025 Nikki Kim.</h6>
            </div>
        

        </div>




    );
}

export default Main;