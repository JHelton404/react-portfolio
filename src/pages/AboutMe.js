import React from 'react';
import '../styles/AboutMe.css'

function AboutMe() {
  return (
    <div className='about-container' >
      <div className='bio-image'>
        <div className='image-container' ></div>
        <div className='content-container'>
          <h1>Hi, my name is Jon</h1>
          <h1>I am a web developer</h1>
            <p>My greatest goal in life is to make the world a more beautiful place for everyone in it. I've been in tune with technology for much of my life. After years of work, I'm ready to start transferring my career to the web.</p>
            <p>Check out the other pages for information on how to contact me, more information on who I am, work that I've done during my cohort, and other work experience.</p>
        </div>
      </div>
      <div className='skill-link'>
        <div className='skills-container' >
          <h1>Skills:</h1>
            <h2>Javascript</h2>
            <h2>Node JS</h2>
            <h2>Mongo</h2>
            <h2>CSS</h2>
            <h2>HTML</h2>
            <h2>React</h2>
        </div>
        <div className='links-container' >
          <h1>My Past Projects</h1>
          <h1>Past Work Experience</h1>
          <h1>Contact Me</h1>
          </div>
        </div>
      </div>
  )
}

export default AboutMe