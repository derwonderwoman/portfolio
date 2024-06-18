import React from 'react'
import Footer from './Footer';
import NavBarAbout from './NavBars/NavBarAbout';

const AboutMe = () => {
    return (
        <>
        <NavBarAbout/>
        <div className="home-container">
        <img src="/5K0A1417.jpg" alt="Kseniia" className="about-image" />
        <div className="content">
        <h1>About Me</h1>
            <p>Originally from Russia, I moved to Israel five years ago for new challenges and opportunities. My academic journey began with a focus on Russian Area Studies, culminating in a Bachelor's degree from RANEPA in Moscow. However, my career path took a significant turn when I discovered my passion for programming.</p>
            <p>Now a dedicated Full Stack Developer specializing in Python and JavaScript, with a solid foundation in C programming, I underwent intensive training at Infinity Labs, TLV Coding Bootcamp in Ramat-Gan, Israel. My focus shifted from embedded programming to web development, leading me to excel at the Developers Institute, TLV Coding Bootcamp.</p>
            <p>Among my achievements is winning a Hackathon, where I showcased my creativity and technical proficiency in Python, JavaScript, and other key technologies crucial for Full Stack Web Development. An exemplary project from my portfolio is "TheLocals - local service tracker," a robust web application built with React.js, TypeScript, and Node.js with Express, featuring JWT authentication for enhanced security.</p>
            <p>Prior to software development, I honed my organizational skills and attention to detail as an Executive Assistant at Human Stem Cells Institute and Decathlon in Moscow. Fluent in Russian, English, and Hebrew, with basic knowledge of French, I thrive in multicultural environments and excel in diverse teams.</p>
            <p>I am eager to leverage my skills and passion for innovation in Israel's dynamic tech industry.</p>
        </div>
        </div>
        <Footer/>
        </>
    );
  };
  
  export default AboutMe;