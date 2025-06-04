import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id='hero' className="hero">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <div className="hero-particles">
        <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ left: '20%', animationDelay: '2s' }}></div>
        <div className="particle" style={{ left: '30%', animationDelay: '4s' }}></div>
        <div className="particle" style={{ left: '40%', animationDelay: '6s' }}></div>
        <div className="particle" style={{ left: '50%', animationDelay: '8s' }}></div>
        <div className="particle" style={{ left: '60%', animationDelay: '10s' }}></div>
        <div className="particle" style={{ left: '70%', animationDelay: '12s' }}></div>
        <div className="particle" style={{ left: '80%', animationDelay: '14s' }}></div>
        <div className="particle" style={{ left: '90%', animationDelay: '16s' }}></div>
      </div>

      <div className="hero-content">
        <h1>DISCOVER</h1>
        <h1>EVENTS</h1>
        <h1>NEAR  YOU</h1>
        <p>Find the best local events happening in your area!!!</p>
      </div>
    </section>
  );
};

export default Hero;
