import React from 'react';
import './About.css';
import MyImg from '../../asets/myImg.png'
import Typewriter from 'typewriter-effect';

function About() {

  return (
    <div className='aboutContainer' id='about'>
      <div className='content'>
        <span className='heyThere'>Hey there!</span><br />
        <span className='nameLine'>I'm <span className='name'><Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Anand Kumar Singh").pauseFor(1000).start();
          }}
        /></span></span><br />
        <span className='passion'> an Associate Software Developer at 314e Corporation, specializing in healthcare data integration and transformation. I hold a B.Tech degree in Computer Science from the Indian Institute of Information Technology, Dharwad. Passionate about technology and driven by innovation, I'm dedicated to building scalable solutions that make a meaningful impact.</span>
        <div>
        <a href="https://drive.google.com/uc?export=download&id=1cenGTmaSojf9zUfq-0cmrdHdDo3gKyNn" download>
          <div className="buttonBox" data-tooltip="Size: 157 KB">
            <div className="button-wrapper">
              <div className="text">Download CV</div>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
              </span>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div className='profileImg'>
        <div className='bgBorder'></div>
        <img src={MyImg} alt="Tilting Grid" />
      </div>
    </div>
  );
}

export default About;
