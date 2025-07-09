import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from react-icons
import HyperLinkLogo from "../assets/hyperlinklogo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <img
          src={HyperLinkLogo}
          alt="Hyperlink Logo"
          className="logo"
          style={{
            transition: "transform 0.3s ease",
            transform: scrolled ? "scale(0.9)" : "scale(1)",
          }}
        />
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FiX size={24} className="menu-icon" />
          ) : (
            <FiMenu size={24} className="menu-icon" />
          )}
        </button>
      </div>
      <div className={`navbar-center ${mobileMenuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          {["Home", "About App", "Blogs", "Pricing", "Contact"].map(
            (item, index) => {
              const path =
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`;
              return (
                <li key={item} style={{ animationDelay: `${index * 0.1}s` }}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "nav-item active" : "nav-item"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className="navbar-right">
        <div className="sign-in">
          <span className="sign-in-text">Sign In</span>
          <span className="sign-in-hover"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
