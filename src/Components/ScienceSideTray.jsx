import React, { useEffect, useRef } from "react";
import HyperLink from "../assets/hyperlinklogo.png";
import { FiX } from "react-icons/fi";

const ScienceSideTray = ({ isOpen, onClose }) => {
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      // Save scroll position and lock body
      scrollPosRef.current = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollPosRef.current}px`;
      body.style.width = "100%";
      html.classList.add("no-scroll");
    } else {
      // Restore scroll position and unlock
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      html.classList.remove("no-scroll");
      window.scrollTo(0, scrollPosRef.current);
    }

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      html.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const features = [
    {
      title: "Decode the Helix",
      text: "Discover how your genes influence your health, risks, and resilience.",
    },
    {
      title: "Personalize the Journey",
      text: "Build care pathways tailored to your unique genetic blueprint.",
    },
    {
      title: "Prevent with Purpose",
      text: "Identify disease risks before symptoms arise using advanced genomics.",
    },
    {
      title: "Treat with Precision",
      text: "Deliver therapies that align with your biology—not assumptions.",
    },
  ];

  return (
    <>
      <div className={`science-side-tray ${isOpen ? "open" : ""}`}>
        <div className="science-side-tray-overlay" onClick={onClose}></div>

        <div className="science-side-tray-container">
          {/* Header */}
          <div className="science-side-tray-header">
            <img
              src={HyperLink}
              alt="Hyperlink Logo"
              className="science-side-tray-logo"
            />
            <button className="science-close-btn" onClick={onClose}>
              <FiX size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="science-content-scroll">
            <h2 className="science-side-tray-title">
              Built on <span className="highlight">Science</span>. Designed for{" "}
              <span className="highlight">You</span>.
            </h2>
            <p className="intro-text">
              At Hyperlink, every product begins with science—and ends with you.
              Our platform is built on deep genomic intelligence, combining
              cutting-edge research with real-world impact. By decoding your
              DNA, we transform healthcare from generic to genuinely personal.
            </p>

            {features.map((f, i) => (
              <div key={i} className="science-feature-card">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}

            <p className="intro-text" style={{ marginTop: "16px" }}>
              This is more than innovation—it’s a shift from one-size-fits-all
              to one-size-fits-<span className="highlight">YOU</span>.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        :root {
          --tray-width: 600px;
          --tray-bg: rgba(90, 45, 138, 0.95);
          --highlight-gradient: linear-gradient(90deg, #a855f7, #d946ef);
        }

        /* Scrollbar styling for tray content */
        .science-content-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .science-content-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .no-scroll {
          overflow: hidden;
        }

        /* Tray Wrapper */
        .science-side-tray {
          position: fixed;
          inset: 0;
          z-index: 99999;
          pointer-events: none;
        }

        /* Overlay */
        .science-side-tray-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .science-side-tray.open .science-side-tray-overlay {
          opacity: 1;
          pointer-events: auto;
        }

        /* Tray Panel */
        .science-side-tray-container {
          position: absolute;
          top: 50%;
          right: calc(-1 * var(--tray-width));
          width: var(--tray-width);
          height: 80vh;
          background: var(--tray-bg);
          backdrop-filter: blur(18px);
          border-radius: 16px 0 0 16px;
          box-shadow: -8px 0 28px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          transform: translateY(-50%);
          transition: right 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
        }
        .science-side-tray.open .science-side-tray-container {
          right: 0;
        }

        /* Header */
        .science-side-tray-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .science-side-tray-logo {
          max-width: 130px;
          filter: brightness(0) invert(1);
        }
        .science-close-btn {
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
        .science-close-btn:hover {
          background: rgba(255, 255, 255, 0.18);
          transform: rotate(90deg);
        }

        /* Content Area */
        .science-content-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 16px 20px 20px;
        }
        .science-side-tray-title {
          font-size: 1.7rem;
          font-weight: 700;
          margin: 12px 0 20px;
          line-height: 1.3;
        }
        .highlight {
          background: var(--highlight-gradient);
          -webkit-background-clip: text;
          color: transparent;
        }
        .intro-text {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 16px;
          line-height: 1.5;
        }

        /* Feature Cards */
        .science-feature-card {
          background: rgba(255, 255, 255, 0.05);
          border-left: 3px solid #a855f7;
          border-radius: 10px;
          padding: 14px;
          margin-bottom: 12px;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .science-feature-card h3 {
          margin: 0 0 6px;
          font-size: 1.1rem;
          color: white;
        }
        .science-feature-card p {
          margin: 0;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
        }
        .science-feature-card:hover {
          transform: translateX(6px);
          background: rgba(255, 255, 255, 0.08);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          :root { --tray-width: 85%; }
          .science-side-tray-container { height: 90vh; }
        }
        @media (max-width: 576px) {
          :root { --tray-width: 95%; }
          .science-side-tray-container {
            height: 80vh;
            top: 15%;
            border-radius: 16px;
            transform: none;
          }
          .science-side-tray.open .science-side-tray-container {
            top: 15%;
          }
        }
      `}</style>
    </>
  );
};

export default ScienceSideTray;
