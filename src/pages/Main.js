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

    //bundle all refs in an object
    const sectionRefs = {
        home: homeSectionRef,
        skills: skillSectionRef,
        experiences: experienceSectionRef,
        about: aboutSectionRef,
        projects: projectSectionRef,
        connect: connectSectionRef
    };

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
        description: "All-in-one event booking application for managing events. Built using React, HTML, CSS, and a MySQL database to support multiple user types (admins, organizers, and attendees), with features like ticket purchasing, refunds, and event creation. Docker was utilized for containerization to ensure consistent deployment across environments.",
        video: 'https://www.youtube.com/embed/zFcE9G75BFw?'
    },
    {
        id: 2,
        title: "ClinicsRUS",
        description: "Interactive scheduling system for a medical clinic to enhance appointment accessibility. Developed using HTML, CSS, and React, with a user-friendly interface for patients to schedule appointments on both desktop and mobile. Focused on user experience (UX) with a vertical prototype approach to emphasize front-end functionality.",
        video: 'https://www.youtube.com/embed/x0L31Qy58Oc'
    },
    ];

    const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };


    return(
        <>
        <Navbar scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
        <div className="constraint">
            <div class="extra-padding-50" ref={homeSectionRef}></div>
            <div className='content-container hero extra-padding-50' >
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
                            pointerEvents: 'none' //disables all interactions
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
                            "Full-Stack Developer",
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
                        <div className="icons">
                        <a href="mailto:nikkikim999@gmail.com" className="icons">
                            <img
                                src={emailinicon}
                                alt="Email Logo"
                                className="icons"
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
                </div>
            </div>

            <div className='extra-padding-50'></div>
            <div className='extra-padding-50' ref={skillSectionRef}></div>
            <div className="content-container skills" >
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

            <div className='content-container experiences extra-padding-25' ref={experienceSectionRef}></div>
            <div className='content-container experiences' >
                <h1><span className='thin '>My</span> Experiences</h1>
                <div className="timeline extra-padding-25">
                <div className="experience-item">
                    <div className="experience-content">
                    <div className="job-header">
                        <img
                                src={aucicon}
                                alt="AUC Logo"
                                className="icons" 
                                />
                        <h2 className="job-title">Full-Stack Developer Intern at <span className="bolded">AUC</span> </h2>
                    </div>
                    <div className="date">September 2023 – Present</div>
                        <p>As a developer, I created web applications using <span className='bolded'>Blazor, HTML, CSS, C#, Entity Framework, REST API, and SQL</span> to deliver efficient, user-friendly solutions while collaborating with a 7-member team through code reviews and Azure repository management.</p>
                        <p>Serving dual roles, I acted as Junior Project Manager to coordinate team efforts and stakeholder communication, while implementing <span className='bolded'>agile methodologies</span> to meet sprint deadlines. </p>
                        <p>I enhanced application quality by implementing new features, conducting thorough testing, improving UI with Radzen, and integrating Fluent Validation for robust <span className='bolded'>data validation</span>.</p>
                        <p>My exceptional performance was recognized with an <span className='bolded'>Employee Appreciation Award</span>, leading to a part-time position offer to balance continued contributions with academic commitments.</p>
                   </div>
                </div>

                    <div className="experience-item">
                        <div className="experience-content">
                        <img
                                src={wicsicon}
                                alt="WICS Logo"
                                className="icons" 
                                />
                        <h2 className="job-title">VP of Marketing at <span className='bolded'>Women in Computer Science (WiCS)</span></h2>
                        <div className="date">Oct 2023 - May 2025</div>
                        <p>WiCS is a club at the University of Calgary that aims to create an inclusive and supportive community for women in computer science by fostering mentorship, networking, and professional growth opportunities.</p>
                        <p>At WiCS, I served as the VP of marketing, focusing on the <span className='bolded'>design and marketing</span> for the club's social media. Working on projects that involved multiple sponsors and events, I <span className='bolded'>managed 2 Junior VPs</span> and increased reachability and engagement by <span className='bolded'>200%</span>.</p>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-content">
                        <img
                                src={cpcicon}
                                alt="CPC Logo"
                                className="icons" 
                                />
                        <h2 className="job-title">Junior VP of Finance at <span className='bolded'>Competitive Programming Club (CPC)</span></h2>
                        <div className="date">Jan 2023 - May 2024</div>
                        <p>CPC is a club at the University of Calgary that aims to equip developers with technical skills through training, mentorship, and competitive programming.</p>
                        <p>At CPC, I held the role of Jr VP of Finance, where I played a key role in <span className='bolded'>managing the club finances</span>. Responsible for creating and handling invoices to sponsors, I provided <span className='bolded'>strong organization and communication</span> to a cross-functional team.</p>
                        </div>
                    </div>
                </div>


            </div>


            <div className='extra-padding-50'></div>
            <div className='extra-padding-25' ref={aboutSectionRef}></div>
            <div className='extra-padding-50'></div>
            <div className='content-container about' >
                <div className='about-right'>
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
                            pointerEvents: 'none' //disables all interactions
                            }}
                        >
                            <source src={aboutVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className='about-left'>
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

            <div className='extra-padding-25'></div>
            <div className='extra-padding-50'></div>
            <div className='content-container projects' ref={projectSectionRef}>
            <div className='extra-padding-25'></div>
                <h1 className='centered-text'><span className='thin'>My</span> Projects</h1>
                <div className='project-slider'>
                    {/* Left Arrow */}
                    <div className="nav-arrow arrow-left" onClick={prevProject}>
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    </div>

                    {/* Project Box */}
                    <div className="project-box">
                    <div className='project-content'>
                        <h3 className="project-name">{projects[currentProject].title}</h3>
                        <div className="project-video-container">
                            <iframe
                                src={projects[currentProject].video}
                                title={`${projects[currentProject].title} Demo`}
                                className="project-video"
                                allow="autoplay; encrypted-media"
                                frameBorder="0"
                                allowFullScreen
                                ></iframe>
                            </div>
                        <p className="project-description">
                        {projects[currentProject].description}
                        </p>
                    </div>
                    </div>

                    {/* Right Arrow */}
                    <div className="nav-arrow arrow-right" onClick={nextProject}>
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    </div>
                </div>
                </div>

            <div className='content-container connect' ref={connectSectionRef}>
            <div className='extra-padding-50'></div>
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
                        <a href="mailto:nikkikim999@gmail.com" className="icons">
                            <img
                                src={emailinicon}
                                alt="Email Logo"
                                className="icons"
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
        </>



    );
}

export default Main;