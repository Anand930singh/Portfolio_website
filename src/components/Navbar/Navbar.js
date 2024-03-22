import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


function Navbar() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div className='navbar'>
            <div className='leftNav'>Anand Singh</div>
            <div>
                <div className={`rightNav ${showNav ? 'responsive' : ''}`}>
                    <div onClick={toggleNav} className='icon'>
                        {showNav ? <RxCross2 size={30} /> : <FaBars size={30} />}
                    </div>
                    <a href="#about"><span>About</span></a>
                    <a href="#edu"><span>Education</span></a>
                    <a href="#proj"><span>Projects</span></a>
                    <a href="#exp"><span>Experience</span></a>
                    <a href="#skill"><span>Skills</span></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
