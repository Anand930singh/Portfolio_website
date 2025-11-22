import React, { useState, useEffect, useRef } from 'react'
import './Skills.css'
import { FaRegFileCode } from "react-icons/fa";
import { PiBooksDuotone } from "react-icons/pi";
import { MdDeveloperMode } from "react-icons/md";
import { HiMiniServerStack } from "react-icons/hi2";

function TypingText({ text, speed = 50 }) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const indexRef = useRef(0);

    useEffect(() => {
        if (indexRef.current < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.substring(0, indexRef.current + 1));
                indexRef.current += 1;
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            setIsTyping(false);
        }
    }, [displayedText, text, speed]);

    return (
        <span>
            {displayedText}
            {isTyping && <span className="typing-cursor">|</span>}
        </span>
    );
}

function Skills() {
    const skillsData = [
        {
            icon: FaRegFileCode,
            head: 'Languages',
            detail: 'C, C++, Rust, JavaScript, MySQL, HTML, CSS, JSON, Python'
        },
        {
            icon: MdDeveloperMode,
            head: 'Development',
            detail: 'Docker, React, JSON, NodeJS, NestJS, ExpressJS, RestAPIs'
        },
        {
            icon: PiBooksDuotone,
            head: 'Relevant Courses',
            detail: 'Data Structure, Software Engineering, Object oriented Programming, Computer Networks, Database Management System, Blockchain, System Design, Operating System'
        },
        {
            icon: HiMiniServerStack,
            head: 'Developer Tools',
            detail: 'Git, Netlify, VS Code, Postman, Render, Vercel'
        }
    ];

    const [visibleSkills, setVisibleSkills] = useState([]);

    useEffect(() => {
        // Show skills one by one with delay
        skillsData.forEach((_, index) => {
            setTimeout(() => {
                setVisibleSkills(prev => [...prev, index]);
            }, index * 300);
        });
    }, []);

    return (
        <div className='skillsContainer' id='skill'>
            <div className='skillHeading'><div>Skills</div></div>
            <div className='allSkills'>
                {skillsData.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                        <div 
                            key={index} 
                            className={`skillCard ${visibleSkills.includes(index) ? 'visible' : ''}`}
                        >
                            <div className='skillIcons'>
                                <IconComponent style={{color:'rgb(255, 120, 36)'}} size={40} />
                            </div>
                            <div className='skillHeadDetail'>
                                <div className='skillHead'>{skill.head}</div>
                                <div className='skillDetail'>
                                    {visibleSkills.includes(index) ? (
                                        <TypingText text={skill.detail} speed={30} />
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills