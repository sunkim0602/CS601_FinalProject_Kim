import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div>
      <h1 className="page-title">My Projects</h1>
      <p>Click the image to download the project:</p>

      <div className="project-grid">
        <div className="project-card">
          <h2>Mailing Form</h2>
          <a href={`${import.meta.env.BASE_URL}downloads/CS601_HW1_Kim.zip`} download>
            <img
              src={`${import.meta.env.BASE_URL}images/mailing_form.png`}
              alt="Mailing Form thumbnail"
              className="project-image"
            />
          </a>
        </div>

        <div className="project-card">
          <h2>Food Matching Game</h2>
          <a href={`${import.meta.env.BASE_URL}downloads/CS601_HW2_Kim.zip`} download>
            <img
              src={`${import.meta.env.BASE_URL}images/food_matching_game.png`}
              alt="Food Matching Game thumbnail"
              className="project-image"
            />
          </a>
        </div>

        <div className="project-card">
          <h2>SK Travel Guide</h2>
          <a href={`${import.meta.env.BASE_URL}downloads/CS601_HW3_Kim.zip`} download>
            <img
              src={`${import.meta.env.BASE_URL}images/SK_travel_guide.png`}
              alt="SK Travel Guide thumbnail"
              className="project-image"
            />
          </a>
        </div>

        <div className="project-card">
          <h2>Country Data Manager</h2>
          <a href={`${import.meta.env.BASE_URL}downloads/CS601_HW4_Kim.zip`} download>
            <img
              src={`${import.meta.env.BASE_URL}images/country_data_manager.png`}
              alt="Country Data Manager thumbnail"
              className="project-image"
            />
          </a>
        </div>

        <div className="project-card">
          <h2>SK Groceries & Supermarket</h2>
          <a href={`${import.meta.env.BASE_URL}downloads/CS601_HW5_Kim.zip`} download>
            <img
              src={`${import.meta.env.BASE_URL}images/SK_groceries_supermarket.png`}
              alt="Groceries Supermarket thumbnail"
              className="project-image"
            />
          </a>
        </div>

        <div className="project-card">
          <h2>SK Groceries & Supermarket 2.0</h2>
          <a href={`${import.meta.env.BASE_URL}downloads/CS601_HW6_Kim.zip`} download>
            <img
              src={`${import.meta.env.BASE_URL}images/2.0SK_groceries_supermarket.png`}
              alt="Mailing Form thumbnail"
              className="project-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;