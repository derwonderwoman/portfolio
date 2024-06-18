import React from 'react'
import Footer from './Footer';
import NavBarForProj from './NavBars/NavBarForProj';

const Projects = () => {
    return (
        <>
        <NavBarForProj/>
        <h1 className='title'>My projects</h1>
        <div className='project-container'>
            <a href="https://thelocals-fe.onrender.com/" className="Bigcircle">
                <div>
                theLocals
                <p>Web Service for Connecting Clients with Local Service Providers</p>
                </div>
                </a>
                <a href="" className="Bigcircle">
                <div>
                MordecaiHatesHamam
                <p>A Telegram bot dedicated to finding and combating antisemitic comments on YouTube.</p>
                </div>
                </a>
                <a href="" className="Bigcircle">
                <div>
                MoneyManager
                <p>An intuitive web service designed to track and manage expenses efficiently</p>
                </div>
                </a>
        </div>  
        <Footer/>
        </>
    );
  };
  
  export default Projects;