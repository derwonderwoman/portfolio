import React from 'react';

const Footer = () => {
    return (
        <>
        <footer className="footer">
          <h3>Email: tokarevakseniia@gmail.com</h3>
          <h3>Phone: +972 50-682-68-17</h3>
          <a className='logo' href="https://www.linkedin.com/in/kseniia-tokareva-23a618189/" target="_blank" rel="linkedIn"> 
          <div><img className='inner-img' width="30" height="30" src='../../public/linkedin (2).svg'/></div> 
          <p>LinkedIn</p></a>
          <a className='logo' href="https://github.com/derwonderwoman" target="_blank" rel="GitHub">
            <div><img className='inner-img' width="30" height="30" src='../../public/github.svg'/></div> 
            <p>GitHub</p></a>
      </footer>
        </>
    );
  };
  
  export default Footer;