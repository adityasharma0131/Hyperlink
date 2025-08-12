import React, { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import Founder1 from "../assets/founderprofile.jpg";
import Founder2 from "../assets/founderprofile.jpg";
import Button from "./Button";
import HyperLink from "../assets/hyperlinklogo.png";

const WhoAreWeSideTray = ({ isOpen, onClose }) => {
  const scrollPosRef = useRef(0);
  const [expanded, setExpanded] = useState({});
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

      // Reset scroll position when opening
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
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

  const founders = [
    {
      name: "DR. KAVITA MADHURI",
      img: Founder1,
      bio: `A globally respected surgeon, educator, and researcher, Dr. Kavitha brings over two decades of clinical and academic experience in Gynaecological Oncology from the NHS, UK. Her career reflects an unwavering commitment to advancing women's health, driving early cancer detection, and improving access to empathetic, science-led care.`,
      role: "Co-Founder & Medical Director",
    },
    {
      name: "ARVIND PAWAR",
      img: Founder2,
      bio: `An innovative leader with deep expertise in technology and healthcare strategy, Arvind brings a vision for scalable, patient-first solutions. His focus is on bridging advanced medical science with accessible platforms that empower both patients and practitioners.`,
      role: "Co-Founder & Technology Director",
    },
  ];

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div className={`whoarewe-tray ${isOpen ? "open" : ""}`}>
        <div className="whoarewe-tray-overlay" onClick={onClose}></div>

        <div className="whoarewe-tray-container">
          {/* Header */}
          <div className="whoarewe-tray-header">
            <img
              src={HyperLink}
              alt="Hyperlink Logo"
              className="whoarewe-tray-logo"
            />
            <button className="whoarewe-close-btn" onClick={onClose}>
              <FiX size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="whoarewe-content-scroll" ref={contentRef}>
            <div className="whoarewe-content-inner">
              <h2 className="whoarewe-title">
                Meet the <span className="highlight">Visionaries</span>
              </h2>

              <p className="whoarewe-intro">
                Dr. Kavitha and Arvind together are quietly, powerfully
                rewriting the story of healthcare—where technology meets
                empathy, and care becomes truly personal.
              </p>

              <div className="founder-card-container">
                {founders.map((founder, index) => (
                  <div key={index} className="founder-card">
                    <div className="founder-img-container">
                      <div className="founder-img-frame">
                        <img
                          src={founder.img}
                          alt={founder.name}
                          className="founder-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="founder-name">{founder.name}</h3>
                    <p className="founder-role">{founder.role}</p>

                    <div
                      className={`founder-message-wrapper ${
                        expanded[index] ? "expanded" : ""
                      }`}
                    >
                      <div className="founder-bio">
                        <p>{founder.bio}</p>
                      </div>
                    </div>

                    <Button
                      variant={expanded[index] ? "secondary" : "primary"}
                      onClick={() => toggleExpand(index)}
                      className="whoarewe-knowmore-btn"
                    >
                      {expanded[index] ? "Show Less" : "Know More"}
                    </Button>
                  </div>
                ))}
              </div>

              <div className="whoarewe-divider"></div>

              <p className="whoarewe-outro">
                Together, they're building a future where healthcare is as
                unique as your DNA.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        :root {
          --tray-width: 680px;
          --tray-bg: rgba(35, 23, 65, 0.98);
          --highlight-gradient: linear-gradient(90deg, #a855f7, #d946ef);
          --founder-card-bg: rgba(255, 255, 255, 0.05);
          --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          --transition-smooth: cubic-bezier(0.65, 0, 0.35, 1);
        }

        .whoarewe-content-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .whoarewe-content-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        .no-scroll { overflow: hidden; }

        .whoarewe-tray {
          position: fixed;
          inset: 0;
          z-index: 99999;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .whoarewe-tray-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .whoarewe-tray.open .whoarewe-tray-overlay {
          opacity: 1;
          pointer-events: auto;
        }

        .whoarewe-tray-container {
        position: absolute;
          top: 50%;
          right: calc(-1 * var(--tray-width));
          width: var(--tray-width);
          height: 80vh;
    background: rgba(90, 45, 138, 0.95);          backdrop-filter: blur(18px);
          border-radius: 16px 0 0 16px;
          box-shadow: -8px 0 28px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          transform: translateY(-50%);
          transition: right 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
        }
        .whoarewe-tray.open .whoarewe-tray-container {
          right: 0;
        }

        .whoarewe-tray-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
        }

        .whoarewe-tray-logo {
    max-width: 130px;
    filter: brightness(0) invert(1);
        }

        .whoarewe-content-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 0;
        }
        
        .whoarewe-content-inner {
          padding: 24px 32px 32px;
        }

        .whoarewe-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 8px;
          color: white;
          text-align: left;
          letter-spacing: -0.5px;
        }
    
        
        .highlight {
          background: var(--highlight-gradient);
          -webkit-background-clip: text;
          color: transparent;
          font-weight: 800;
        }
        
        .whoarewe-close-btn {
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
        .whoarewe-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .whoarewe-intro {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 auto 32px;
          line-height: 1.7;
          text-align: left;
          max-width: 80%;
          font-weight: 300;
        }
        
        .founder-card-container {
          display: flex;
          gap: 24px;
          flex-direction: row;
          justify-content: center;
          margin: 0 auto;
          max-width: 100%;
          flex-wrap: wrap;
        }

        .founder-card {
          background: var(--founder-card-bg);
          border-radius: 16px;
          padding: 28px;
          width: 280px;
          display: flex;
          text-align: center;
          transition: all 0.4s var(--transition-smooth);
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: var(--card-shadow);
          position: relative;
          overflow: hidden;
        }
        
        .founder-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #a855f7, #d946ef);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .founder-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }
        
        .founder-card:hover::before {
          opacity: 1;
        }
        
        .founder-img-container {
          margin: 0 auto 20px;
        }
        
        .founder-img-frame {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 3px solid rgba(168, 85, 247, 0.3);
          padding: 4px;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s var(--transition-smooth);
        }
        
        .founder-card:hover .founder-img-frame {
          transform: scale(1.05);
        }
        
        .founder-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          transition: transform 0.4s var(--transition-smooth);
        }
        
        .founder-card:hover .founder-img {
          transform: scale(1.03);
        }
        
        .founder-name {
          color: white;
          font-size: 1.3rem;
          margin: 0 0 6px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .founder-role {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          margin: 0 0 16px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Keep message hidden unless expanded */
        .founder-message-wrapper {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: all 0.5s var(--transition-smooth);
          width: 100%;
        }
        
        .founder-message-wrapper.expanded {
          max-height: 500px;
          opacity: 1;
          margin: 16px 0;
        }
        
        .founder-bio {
          background: rgba(255, 255, 255, 0.08);
          padding: 16px;
          border-radius: 12px;
          text-align: left;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          line-height: 1.7;
          border-left: 3px solid #a855f7;
        }
        
        .founder-bio p {
          margin: 0;
        }

        .whoarewe-knowmore-btn {
          margin-top: auto;
          width: 100%;
          transition: all 0.3s ease;
        }
        
        .whoarewe-outro {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.85);
          margin: 32px auto 0;
          text-align: center;
          font-style: italic;
          max-width: 80%;
          line-height: 1.6;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          :root { 
            --tray-width: 90%; 
          }
          
          .whoarewe-tray-container {

          :root { --tray-width: 85%; }
          .science-side-tray-container { height: 90vh; }
          }
          
          .whoarewe-content-inner {
            padding: 20px 24px;
          }
          
          .whoarewe-title {
            font-size: 1.8rem;
          }
          
          .whoarewe-intro,
          .whoarewe-outro {
            max-width: 100%;
            font-size: 1rem;
          }
          
          .founder-card-container {
            flex-direction: column;
            align-items: center;
          }
          
          .founder-card {
            width: 100%;
            max-width: 320px;
            padding: 24px;
          }
        }
        
        @media (max-width: 576px) {
          :root { 
            --tray-width: 100%; 
          }
          
          .whoarewe-tray-container {

            height: 80vh;
            top: 15%;
            width: 95%;
            border-radius: 16px;
            transform: none;
          }
          
          .whoarewe-tray.open .whoarewe-tray-container {
            top: 15;
          }
          
          .whoarewe-title { 
            font-size: 1.6rem; 
          }
          
          .whoarewe-tray-header {
            padding: 16px 20px;
          }
          
          .founder-img-frame {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </>
  );
};

export default WhoAreWeSideTray;
