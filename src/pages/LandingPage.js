import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './LandingPage.css';
import About from '../components/About/About';
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"


function LandingPage() {
  const [activeSection, setActiveSection] = useState('');
  const aboutRef = useRef();
  const educationRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.20
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (educationRef.current) {
      observer.observe(educationRef.current);
    }
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className='landingPageContain'>
      <div className='sideLine'>
        <div className={`defDiv ${activeSection === 'About' ? 'active' : ''}`}></div>
        <div className={`defDiv ${activeSection === 'Education' ? 'active' : ''}`}></div>
        <div className={`defDiv ${activeSection === 'Experience' ? 'active' : ''}`}></div>
        <div className={`defDiv ${activeSection === 'Projects' ? 'active' : ''}`}></div>
        <div className={`defDiv ${activeSection === 'Skills' ? 'active' : ''}`}></div>
      </div>
      <div className='socialMedia'>
        <div className='followMe'>Follow Me</div>
        <div><a href='https://github.com/Anand930singh'><FaGithub className='xyz' style={{ color: "white" }} size={25} /></a></div>
        <div><a href='https://www.linkedin.com/in/anand-kumar-singh-b46a3b229/'><FaLinkedin className='xyz' style={{ color: "white" }} size={25} /></a></div>
        <div><a href='https://twitter.com/AnandKu01361058'><RiTwitterXFill className='xyz' style={{ color: "white" }} size={25} /></a></div>
        <div><a href='mailto:anand2002ksingh@gmail.com'><BiLogoGmail className='xyz' style={{ color: "white" }} size={25} /></a></div>
      </div>
      <Navbar />
      <div id='About' ref={aboutRef}><About /></div>
      <div id='Education' ref={educationRef}><Education /></div>
      <div id='Experience' ref={experienceRef}><Experience /></div>
      <div className='githubContainer'>
        <div className='github'>
          <img src="https://stats.quine.sh/Anand930singh/github?theme=dark)](https://quine.sh?utm_source=widgets&utm_campaign=Anand930singh" />
          <img src="https://stats.quine.sh/Anand930singh/dependencies?theme=dark)](https://quine.sh?utm_source=widgets&utm_campaign=Anand930singh" />
        </div>
      </div>
      <div id='Projects' ref={projectsRef}><Projects /></div>
      <div id='Skills' ref={skillsRef}><Skills /></div>
      <div><Analytics style={{color:'white'}}/>
      <SpeedInsights/>
      </div>
      <div className='socialMediaMobile'>
        <div className='followMeMobile'>Follow Me</div>
        <div><a href='https://github.com/Anand930singh'><FaGithub className='xyz' style={{ color: "white" }} size={25} /></a></div>
        <div><a href='https://www.linkedin.com/in/anand-kumar-singh-b46a3b229/'><FaLinkedin className='xyz' style={{ color: "white" }} size={25} /></a></div>
        <div><a href='https://twitter.com/AnandKu01361058'><RiTwitterXFill className='xyz' style={{ color: "white" }} size={25} /></a></div>
        <div><a href='mailto:anand2002ksingh@gmail.com'><BiLogoGmail className='xyz' style={{ color: "white" }} size={25} /></a></div>
      </div>
    </div>
    
  );
}

export default LandingPage;
