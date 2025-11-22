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
import Statistics from '../components/Statistics/Statistics';
import LeetCode from '../components/LeetCode/LeetCode';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"


function LandingPage() {
  const [activeSection, setActiveSection] = useState('');
  const aboutRef = useRef();
  const educationRef = useRef();
  const experienceRef = useRef();
  const statisticsRef = useRef();
  const leetcodeRef = useRef();
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

    // Store refs in variables to avoid cleanup warnings
    const aboutElement = aboutRef.current;
    const educationElement = educationRef.current;
    const experienceElement = experienceRef.current;
    const statisticsElement = statisticsRef.current;
    const leetcodeElement = leetcodeRef.current;
    const projectsElement = projectsRef.current;
    const skillsElement = skillsRef.current;

    if (aboutElement) {
      observer.observe(aboutElement);
    }
    if (educationElement) {
      observer.observe(educationElement);
    }
    if (experienceElement) {
      observer.observe(experienceElement);
    }
    if (statisticsElement) {
      observer.observe(statisticsElement);
    }
    if (leetcodeElement) {
      observer.observe(leetcodeElement);
    }
    if (projectsElement) {
      observer.observe(projectsElement);
    }
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
      if (educationElement) {
        observer.unobserve(educationElement);
      }
      if (experienceElement) {
        observer.unobserve(experienceElement);
      }
      if (statisticsElement) {
        observer.unobserve(statisticsElement);
      }
      if (leetcodeElement) {
        observer.unobserve(leetcodeElement);
      }
      if (projectsElement) {
        observer.unobserve(projectsElement);
      }
      if (skillsElement) {
        observer.unobserve(skillsElement);
      }
    };
  }, []);

  return (
    <div className='landingPageContain'>
      <div className='sideLine'>
        <div className={`defDiv ${activeSection === 'About' ? 'active' : ''}`}></div>
        <div className={`defDiv ${activeSection === 'Education' ? 'active' : ''}`}></div>
        <div className={`defDiv ${activeSection === 'Experience' ? 'active' : ''}`}></div>
        <div className={`defDiv ${activeSection === 'Statistics' ? 'active' : ''}`}></div>
        <div className={`defDiv ${activeSection === 'LeetCode' ? 'active' : ''}`}></div>
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
      <div id='Statistics' ref={statisticsRef}><Statistics /></div>
      <div id='LeetCode' ref={leetcodeRef}><LeetCode /></div>
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
