import React from 'react';
import './Galleries.css';

const Galleries = () => {
  return (
    <section className="galleries-section">
      <div className="galleries-container">
        <p className="description-gallery">
            A visual journey through the lens, 
            one snapshot at a time capturing the essence of 
            our travel adventures around the world
        </p>
      

      <div className="cards-container">
        <div className="gallery-card" style={{ backgroundImage: "url('fleuve1.jpg')"}}></div>
        <div className="gallery-card" style={{ backgroundImage: "url('fleuve2.jpg')"}}></div>
        <div className="gallery-card" style={{ backgroundImage: "url('Travel1.jpg')"}}></div>
      </div>

      <button className="explore-btn">Explore More
        <span className="arow">/</span>
      </button>
      </div>
    </section>
  )
}

export default Galleries
