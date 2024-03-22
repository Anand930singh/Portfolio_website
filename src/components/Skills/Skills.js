import React from 'react'
import './Skills.css'
import { FaRegFileCode } from "react-icons/fa";
import { PiBooksDuotone } from "react-icons/pi";
import { MdDeveloperMode } from "react-icons/md";
import { HiMiniServerStack } from "react-icons/hi2";

function Skills() {
    return (
        <div className='skillsContainer' id='skill'>
            <div className='skillHeading'><div>Skills</div></div>
            <div className='allSkills'>
                <div className='skillCard'>
                    <div className='skillIcons'><FaRegFileCode style={{color:'rgb(255, 120, 36)'}} size={40} /></div>
                    <div className='skillHeadDetail'>
                        <div className='skillHead'>Languages</div>
                        <div className='skillDetail'>C, C++, Rust, JavaScript, MySQL, HTML, CSS, JSON, Python</div>
                    </div>
                </div>
                <div className='skillCard'>
                    <div className='skillIcons'><MdDeveloperMode style={{color:'rgb(255, 120, 36)'}} size={40} /></div>
                    <div className='skillHeadDetail'>
                        <div className='skillHead'>Development</div>
                        <div className='skillDetail'>Docker, React, JSON, NodeJS, NestJS, ExpressJS, RestAPIs</div>
                    </div>
                </div>
                <div className='skillCard'>
                    <div className='skillIcons'><PiBooksDuotone style={{color:'rgb(255, 120, 36)'}} size={40} /></div>
                    <div className='skillHeadDetail'>
                        <div className='skillHead'>Relevant Courses</div>
                        <div className='skillDetail'>Data Structure, Software Engineering, Object oriented Programming, Computer Networks, Database Management System, Blockchain, System Design, Operating System</div>
                    </div>
                </div>
                <div className='skillCard'>
                    <div className='skillIcons'><HiMiniServerStack style={{color:'rgb(255, 120, 36)'}} size={40} /></div>
                    <div className='skillHeadDetail'>
                        <div className='skillHead'>Developer Tools</div>
                        <div className='skillDetail'>Git, Netlify, VS Code, Postman, Render, Vercel</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills