import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeaderWidget from './components/Header.jsx';
import FooterWidget from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import Biography from './pages/Biography.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Photos from './pages/Photos.jsx';
import ContactForm from './pages/ContactForm.jsx';

const App = () => (
  <BrowserRouter basename="/CS601_FinalProject_Kim">
    <HeaderWidget />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/biography" element={<Biography />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
    <FooterWidget />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
