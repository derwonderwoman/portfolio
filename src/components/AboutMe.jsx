import React, { useState } from 'react';
import Footer from './Footer';
import NavBarAbout from './NavBars/NavBarAbout';
import '../Carousel.css';

const AboutMe = () => {


  return (
    <>
      <NavBarAbout />
      <div className="improvedContent">
        <h1 className='SkillTitle'>About Me</h1>
        <p>Originally from Russia, I moved to Israel five years ago for new challenges and opportunities. My academic journey began with a focus on Russian Area Studies, culminating in a Bachelor's degree from RANEPA in Moscow. However, my career path took a significant turn when I discovered my passion for programming.
          I am eager to leverage my skills and passion for innovation in Israel's dynamic tech industry.</p>
        <h1 className='SkillTitle'>Skills</h1>
        <div className="skills-container">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
          
        </div>
        <h1 className='SkillTitle'>Education</h1>
        <p>Now a dedicated Full Stack Developer specializing in Python and JavaScript, with a solid foundation in C programming, I underwent intensive training at Infinity Labs, TLV Coding Bootcamp in Ramat-Gan, Israel. My focus shifted from embedded programming to web development, leading me to excel at the Developers Institute, TLV Coding Bootcamp. Among my achievements is winning a Hackathon, where I showcased my creativity and technical proficiency in Python, JavaScript, and other key technologies crucial for Full Stack Web Development. An exemplary project from my portfolio is "TheLocals - local service tracker," a robust web application built with React.js, TypeScript, and Node.js with Express, featuring JWT authentication for enhanced security.</p>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;

