import React, { useEffect, useState } from 'react';
import './HomePage.css';
import '../components/Header.css';
import '../components/Footer.css';
import portraitImage from '/images/portrait.jpg';

const HomePage = () => {
  const [location, setLocation] = useState(null);
  
  //obtain geolocation API
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        setLocation({
            city: data.city,
            country: data.country_name,
            lat: data.latitude,
            lon: data.longitude,
        });
      })
      .catch(err => console.error ("Failed to get location:", err));
  }, []);

  return (
    <div>
      <div className="intro-container">
        <img
          src={portraitImage}
          alt="portrait"
          className="portrait-image"
        />
        <div className="intro-message">
          <h1 className="intro-name">Sun Kim</h1>
          <p className="intro-description">Collaborative | Driven | Problem-Solver</p>
          <p>
            Hi, I am a student at Boston University pursuing a Master's degree in Software Development. I am passionate and curious to learn about new
            technology and the value it can bring to the businesses and organizations. I am eager and enthusiastic to take on new opportunities and challenges as they rise.
          </p>
          {location && (
            <p className = "visitor-location">
                📫 Greetings from Seattle to 
                <span className="geo-location"> 📍{location.city}, {location.country}</span> - thanks for visiting!
            </p>
          )}
        </div>
      </div>

      <div className="social-section">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="Twitter"
            className="social-icon"
          />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="social-icon"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            className="social-icon"
          />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            className="social-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default HomePage;