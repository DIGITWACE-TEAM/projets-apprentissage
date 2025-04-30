import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
     

      <div className="footer-cta">
        <button className="get-started-btn">Get Started</button>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <h2>SNAE LAND</h2>
          <p>Your gateway to the extreme she's beauty<br/>
          culture is not becoming adventurous awaiting<br/>
          in the captivating landscapes of Iceland.</p>
        </div>

        <div className="footer-columns">
          <div className="footer-nav">
            <h3>Navigations</h3>
            <ul>
              <li>Home</li>
              <li>Destinations</li>
              <li>Travel Reckages</li>
              <li>Galaxy</li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Social</h3>
            <ul>
              <li>Instagram</li>
              <li>X</li>
              <li>YouTube</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>travel@snadland.io</li>
              <li>(704) 555-0107</li>
              <li>2186 Thornridge Co. Synosure<br/>Connecticut 5:56PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>© SNAE LAND 2024. All Rights Reserved</span>
        </div>
        <div className="footer-logo">
          <h2>SNAE LAND</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;