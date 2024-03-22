import React from 'react';
import './About.css';
// import Grid from '../../asets/Grid.png';
import MyImg from '../../asets/myImg.png'
import Typewriter from 'typewriter-effect';

function About() {
  // const [tilt, setTilt] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const tiltAmount = Math.min(scrollY / 10, 90); // Limit tilt to 90 degrees
  //     setTilt(tiltAmount);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []); 

  return (
    <div className='aboutContainer' id='about'>
      <div className='content'>
          <span className='heyThere'>Hey there!</span><br/>
          <span className='nameLine'>I'm <span className='name'><Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Anand Kumar Singh").pauseFor(1000).start();
            }}
          /></span></span><br/>
          <span className='passion'> a dynamic and ambitious third-year B.Tech student majoring in Computer Science at the esteemed Indian Institute of Information Technology, Dharwad. Passionate about technology and driven by a desire to innovate, I'm on a mission to craft cutting-edge solutions that leave a lasting impact on the world.</span>
      </div>
      <div className='profileImg'>
        <div className='bgBorder'></div>
        <img src={MyImg} alt="Tilting Grid" />
      </div>
    </div>
  );
}

export default About;
