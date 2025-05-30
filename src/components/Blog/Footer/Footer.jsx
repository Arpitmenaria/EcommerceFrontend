import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>ShopApp</h3>
          <p>301 The Greenhouse London, E2 8DY UK</p>
          <p>support@domain.com</p>
          <p>820-885-3321</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          
        </div>

        <div className="footer-column">
          <h4>SUPPORT</h4>
          <ul>
            <li>Help</li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li>Feedback</li>
            <li>Unsubscribe</li>
            <li>Reservations</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>POLICIES</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Gift Card Conditions</li>
            <li>Shipping</li>
            <li>Return</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>STAY UP TO DATE</h4>
          <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis.</p>
          <div className="subscribe">
            <input type="text" placeholder="Enter your username" />
            <button>Get Started</button>
          </div>
          <p className="small-text">New UI kits or big discounts. Never spam.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 copyright by pxdraft</p>
        <div className="payment-icons">
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-paypal"></i>
          <i className="fab fa-cc-amex"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
