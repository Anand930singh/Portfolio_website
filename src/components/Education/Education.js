import React from 'react'
import './Education.css'
import { IoSchoolOutline } from "react-icons/io5";

function Education() {
  return (
    <div className='educationContainer' id='edu'>
      <div className='eduHeading'><div >Education</div></div>
      <div className='eduCard'>
        <div className='lineIconEdu'>
          <div className='eduIcon'><IoSchoolOutline style={{ color: 'rgb(255, 120, 36)' }} size={70} /></div>
          <div className='eduLine'></div>
        </div>
        <div className='eduContent'>
          <div className='durationEdu'>2021 - Present</div>
          <div className='headingEdu'>BACHELOR DEGREE - <span className='instituteName'>Indian Institute of Information Technology Dharwad</span></div>
          <div className='detailEdu'>
            I am currently pursuing a Bachelor's degree in Computer Science, where I have gained a robust understanding of core computer science concepts like algorithms, data structures, and computer architecture. Through hands-on experience and project work, I have honed my programming skills in languages such as C, C++, and Python. These academic endeavors have equipped me with the competencies needed to excel in the realm of computer science.</div>
        </div>
      </div>
      <div className='eduCard'>
        <div className='lineIconEdu'>
          <div className='eduIcon'><IoSchoolOutline style={{ color: 'rgb(255, 120, 36)' }} size={70} /></div>
          <div className='eduLine'></div>
        </div>
        <div className='eduContent'>
          <div className='durationEdu'>2018 - 2020</div>
          <div className='headingEdu'>SECONDARY EDUCATION - <span className='instituteName'>Mukularanyam English School</span></div>
          <div className='detailEdu'>During my high school education, I developed a strong interest in subjects such as Math, Physics and Chemistry. I also enjoyed participating in sports and other physical activities. My high school education provided me with a well-rounded foundation and helped me discover my passions and interests.</div>
        </div>
      </div>
    </div>
  )
}

export default Education