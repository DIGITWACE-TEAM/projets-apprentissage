import React from 'react';
import { packagesData } from '../../Utils/PackagesData';
import './Packages.css';

const Packagecard = () => {
  return (
    <section className="packages-section">
      <div className="columns-container">
            <div className="left-column">
                <p className="description-gallery">
                    Choose our range of expertly crafted packages
                </p>
            </div>

            <div className="right-column">
                <p className="small-text">
                    Whether you're seeking awe-inspiring landscapes
                    thrilling outdoor adventures, or immersive cultural, 
                    experiences, Snaeland has the perfect itinerary for you.
                </p>
            </div>
        </div>
      <div className="packages-container">
        {packagesData.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <div 
              className="card-background" 
              style={{ backgroundImage: `url(${pkg.image})` }}
            ></div>
            
            <div className="card-content">
              <div className="price-tags">
                <button className="days-btn">{pkg.days}</button>
                <button className="price-btn">{pkg.price}</button>
              </div>
              <h3 className="card-title">{pkg.title}</h3>
              <p className="card-description">{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packagecard;