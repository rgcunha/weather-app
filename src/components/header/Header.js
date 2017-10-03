import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <div className="header-logo">
      <a href="https://github.com/rgcunha" target="_blank" rel="noreferrer noopener">
        <img src="/img/github.svg" alt="GitHub" />
      </a>
    </div>
    <div className="header-nav">
      <nav>
        <ul>
          <li><Link to="/">My Locations</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
