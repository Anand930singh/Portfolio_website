import React, { useState } from 'react'
import './Experience.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

// Experience data in JSON format
const experienceData = [
    {
        id: 0,
        companyName: "314e Corporation @ Associate Software Engineer",
        timeDuration: "June 2025 - Present",
        location: "📍 Bengaluru, India",
        description: "Built FHIR 2 CCDA and FHIR 2 HL7 converters and integrated them with the backend system.",
        techStacks: ["Python", "PySpark", "Starrocks"],
        image: {
            src: "https://www.314e.com/images/314e%20Corporation%20Logo.png",
            height: "60"
        }
    },
    {
        id: 1,
        companyName: "Software Developer Intern @ ESTECO Software",
        timeDuration: "Jan 2025 - Mar 2025",
        location: "📍 Pune, India",
        description: "GitInsight is a full-stack web app that analyzes GitHub repositories in real time using GraphQL and REST APIs, with advanced search and interactive visualizations. Built with React.js and Java Spring Boot, it supports efficient, large-scale data processing through multithreading, caching, and token rotation.",
        techStacks: ["Spring Boot", "PostgresSQL", "Hibernate", "React"],
        image: {
            src: "https://www.esteco.com/assets/img/cfvgzy1Kx3-4262.svg",
            height: "60"
        }
    },
    {
        id: 2,
        companyName: "Software Developer Intern @ RIDE EVEE",
        timeDuration: "June 2024 - Sept 2024",
        location: "📍 Remote",
        description: "I am responsible for developing the frontend UI, backend API, and integrating both for the Ride EVEE website dashboard.",
        techStacks: ["ReactJs", "MongoDB", "NodeJS", "ExpressJS"],
        image: {
            src: "https://www.f6s.com/content-resource/profiles/3316299_th1.jpg",
            height: null
        }
    },
    {
        id: 3,
        companyName: "Software Developer Intern @ Code Inbound LLP",
        timeDuration: "June 2023 - Dec 2023",
        location: "📍 Remote",
        description: "Creating, fine-tuning, troubleshooting, and validating server-side endpoints for a Network Monitoring System using Nest.JS.",
        techStacks: ["NestJs", "PostgresSQL", "TypeORM", "Swagger"],
        image: {
            src: "https://www.codeinbound.com/assets/images/main-logo/logo.png",
            height: "60"
        }
    },
    {
        id: 4,
        companyName: "Cricket Code Champions Hack",
        timeDuration: "Nov",
        location: "📍 Online",
        description: "During the hackathon, our team created a platform capable of predicting a player's runs by leveraging historical performance data alongside current weather conditions, bowler statistics, and ground factors.",
        techStacks: ["ReactJS", "Beautiful Soup", "TenserFlow"],
        image: null
    }
];

function Experience() {
    const [active] = useState(true);
    const [ind, setind] = useState(null);
    const handleExp = (ind) => {
        setind(ind)
        // setActive(!active);
    }
    return (
        <div className='experienceContainer' id='exp'>
            <div className='expHeading'><div>PROFESSIONAL EXPERIENCE</div></div>
            {experienceData.map((exp) => (
                <div key={exp.id} className='expCard'>
                    <div className='expHeadingCard'>
                        <div className='companyName'>{exp.companyName}</div>
                        <div className='timeDuration'>{exp.timeDuration}</div>
                        <div className='openCloseIcon'>
                            {active && ind === exp.id ? (
                                <CiCircleMinus onClick={() => handleExp(null)} size={35} style={{ background: 'transparent' }} />
                            ) : (
                                <CiCirclePlus onClick={() => handleExp(exp.id)} size={35} style={{ background: 'transparent' }} />
                            )}
                        </div>
                    </div>
                    {active && ind === exp.id && (
                        <div className='expDetailCard'>
                            <div className='expDetailLeft'>
                                <div className='expLocation'>{exp.location}</div>
                                <div className='expDetail'>{exp.description}</div>
                                <div className='techStacks'>
                                    {exp.techStacks.map((tech, index) => (
                                        <span key={index}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                            {exp.image && (
                                <div className='expDetailRight'>
                                    <img 
                                        src={exp.image.src} 
                                        alt='Not available' 
                                        height={exp.image.height || undefined}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Experience
