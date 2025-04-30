import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>SNAELAND</h1>
        </div>
        
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#destinations" onClick={toggleMenu}>Destinations</a></li>
          <li><a href="#tours" onClick={toggleMenu}>Gallery</a></li>
          <li><a href="#about" onClick={toggleMenu}>TravelPackages</a></li>
        </ul>

        <div className={`langage ${isMenuOpen ? 'active' : ''}`}>
          <select name="language-select">
            <option value="English">EN</option>
            <option value="French">FR</option>
          </select>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;