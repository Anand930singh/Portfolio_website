import React, { useState, useEffect } from 'react';
import './Timeline.css';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

// Combined timeline data from Experience and Education
const timelineData = [
    {
        id: 1,
        type: 'work',
        title: 'Associate Software Engineer',
        company: '314e Corporation',
        location: 'Bengaluru, India',
        date: 'June 2025 - Present',
        duration: 'Present',
        description: 'Built FHIR 2 CCDA and FHIR 2 HL7 converters and integrated them with the backend system.',
        techStacks: ['Python', 'PySpark', 'Starrocks'],
        icon: FaBriefcase,
        color: 'rgb(255, 120, 36)',
        isCurrent: true
    },
    {
        id: 2,
        type: 'work',
        title: 'Software Developer Intern',
        company: 'ESTECO Software',
        location: 'Pune, India',
        date: 'Jan 2025 - Mar 2025',
        duration: '3 months',
        description: 'GitInsight is a full-stack web app that analyzes GitHub repositories in real time using GraphQL and REST APIs, with advanced search and interactive visualizations.',
        techStacks: ['Spring Boot', 'PostgresSQL', 'Hibernate', 'React'],
        icon: FaBriefcase,
        color: 'rgb(255, 120, 36)',
        isCurrent: false
    },
    {
        id: 3,
        type: 'work',
        title: 'Software Developer Intern',
        company: 'RIDE EVEE',
        location: 'Remote',
        date: 'June 2024 - Sept 2024',
        duration: '4 months',
        description: 'I am responsible for developing the frontend UI, backend API, and integrating both for the Ride EVEE website dashboard.',
        techStacks: ['ReactJs', 'MongoDB', 'NodeJS', 'ExpressJS'],
        icon: FaBriefcase,
        color: 'rgb(255, 120, 36)',
        isCurrent: false
    },
    {
        id: 4,
        type: 'work',
        title: 'Software Developer Intern',
        company: 'Code Inbound LLP',
        location: 'Remote',
        date: 'June 2023 - Dec 2023',
        duration: '7 months',
        description: 'Creating, fine-tuning, troubleshooting, and validating server-side endpoints for a Network Monitoring System using Nest.JS.',
        techStacks: ['NestJs', 'PostgresSQL', 'TypeORM', 'Swagger'],
        icon: FaBriefcase,
        color: 'rgb(255, 120, 36)',
        isCurrent: false
    },
    {
        id: 5,
        type: 'education',
        title: 'BACHELOR DEGREE',
        company: 'Indian Institute of Information Technology Dharwad',
        location: 'Dharwad, India',
        date: '2021 - Present',
        duration: 'Ongoing',
        description: 'I am currently pursuing a Bachelor\'s degree in Computer Science, where I have gained a robust understanding of core computer science concepts like algorithms, data structures, and computer architecture.',
        techStacks: [],
        icon: FaGraduationCap,
        color: '#68f20c',
        isCurrent: true
    },
    {
        id: 6,
        type: 'education',
        title: 'SECONDARY EDUCATION',
        company: 'Mukularanyam English School',
        location: 'India',
        date: '2018 - 2020',
        duration: '2 years',
        description: 'During my high school education, I developed a strong interest in subjects such as Math, Physics and Chemistry.',
        techStacks: [],
        icon: FaGraduationCap,
        color: '#68f20c',
        isCurrent: false
    }
];

function Timeline() {
    const [visibleItems, setVisibleItems] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);

    useEffect(() => {
        timelineData.forEach((item, index) => {
            setTimeout(() => {
                setVisibleItems(prev => [...prev, item.id]);
            }, index * 200);
        });
    }, []);

    const toggleExpand = (id) => {
        setExpandedItems(prev => 
            prev.includes(id) 
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        );
    };

    return (
        <div className='timelineContainer' id='timeline'>
            <div className='timelineHeading'><div>Timeline</div></div>
            <div className='timelineWrapper'>
                <div className='timelineLine'>
                    <div className='timelineLineGlow'></div>
                </div>
                {timelineData.map((item, index) => {
                    const IconComponent = item.icon;
                    const isVisible = visibleItems.includes(item.id);
                    const isEven = index % 2 === 0;
                    const isExpanded = expandedItems.includes(item.id);

                    return (
                        <div 
                            key={item.id} 
                            className={`timelineItem ${isEven ? 'left' : 'right'} ${isVisible ? 'visible' : ''} ${item.type}`}
                        >
                            <div className='timelineContent'>
                                <div 
                                    className={`timelineIcon ${item.isCurrent ? 'current' : ''}`} 
                                    style={{ 
                                        backgroundColor: item.color + '20', 
                                        borderColor: item.color,
                                        boxShadow: `0 0 20px ${item.color}40`
                                    }}
                                >
                                    <IconComponent style={{ color: item.color }} size={25} />
                                    {item.isCurrent && <div className='pulseRing'></div>}
                                </div>
                                <div 
                                    className={`timelineCard ${isExpanded ? 'expanded' : ''}`}
                                    onClick={() => toggleExpand(item.id)}
                                >
                                    <div className='timelineCardHeader'>
                                        <div className='timelineDateBadge'>
                                            <FaCalendarAlt size={12} />
                                            <span>{item.date}</span>
                                        </div>
                                        {item.duration && (
                                            <div className='timelineDuration'>{item.duration}</div>
                                        )}
                                    </div>
                                    <div className='timelineTitle'>{item.title}</div>
                                    <div className='timelineCompany'>{item.company}</div>
                                    <div className='timelineLocation'>
                                        <FaMapMarkerAlt size={12} />
                                        <span>{item.location}</span>
                                    </div>
                                    <div className={`timelineDescription ${isExpanded ? 'show' : ''}`}>
                                        {item.description}
                                    </div>
                                    {item.techStacks.length > 0 && (
                                        <div className={`timelineTechStacks ${isExpanded ? 'show' : ''}`}>
                                            {item.techStacks.map((tech, techIndex) => (
                                                <span key={techIndex} className='techTag'>{tech}</span>
                                            ))}
                                        </div>
                                    )}
                                    <div className='expandIndicator'>
                                        {isExpanded ? 'Show Less' : 'Show More'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Timeline;

