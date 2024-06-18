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
        <p>Originally from Russia, I moved to Israel five years ago seeking new challenges and opportunities. My academic background began with a focus on Area Studies of Russia, leading to a Bachelor's degree from RANEPA in Moscow. However, my professional journey took a decisive turn when I discovered my passion for programming and decided to pursue it wholeheartedly.</p>
        <p>I am now a passionate Full Stack Developer specializing in Python and JavaScript, backed by a solid foundation in C programming. My journey in programming began with intensive training at Infinity Labs, TLV Coding Bootcamp in Ramat-Gan, Israel. While the experience provided valuable fundamental knowledge, I realized that my true passion lies in web development rather than embedded programming.</p>
        <p>I enrolled in the intensive Developers Institute, TLV Coding Bootcamp in Ramat-Gan, Israel, where I excelled and achieved significant milestones. One of my proudest achievements was winning a Hackathon, where I showcased my creativity, technical proficiency, and teamwork. Despite the project's sensitive nature, this experience underscored my ability to innovate and deliver impactful solutions using Python, JavaScript, and various other technologies crucial for Full Stack Web Development.</p>
        <p>An exemplary project from my portfolio includes "TheLocals - local service tracker," a robust web application built with React.js and TypeScript for the frontend, and Node.js with Express for the backend. This project highlights my capability to create user-friendly interfaces and implement secure backend solutions, including JWT authentication for enhanced data protection.</p>
        <p>Before transitioning to software development, I gained valuable experience as an Executive Assistant at Human Stem Cells Institute and Decathlon in Moscow. These roles sharpened my organizational skills, attention to detail, and ability to manage diverse tasks effectively.</p>
        <p>Fluent in Russian, English, and Hebrew, with a basic understanding of French, I thrive in multicultural environments and am adept at collaborating with diverse teams. I am now eager to leverage my skills and passion for innovation to contribute to meaningful projects within Israel's dynamic tech industry.</p>
        </div>
        </div>
        <Footer/>
        </>
    );
  };
  
  export default AboutMe;