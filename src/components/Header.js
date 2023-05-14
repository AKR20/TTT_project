import React from 'react';
import './Header.css';
import logo from './logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="logo-container">
          <img src={logo} alt="PizzaLicious Logo" className="logo" />
          <h1 className="site-title">TTT</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/" href="#" className="nav-link">🏠</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;