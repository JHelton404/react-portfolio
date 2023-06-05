import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <h1>Interested in Learning more?</h1>
        <h2>Contact me at these places!</h2>
      </div>
      <div className='contact-links'>
        <h2><a href="https://github.com/JHelton404">My Github</a></h2>
        <h2><a href="https://linkedin.com">My LinkedIn</a></h2>
        <h2><a href="mailto:example@example.com">My Email</a></h2>
      </div>
      <div className='no-links'>
        <h3>^^^ Links (besides github) are currently unavailable, will direct you to websites themselves. ^^^
          <br></br>
          Links will be updated when corresponding profiles are complete!
        </h3>
      </div>
    </div>
  );
}

export default Contact;