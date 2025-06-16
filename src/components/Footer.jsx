import { useState } from 'react';
import './Footer.css'

const FooterWidget = () => (
  <div>
    <footer className="footer">
      <nav className="footer-nav">
        <header className="policy-menu">Privacy Policy</header>
        <header className="contact-menu">Contact</header>
        <header className="social-menu">Social</header>
      </nav>
      <div className="SK">
        <h4 data-title="SK">SK Portfolio</h4>
        <p>2025 SK. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default FooterWidget;