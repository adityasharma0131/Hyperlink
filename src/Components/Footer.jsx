import React from "react";
import HyperLinkLogo from "../assets/hyperlinklogo.png";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { HashLink } from "react-router-hash-link"; // ✅ Correct import

const Footer = () => {
  const navLinks = [
    { name: "Home", id: "Home" },
    { name: "Products", id: "Products" },
    { name: "Background", id: "Background" },
    { name: "About Us", id: "About" },
    { name: "Contact", id: "Contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-wave"></div>

      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="logo-container">
            <img
              src={HyperLinkLogo}
              alt="Hyperlink Logo"
              className="footer-logo"
            />
            <span className="tagline">Your Health, Our Priority</span>
          </div>

          <p className="brand-description">
            Hyperlink is your ultimate partner in health and wellness, offering
            doctors consultation, prescription, lab test, vaccination, diet
            tracking, sleep and physical activity monitoring.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <IoMdMail className="contact-icon" />
              <span>info@hyperlink.health</span>
            </div>
            {/* <div className="contact-item">
              <FiPhone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </div> */}
          </div>
        </div>

        {/* Links Sections */}
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="column-title">Quick Links</h4>
            <ul className="column-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <HashLink
                    smooth
                    to={`/#${link.id}`} // ✅ Correct usage
                    className="footer-link"
                  >
                    {link.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="column-title">Resources</h4>
            <ul className="column-links">
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="column-title">Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>

            {/* <div className="newsletter">
              <h5>Subscribe to our newsletter</h5>
              <div className="newsletter-input">
                <input type="email" placeholder="Your email address" />
                <button type="submit">
                  <IoMdMail />
                </button>
              </div>
            </div> */}

            {/* 
            <div className="app-badges">
              <button className="app-badge">
                <FaGooglePlay className="badge-icon" />
                <div>
                  <span>GET IT ON</span>
                  <span>Google Play</span>
                </div>
              </button>
              <button className="app-badge">
                <FaApple className="badge-icon" />
                <div>
                  <span>Download on the</span>
                  <span>App Store</span>
                </div>
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="container">
          <small>© 2025 Hyperlink Technologies. All rights reserved.</small>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
