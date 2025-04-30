import { useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegClock,
} from 'react-icons/fa';
import { GiMountains, GiSeaCreature } from 'react-icons/gi';
import { reservations } from '../../utils/Reservations';
import './Reservations.css'

const Reservations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReservation = reservations[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : reservations.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < reservations.length - 1 ? prev + 1 : 0));
  };

  if (!currentReservation) {
    return <p>Chargement des réservations...</p>; 
  }

  return (
    <section className="reservation-wrapper">
      <header className="reservation-header">
        <div className="header-content">
          <p className="description-gallery">
            Secure spot for an unforgettable journey 
            through icelands's beauty and unique charms
            </p>
        </div>
        <div className="navigation-controls">
          <button onClick={handlePrevious} className="nav-button" aria-label="Réservation précédente">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="nav-button" aria-label="Réservation suivante">
            <FaChevronRight />
          </button>
        </div>
      </header>

      <div className="reservation-content">
        <div className="visual-container">
          <img
            src={currentReservation.image}
            alt={currentReservation.titre}
            className="main-visual"
          />
        </div>

        <div className="info-container">
          <h2>{currentReservation.titre}</h2>
          <p className="description">{currentReservation.description}</p>

          <div className="details-grid">
            <div className="detail-item">
              <FaCalendarAlt />
              <span>{currentReservation.duree}</span>
            </div>
            <div className="detail-item">
              <FaRegClock />
              <span>{currentReservation.periode}</span>
            </div>
            <div className="detail-item">
              {currentReservation.titre.includes('Montagne') ? (
                <GiMountains />
              ) : (
                <GiSeaCreature />
              )}
              <span>{currentReservation.difficulte}</span>
            </div>
          </div>

          <div className="location-section">
            <FaMapMarkerAlt />
            <p>{currentReservation.lieu}</p>
          </div>

          <div className="options-list">
            {Array.isArray(currentReservation.options) ? (
              currentReservation.options.map((option, index) => (
                <div key={index} className="option-item">
                  <input type="checkbox" checked readOnly />
                  <label>{option}</label>
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>

          <div className="pricing-section">
            <div className="price-display">
              <span className="from-label">From</span>
              <span className="price">{currentReservation.prix}€</span>
            </div>
            <button className="book-button">Booking Nom</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;