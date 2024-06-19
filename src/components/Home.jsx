import React from 'react'
import NavBar from './NavBars/NavBar';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='page'>
            <NavBar/>
        <div className="home-container">
        <img src="/9385.jpg" alt="Kseniia" className="profile-image" />
        <div className="content">
          <h1>Kseniia Tokareva</h1>
          <h3>A Bit About Me</h3>
          <p>Highly motivated full-stack developer skilled in React, TypeScript, Python, and JavaScript, with a strong foundation in database management and Redux. Excited to begin a rewarding career journey in Israel, driven by a passion for innovation and delivering impactful solutions. Proactive in learning and dedicated to gaining industry experience while contributing to cutting-edge projects.</p>
          <a className='downloadCV' href="/Kseniia Tokarev CV .pdf" download="Kseniia Tokareva CV.pdf">My Resume</a>
        </div>
        </div>  
        <Footer/>
        </div>
    );
  };
  
  export default Home;
