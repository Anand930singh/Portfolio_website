import React, { useState } from 'react'
import './Experience.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function Experience() {
    const [active, setActive] = useState(true);
    const [ind,setind]=useState(null);
    const handleExp=(ind)=>{
        setind(ind)
        // setActive(!active);
    }
    return (
        <div className='experienceContainer' id='exp'>
            <div className='expHeading'><div>PROFESSIONAL EXPERIENCE</div></div>
            <div className='expCard'>
                <div className='expHeadingCard'>
                    <div className='companyName'>Software Developer Intern @ Code Inbound LLP</div>
                    <div className='timeDuration'>June 2023 - Dec 2023</div>
                    <div className='openCloseIcon'>{active && ind===0?(<CiCircleMinus onClick={()=>handleExp(null)} size={35} style={{ background: 'transparent' }} />):(<CiCirclePlus onClick={()=>handleExp(0)} size={35} style={{ background: 'transparent' }} />)}
                    </div>
                </div>
                {active&& ind===0&& <div className='expDetailCard'>
                    <div className='expDetailLeft'>
                        <div className='expLocation'>📍 Remote</div>
                        <div className='expDetail'>
                            Creating, fine-tuning, troubleshooting, and validating server-side endpoints for a Network Monitoring System using Nest.JS.</div>
                        <div className='techStacks'>
                            <span>NestJs</span>
                            <span>PostgresSQL</span>
                            <span>TypeORM</span>
                            <span>Swagger</span>
                        </div>
                    </div>
                    <div className='expDetailRight'>
                        <img src='https://www.codeinbound.com/assets/images/main-logo/logo.png' alt='Not available' height="60"/>
                    </div>
                </div>}
            </div>
            <div className='expCard'>
                <div className='expHeadingCard'>
                    <div className='companyName'>Software Developer Intern @ RIDE EVEE</div>
                    <div className='timeDuration'>June 2024 - Sept 2024</div>
                    <div className='openCloseIcon'>{active && ind===1?(<CiCircleMinus onClick={()=>handleExp(null)} size={35} style={{ background: 'transparent' }} />):(<CiCirclePlus onClick={()=>handleExp(1)} size={35} style={{ background: 'transparent' }} />)}
                    </div>
                </div>
                {active&& ind===1&& <div className='expDetailCard'>
                    <div className='expDetailLeft'>
                        <div className='expLocation'>📍 Remote</div>
                        <div className='expDetail'>
                        I am responsible for developing the frontend UI, backend API, and integrating both for the Ride EVEE website dashboard.</div>
                        <div className='techStacks'>
                            <span>ReactJs</span>
                            <span>MongoDB</span>
                            <span>NodeJS</span>
                            <span>ExpressJS</span>
                        </div>
                    </div>
                    <div className='expDetailRight'>
                        <img src='https://www.f6s.com/content-resource/profiles/3316299_th1.jpg' alt='Not available' />
                    </div>
                </div>}
            </div>
            <div className='expCard'>
                <div className='expHeadingCard'>
                    <div className='companyName'>Cricket Code Champions Hack</div>
                    <div className='timeDuration'>Nov</div>
                    <div className='openCloseIcon'>{active&& ind===2?(<CiCircleMinus onClick={()=>handleExp(null)} size={35} style={{ background: 'transparent' }} />):(<CiCirclePlus onClick={()=>handleExp(2)} size={35} style={{ background: 'transparent' }} />)}
                    </div>
                </div>
                {active &&ind===2&& <div className='expDetailCard'>
                    <div className='expDetailLeft'>
                        <div className='expLocation'>📍 Online</div>
                        <div className='expDetail'>
                        During the hackathon, our team created a platform capable of predicting a player's runs by leveraging historical performance data alongside current weather conditions, bowler statistics, and ground factors.</div>
                        <div className='techStacks'>
                            <span>ReactJS</span>
                            <span>Beautiful Soup</span>
                            <span>TenserFlow</span>
                        </div>
                    </div>
                    {/* <div className='expDetailRight'>
                        <img src='https://www.freepnglogos.com/uploads/hacker-png/hacker-mid-pacific-ict-center-cyberfed-magnificent-seven-2.png' />
                    </div> */}
                </div>}
            </div>
        </div>
    )
}

export default Experience
