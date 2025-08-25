import React, { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import HyperLink from "../assets/hyperlinklogo.png";
import Button from "./Button";

const WaitlistSideTray = ({ isOpen, onClose }) => {
  const scrollPosRef = useRef(0);
  const contentRef = useRef(null);
  const formRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");
  const [isThankyouOpen, setIsThankyouOpen] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "ba521758-99c9-4b4b-bbfd-15b09b531ad7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
        setIsThankyouOpen(true);
        // Close the form after a delay
        setTimeout(() => {
          onClose();
          setIsThankyouOpen(false);
        }, 2000);
      } else {
        setResult(data.message || "Error submitting form");
      }
    } catch (error) {
      setResult("Network error. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      scrollPosRef.current = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollPosRef.current}px`;
      body.style.width = "100%";
      html.classList.add("no-scroll");

      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }

      // Reset form state when opening
      setResult("");
      setIsSubmitting(false);
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
      <div className={`waitlist-tray ${isOpen ? "open" : ""}`}>
        <div className="waitlist-tray-overlay" onClick={onClose}></div>

        <div className="waitlist-tray-container">
          {/* Header */}
          <div className="waitlist-tray-header">
            <img
              src={HyperLink}
              alt="Hyperlink Logo"
              className="waitlist-tray-logo"
            />
            <button className="waitlist-close-btn" onClick={onClose}>
              <FiX size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="waitlist-content-scroll" ref={contentRef}>
            <div className="waitlist-content-inner">
              <h2 className="waitlist-highlight">Join The Waitlist</h2>

              {/* Glassmorphism Form */}
              <form
                ref={formRef}
                className="waitlist-glass-form"
                onSubmit={onSubmit}
              >
                <div className="waitlist-form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="waitlist-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="info@gmail.com"
                    required
                  />
                </div>

                <div className="waitlist-form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your text here..."
                  ></textarea>
                </div>

                {/* Hidden honeypot field to prevent spam */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                <Button
                  type="primary"
                  className="waitlist-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

                {result && (
                  <div
                    className={`waitlist-result ${
                      result.includes("Success") ? "success" : "error"
                    }`}
                  >
                    {result}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .waitlist-content-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .waitlist-content-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        .no-scroll { overflow: hidden; }

        .waitlist-tray {
          position: fixed;
          inset: 0;
          z-index: 99999;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .waitlist-tray-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .waitlist-tray.open .waitlist-tray-overlay {
          opacity: 1;
          pointer-events: auto;
        }

        .waitlist-tray-container {
          position: absolute;
          top: 50%;
          right: calc(-1 * 680px);
          width: 680px;
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
        }
        .waitlist-tray.open .waitlist-tray-container {
          right: 0;
        }

        .waitlist-tray-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .waitlist-tray-logo {
          max-width: 130px;
          filter: brightness(0) invert(1);
        }

        .waitlist-content-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 0;
        }
        
        .waitlist-content-inner {
          padding: 24px 32px 32px;
        }

        .waitlist-highlight {
          text-align: center;
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
          background: linear-gradient(90deg, #a855f7, #d946ef);
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .waitlist-close-btn {
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
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .waitlist-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .waitlist-glass-form {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .waitlist-form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .waitlist-form-group label {
          font-size: 0.95rem;
          color: #fff;
          opacity: 0.9;
        }

        .waitlist-form-group input,
        .waitlist-form-group textarea {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 12px;
          font-size: 1rem;
          color: #fff;
          outline: none;
          transition: all 0.3s ease;
        }

        .waitlist-form-group input:focus,
        .waitlist-form-group textarea:focus {
          border-color: #a855f7;
          background: rgba(255, 255, 255, 0.12);
        }

        .waitlist-form-group textarea {
          min-height: 100px;
          resize: none;
        }

        .waitlist-submit-btn {
          background: linear-gradient(90deg, #a855f7, #d946ef);
          color: #fff;
          font-size: 1rem;
          padding: 12px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .waitlist-submit-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .waitlist-tray-container {
            right: calc(-1 * 90%);
            width: 90%;
          }
          
          .waitlist-content-inner {
            padding: 20px 24px;
          }
        }
        
        @media (max-width: 576px) {
          .waitlist-tray-container {
            right: calc(-1 * 100%);
            width: 95%;
            height: 80vh;
            top: 15%;
            border-radius: 16px;
            transform: none;
          }
          
          .waitlist-tray.open .waitlist-tray-container {
            top: 15%;
          }
          
          .waitlist-tray-header {
            padding: 16px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default WaitlistSideTray;
