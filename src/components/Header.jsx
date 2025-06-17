import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const HeaderWidget = () => (
  <div className="header-row">
    <div class="header-title" data-title="SK Portfolio">SK Portfolio</div>
    
    <div className="dropdown">
      <button className="menu-toggle" aria-label="Toggle Menu">☰</button>
      <div className="dropdown-content">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/biography">Hobbies</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/photos">Photo Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>

    <nav className="header-section">
      <Link to="/" className="menu-item">Home</Link>
      <Link to="/biography" className="menu-item">About Me</Link>
      <Link to="/projects" className="menu-item">Projects</Link>
      <Link to="/resume" className="menu-item">Resume</Link>
      <Link to="/photos" className="menu-item">Photo Gallery</Link>
      <Link to="/contact" className="menu-item">Connect</Link>
    </nav>
  </div>
);

export default HeaderWidget;