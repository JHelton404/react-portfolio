import React from 'react';
import '../styles/Portfolio.css';
import passGenImg from '../assets/password-generator.png'
import tindogImg from '../assets/tindog-app.png'
import drinkImg from '../assets/find-my-drink.jpg'
import scheduleImg from '../assets/schedule-keeper.png'

function Portfolio() {
  return (
    <div className='portfolio-container'>
      <h1>Portfolio</h1>
      <div className='image-links'>
        <a href='https://jhelton404.github.io/password-generator/'>
          <img src={passGenImg} alt='Project 1' />
        </a>
        <a href='https://github.com/X-is-For-Alex/find-my-drink'>
          <img src={drinkImg} alt='Project 2' />
        </a>
        <a href='https://tindog.herokuapp.com/'>
          <img src={tindogImg} alt='Project 3' />
        </a>
        <a href='https://jhelton404.github.io/daily-schedule-keeper/'>
          <img src={scheduleImg} alt='Project 4' />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;