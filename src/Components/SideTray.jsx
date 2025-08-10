import React, { useEffect } from "react";
import HyperLink from "../assets/hyperlinklogo.png";
import { FiX } from "react-icons/fi";

const SideTray = ({ isOpen, onClose }) => {
  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      document.body.classList.add("no-scroll");
      html.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      html.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
      html.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div className={`side-tray ${isOpen ? "open" : ""}`}>
      <div className="side-tray-overlay" onClick={onClose}></div>
      <div className="side-tray-container">
        <div className="side-tray-header">
          <img
            src={HyperLink}
            alt="Hyperlink Logo"
            className="side-tray-logo"
          />
          <button className="close-btn" onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>
        <div className="side-tray-content">
          <div className="content-scroll">
            <h1 className="side-tray-title">
              <span className="highlight">Healthcare,</span> Reimagined For You
            </h1>

            <p className="intro-text">
              At Hyperlink, we believe healthcare should start with you.
              <br /> Your genes, your lifestyle, your future.
            </p>

            <div className="feature-card">
              <p>
                We're building a unified platform combining DNA-powered
                wellness, vaccine tracking, and precision medicine.
              </p>
            </div>

            <div className="feature-card">
              <p>
                From patients to providers, Hyperlink empowers every stakeholder
                with deep genomic insights.
              </p>
            </div>

            <p className="section-title">We’re creating a world where:</p>

            <ul className="side-tray-list">
              <li>
                <span className="list-icon">🧬</span>
                <span>Nutrition & lifestyle management is gene-smart</span>
              </li>
              <li>
                <span className="list-icon">💉</span>
                <span>Vaccines are digitally managed</span>
              </li>
              <li>
                <span className="list-icon">🩺</span>
                <span>Cancer care is hyper-personalized</span>
              </li>
              <li>
                <span className="list-icon">📊</span>
                <span>Data drives decisions, compassion drives actions</span>
              </li>
            </ul>

            <div className="closing-card">
              <p className="closing-text">
                This is healthcare without guesswork. This is Hyperlink.
                <br />
                Join us in shaping the next era of personalized care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideTray;
