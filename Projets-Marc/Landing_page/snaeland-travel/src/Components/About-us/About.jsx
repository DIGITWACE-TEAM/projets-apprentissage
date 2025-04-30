import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
      <section>
        <div className="about-content">
          <p className="about-text">
            It all began with a single journey a trip to the land af fire and ice that sparked a profound love for iceland. Enchanted by its rugged beauty and rich culture, we knew we had found something truly special.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-desc">Customer Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">72+</div>
              <div className="stat-desc">Popular Destination</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">250+</div>
              <div className="stat-desc">Experienced Guide</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
