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

      <style>
        {`
        /* General tray wrapper */
.side-tray {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 10000;
  transition: all 0.4s ease;
}

/* Overlay */
.side-tray-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.side-tray.open .side-tray-overlay {
  opacity: 1;
  pointer-events: auto;
}

/* Tray container */
.side-tray-container {
  position: absolute;
  top: 55%;
  right: -600px;
  width: 600px;
  height: 80vh;
  background: rgba(90, 45, 138, 0.95);
  backdrop-filter: blur(18px);
  border-radius: 16px 0 0 16px;
  box-shadow: -8px 0 28px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  transform: translateY(-50%);
  transition: right 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.side-tray.open .side-tray-container {
  right: 0;
}

/* Header */
.side-tray-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.side-tray-logo {
  max-width: 130px;
  filter: brightness(0) invert(1);
}
.close-btn {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}
.close-btn:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: rotate(90deg);
}

/* Content */
.side-tray-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.content-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px 20px;
}

/* Titles */
.side-tray-title {
  font-size: 1.7rem;
  font-weight: 700;
  margin: 12px 0 20px;
  line-height: 1.3;
}
.highlight {
  background: linear-gradient(90deg, #a855f7, #d946ef);
  -webkit-background-clip: text;
  color: transparent;
}

.intro-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  line-height: 1.5;
}

/* Cards */
.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border-left: 3px solid #a855f7;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 12px;
  transition: transform 0.25s ease;
}
.feature-card:hover {
  transform: translateX(6px);
}

/* Section title */
.section-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: #d8b4fe;
  margin: 18px 0 10px;
}

/* List */
.side-tray-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
}
.side-tray-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: padding-left 0.25s ease;
}
.side-tray-list li:hover {
  padding-left: 5px;
}
.list-icon {
  font-size: 1.2rem;
}

/* Closing note */
.closing-card {
  background: linear-gradient(
    135deg,
    rgba(168, 85, 247, 0.12) 0%,
    rgba(217, 70, 239, 0.12) 100%
  );
  border-radius: 10px;
  padding: 16px;
  margin-top: 10px;
}
.closing-text {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
}

/* Scrollbar */
.content-scroll::-webkit-scrollbar {
  width: 6px;
}
.content-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .side-tray-container {
    width: 85%;
    right: -85%;
    height: 90vh;
    top: 50%;
  }

  .side-tray-title {
    font-size: 1.5rem;
  }

  .intro-text {
    font-size: 0.95rem;
  }

  .side-tray-header {
    padding: 14px;
  }

  .content-scroll {
    padding: 14px 16px 16px;
  }
}

@media (max-width: 576px) {
  .side-tray-container {
    width: 95%;
    right: -100%;
    height: 80vh;
    top: 15%;
    bottom: 0;
    transform: none;
  }

  .side-tray.open .side-tray-container {
    right: 0;
    top: 15%;
  }

  .side-tray-title {
    font-size: 1.4rem;
    margin: 10px 0 16px;
  }

  .feature-card {
    padding: 12px;
  }

  .section-title {
    font-size: 1rem;
    margin: 14px 0 8px;
  }

  .side-tray-list li {
    padding: 8px 0;
  }

  .close-btn {
    width: 30px;
    height: 30px;
  }
}

@media (max-height: 600px) {
  .side-tray-container {
    height: 95vh;
  }

  .side-tray-title {
    margin: 8px 0 12px;
    font-size: 1.3rem;
  }

  .intro-text {
    margin-bottom: 12px;
    font-size: 0.9rem;
  }

  .side-tray-header {
    padding: 12px;
  }
}
`}
      </style>
    </div>
  );
};

export default SideTray;
