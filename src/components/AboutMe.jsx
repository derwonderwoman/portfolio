import React from 'react';
import Footer from './Footer';
import NavBarAbout from './NavBars/NavBarAbout';
import '../Carousel.css';

const AboutMe = () => {


  return (
    <>
      <NavBarAbout />
      <div className="improvedContent">
        <div className="centered-button">
          <a className='downloadCVAbout' href="/Kseniia Tokarev CV .pdf" download="Kseniia Tokareva CV.pdf">My CV</a>
        </div>
        <h1 className='SkillTitle'>Small Facts About Me</h1>
        <div className="about-container">
          <div className="fact">I moved to Israel five years ago from Russia with my husband and son. </div>
          <div className="fact">I have a passion for languages. Fluent in Russian, English, Hebrew; basic French.</div>
          <div className="fact">I was honored to contribute my project to the Adir Antisemitic initiative.</div>
          <div className="fact">Leadership role in winning a <strong>Hackathon</strong> with innovative projects.</div>
          <div className="fact">Prior experience in organizational roles at international firms.</div>
          <div className="fact">Achieved success at TLV Coding Bootcamp in web development.</div>
        </div>
        <h1 className='SkillTitle'>Skills</h1>
        <div className="skills-container">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" /> 
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" /> 
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;

