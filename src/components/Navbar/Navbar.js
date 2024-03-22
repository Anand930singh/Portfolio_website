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
            <div class="nav">
                <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                    <div class="nav-title">
                        A<span className='singh'>S</span>
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        {!showNav?(<FaBars size={30} onClick={toggleNav}/>):(<RxCross2 size={30} onClick={toggleNav}/>)}
                    </label>
                </div>

                <div class="nav-links">
                    <a href="#about">About</a>
                    <a href="#edu">Education</a>
                    <a href="#proj" >Project</a>
                    <a href="#exp">Experience</a>
                    <a href="#skill">Skill</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
