import React from 'react';
import './Photos.css';

const Photos = () => {
  return (
    <div>
      <h1 className="gallery-title">My Photo Gallery</h1>
      <div className="gallery">
        <img src={`${import.meta.env.BASE_URL}images/IMG_001.jpg`} alt="Photo1" />
        <img src={`${import.meta.env.BASE_URL}images/IMG_002.jpeg`} alt="Photo2" />
        <img src={`${import.meta.env.BASE_URL}images/IMG_003.jpeg`} alt="Photo3" />
        <img src={`${import.meta.env.BASE_URL}images/IMG_004.jpg`} alt="Photo4" />
        <img src={`${import.meta.env.BASE_URL}images/IMG_005.jpg`} alt="Photo5" />
        <img src={`${import.meta.env.BASE_URL}images/IMG_006.jpg`} alt="Photo6" />
        <img src={`${import.meta.env.BASE_URL}images/IMG_007.JPG`} alt="Photo7" />
        <img src={`${import.meta.env.BASE_URL}images/IMG_008.jpg`} alt="Photo8" />
        <img src={`${import.meta.env.BASE_URL}images/IMG_009.jpg`} alt="Photo9" />
        <img src={`${import.meta.env.BASE_URL}images/IMG_010.jpg`}alt="Photo10" />
        <img src={`${import.meta.env.BASE_URL}images/IMG_011.jpg`} alt="Photo11" />
        <img src={`${import.meta.env.BASE_URL}images/IMG_012.jpg`} alt="Photo12" />
      </div>
    </div>
  );
};

export default Photos;