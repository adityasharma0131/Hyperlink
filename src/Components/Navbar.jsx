import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HashLink } from "react-router-hash-link"; // ✅ Import HashLink
import HyperLinkLogo from "../assets/hyperlinklogo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const menuItems = [
    { name: "Home", id: "Home" },
    { name: "Products", id: "Products" },
    { name: "Background", id: "Background" },
    { name: "About Us", id: "About" },
    { name: "Contact", id: "Contact" },
  ];

  const logoStyle = {
    transition: "transform 0.3s ease",
    transform: scrolled ? "scale(0.9)" : "scale(1)",
    cursor: "pointer",
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Left Section */}
      <div className="navbar-left">
        <HashLink smooth to="#home">
          <img
            src={HyperLinkLogo}
            alt="Hyperlink Logo"
            className="logo"
            style={logoStyle}
          />
        </HashLink>

        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <FiX size={24} className="menu-icon" />
          ) : (
            <FiMenu size={24} className="menu-icon" />
          )}
        </button>
      </div>

      {/* Center Navigation */}
      <div className={`navbar-center ${mobileMenuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          {menuItems.map((item, index) => (
            <li key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <HashLink
                smooth
                to={`#${item.id}`}
                className="nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      {/* <div className="navbar-right desktop-only">
        <HashLink
          smooth
          to="#contact"
          className="sign-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sign-in-text">Contact</span>
          <span className="sign-in-hover"></span>
        </HashLink>
      </div> */}
    </nav>
  );
};

export default Navbar;
