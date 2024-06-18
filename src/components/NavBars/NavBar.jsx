import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <div className='pair'>
        <Link to="/">
        <h2><span class="circle"></span> Kseniia Tokareva</h2>
        </Link>
        <p>Full-stack developer</p>
        </div>
        <div className='links'>
        <div>
            <Link to="/about">
                <button>About Me</button>
            </Link>
        </div>
        <div>
            <Link to="/cv">
                <button>My Resume</button>
            </Link>
        </div>
        <div>
            <Link to="/projects">
                <button>My Projects</button>
            </Link>
        </div>
        <div>
            <Link to="/contacts">
                <button>Contact me</button>
            </Link>
        </div>
        </div>
        </>
    );
  };
  
  export default NavBar;
