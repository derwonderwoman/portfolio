import React from 'react';
import "../ContactStyle.css"
import NavBarForContacts from './NavBars/NavBarForContacts';
import Footer from './Footer';

const ContactMe = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f9e01663-48a6-425b-aaed-fc5c681a1741");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent");
      event.target.reset();
    } else {
      console.log("Sorry, something went wrong", data);
      setResult(data.message);
    }
  };
    return (
      <>
        <NavBarForContacts />
        <div className="contact-container">
          <img src="/9384.jpg" alt="Kseniia" className="contact-image" />
          <div className="contact-form">
            <h2>I wish to work with you! Contact Me</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
            <span>{result}</span>
          </div>
        </div>
        <Footer/>
      </>
    );
  };
  
  export default ContactMe;