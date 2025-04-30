import React from 'react';
import './Destinations.css';
import { destinations } from '../../Utils/Destinations';

const Destinations = () => {
  return (
    <section className="dest-section">
      <div className="dest-content">
        <div className="columns-container">
            <div className="left-column">
                <p className="description-gallery">
                    A unique blend of aventure, culture, and natural wonders
                </p>
            </div>

            <div className="right-column">
                <p className="small-text">
                    Discover a fusion of adventure, culture, and scenic 
                    beauty across our diverse destinations, 
                    offering unforgettable experiences at every turn.
                </p>
            </div>
        </div>

        <div className="cards-grid">
            {destinations.map((destination) => (
                <div
                key={destination.id}
                className={`card ${destination.type === 'large' ? 'card-large' : 'card-small'}`}>
                  <div className="image-container">
                    <img
                        src={destination.image}
                        alt={destination.title}
                        className="card-image"
                    />
                  </div>
                  <div className="cardcontent">
                    <h3>{destination.title}</h3>
                    <p>{destination.description}</p>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
