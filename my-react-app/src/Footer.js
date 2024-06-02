import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactsIcon from '@mui/icons-material/Contacts';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SupportIcon from '@mui/icons-material/Support';
import './Footer.css'; // Make sure to create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are a company dedicated to providing the best services for our customers.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav>
            <ul>
                <a href="#" className="nav-item"><HomeIcon /> Home</a>
                <a href="#" className="nav-item"><InfoIcon /> About</a>
                <a href="#" className="nav-item"><BuildIcon /> Services</a>
                <a href="#" className="nav-item">< ContactsIcon/> Contact</a>
                <a href="#" className="nav-item"><RssFeedIcon /> Blog</a>
                <a href="#" className="nav-item"><SupportIcon /> Support</a>

          </ul>
          </nav>
          
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@munene.com</p>
          <p>Phone: +254702880704</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><span className="material-icons">facebook</span>facebook</a>
            <a href="#"><span className="material-icons">instagram</span>instagram</a>
            <a href="#"><span className="material-icons">twitter</span>twitter</a>
            <a href="#"><span className="material-icons">linkedin</span>linkedin</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Josphat Munene. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;