import React, { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import HyperLink from "../assets/hyperlinklogo.png";
import ThankBg from "../assets/ThankBg.png";
import Button from "./Button";

const ThankyouSideTray = ({ isOpen, onClose }) => {
  const scrollPosRef = useRef(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      scrollPosRef.current = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollPosRef.current}px`;
      body.style.width = "100%";
      html.classList.add("no-scroll");
      if (contentRef.current) contentRef.current.scrollTop = 0;
    } else {
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

  return (
    <>
      <div className={`thankyou-tray ${isOpen ? "open" : ""}`}>
        <div className="thankyou-tray-overlay" onClick={onClose}></div>
        <div className="thankyou-tray-container">
          <div className="thankyou-tray-header">
            <img
              src={HyperLink}
              alt="Hyperlink Logo"
              className="thankyou-tray-logo"
            />
            <button className="thankyou-close-btn" onClick={onClose}>
              <FiX size={20} />
            </button>
          </div>

          <div className="thankyou-content-scroll" ref={contentRef}>
            <div className="thankyou-content-inner">
              <h1 className="thankyou-title">"Thank You"</h1>
              <div className="thankyou-image-container">
                <img
                  src={ThankBg}
                  alt="Thank you illustration"
                  className="thankyou-image"
                  loading="lazy"
                />
              </div>
              <h3 className="thankyou-subtitle">
                You're In. Welcome to the Future of Care.
              </h3>
              <p className="thankyou-message">
                Thank you for joining the Hyperlink waitlist. We're honored to
                have you with us on this journey toward a smarter, more
                personal, more compassionate healthcare future.
                <br />
                <br />
                We'll be in touch soon – your health transformation starts here.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        :root {
          --tray-width: 600px;
          --tray-bg: rgba(35, 23, 65, 0.98);
          --highlight-gradient: linear-gradient(90deg, #a855f7, #d946ef);
          --transition-smooth: cubic-bezier(0.65, 0, 0.35, 1);
        }

        .thankyou-content-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .thankyou-content-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        .no-scroll { overflow: hidden; }

        .thankyou-tray {
          position: fixed;
          inset: 0;
          z-index: 99999;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .thankyou-tray-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.4s var(--transition-smooth);
          pointer-events: none;
        }
        .thankyou-tray.open .thankyou-tray-overlay {
          opacity: 1;
          pointer-events: auto;
        }

        .thankyou-tray-container {
          position: absolute;
          top: 50%;
          right: calc(-1 * var(--tray-width));
          width: var(--tray-width);
          height: 80vh;
          background: rgba(90, 45, 138, 0.95);
          backdrop-filter: blur(18px);
          border-radius: 16px 0 0 16px;
          box-shadow: -8px 0 28px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          transform: translateY(-50%);
          transition: right 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
          overflow: hidden;
        }
        .thankyou-tray.open .thankyou-tray-container {
          right: 0;
        }

        .thankyou-tray-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .thankyou-tray-logo {
          max-width: 130px;
          filter: brightness(0) invert(1);
        }

        .thankyou-close-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s var(--transition-smooth);
        }
        .thankyou-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .thankyou-content-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 0;
        }
        
        .thankyou-content-inner {
          padding: 24px 32px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .thankyou-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 16px;
          color: white;
          letter-spacing: -0.5px;
          background: var(--highlight-gradient);
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .thankyou-image-container {
          margin: 16px 0;
          max-width: 300px;
          width: 100%;
        }
        
        .thankyou-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          object-fit: contain;
        }
        
        .thankyou-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin: 24px 0 16px;
          line-height: 1.3;
        }
       
        .thankyou-message {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          max-width: 80%;
          margin: 0 auto;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          :root { 
            --tray-width: 85%; 
          }
          
          .thankyou-content-inner {
            padding: 20px 24px;
          }
          
          .thankyou-title {
            font-size: 2rem;
          }
          
          .thankyou-subtitle {
            font-size: 1.3rem;
          }
          
          .thankyou-message {
            max-width: 100%;
            font-size: 1rem;
          }
        }
        
        @media (max-width: 576px) {
          :root { 
            --tray-width: 95%; 
          }
          
          .thankyou-tray-container {
            height: 90vh;
            top: 5%;
            border-radius: 16px;
            transform: none;
          }
          
          .thankyou-tray.open .thankyou-tray-container {
            top: 5%;
          }
          
          .thankyou-title { 
            font-size: 1.8rem; 
          }
          
          .thankyou-subtitle {
            font-size: 1.2rem;
          }
          
          .thankyou-tray-header {
            padding: 16px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ThankyouSideTray;
