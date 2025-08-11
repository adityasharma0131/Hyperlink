import React, { useEffect, useRef } from "react";
import HyperLink from "../assets/hyperlinklogo.png";
import { FiX } from "react-icons/fi";

const trayContent = {
  vaccination: {
    title: <span className="highlight">Vaccination</span>,
    intro: `From cervical cancer prevention to childhood immunizations, Hyperlink Vaccination empowers families with data-driven, personalized protection across every life stage.`,
    details: [
      `Our platform combines clinical precision with everyday convenience—enabling mothers to track pediatric vaccines, receive timely reminders, and even preserve milestones with a digital vaccination diary that becomes part of your family’s health story.`,
      `Because prevention isn’t just clinical — it’s deeply personal.`,
    ],
  },
  wellness: {
    title: <span className="highlight">Wellness</span>,
    intro: `Unlock the full potential of your genes to fuel better living. Hyperlink Nutrition transforms genetic insights into actionable plans—for food, physical movement, sleep and long-term health.`,
    details: [
      `At Hyperlink, we unify the power of science, genetics, and innovation to deliver personalized care across life’s most critical moments.`,
      `From DNA-based nutrition, physical and sleep activity regimes, and targeted therapies and intelligent data orchestration — our wellness solution is designed to prevent, nourish, and heal with unmatched precision.`,
      `Whether you're building lifelong wellness or protecting the next generation, Hyperlink helps you live smarter, healthier, and more intentionally — powered by your unique biology.`,
      `Eat smarter. Move better. Live longer with precision.`,
    ],
  },
  precision: {
    title: <span className="highlight">Hyperlink Precision Care</span>,
    intro: `Hyperlink Precision Care redefines how we fight disease — with clarity, compassion, and cutting-edge science.`,
    details: [
      `Rooted in advanced genomics and built for real-world clinical impact, our solutions deliver targeted diagnostics and personalized therapies, especially in oncology.`,
      `By aligning care with your genetic profile, we help doctors make faster, more accurate decisions—so treatment is not just reactive, but precisely proactive.`,
      `More clarity. Better outcomes. Smarter care.`,
    ],
  },
};

const AboutSideTray = ({ isOpen, onClose, type }) => {
  const content = trayContent[type] || trayContent.vaccination;
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      scrollPosRef.current = window.scrollY;
      html.classList.add("no-scroll");
      body.style.top = `-${scrollPosRef.current}px`;
    } else {
      html.classList.remove("no-scroll");
      body.style.top = "";
      window.scrollTo(0, scrollPosRef.current);
    }

    return () => {
      html.classList.remove("no-scroll");
      body.style.top = "";
    };
  }, [isOpen]);

  return (
    <div className={`about-side-tray ${isOpen ? "open" : ""}`}>
      <div className="about-side-tray-overlay" onClick={onClose}></div>
      <div className="about-side-tray-container">
        <div className="about-side-tray-header">
          <img
            src={HyperLink}
            alt="Hyperlink Logo"
            className="about-side-tray-logo"
          />
          <button className="about-close-btn" onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>

        <div className="about-side-tray-content">
          <div className="about-content-scroll">
            <h1 className="about-side-tray-title">{content.title}</h1>
            <p className="intro-text">{content.intro}</p>

            {content.details.map((text, index) => (
              <div className="about-feature-card" key={index}>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .no-scroll {
  position: fixed;
  overflow-y: hidden;
  width: 100%;
}

/* General tray wrapper */
.about-side-tray {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 99999;
  transition: all 0.4s ease;
}

/* Overlay */
.about-side-tray-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.about-side-tray.open .about-side-tray-overlay {
  opacity: 1;
  pointer-events: auto;
}

/* Tray container */
.about-side-tray-container {
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
  z-index: 100000;
}
.about-side-tray.open .about-side-tray-container {
  right: 0;
}

/* Header */
.about-side-tray-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.about-side-tray-logo {
  max-width: 130px;
  filter: brightness(0) invert(1);
}
.about-close-btn {
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
.about-close-btn:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: rotate(90deg);
}

/* Content */
.about-side-tray-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.about-content-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px 20px;
}
.about-content-scroll::-webkit-scrollbar {
  width: 6px;
}
.about-content-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

/* Titles */
.about-side-tray-title {
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
.about-feature-card {
  background: rgba(255, 255, 255, 0.05);
  color:white;
  border-left: 3px solid #a855f7;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 12px;
  transition: transform 0.25s ease;
}
.about-feature-card:hover {
  transform: translateX(6px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-side-tray-container {
    width: 85%;
    right: -85%;
    height: 90vh;
    top: 50%;
  }
  .about-side-tray-title {
    font-size: 1.5rem;
  }
  .intro-text {
    font-size: 0.95rem;
  }
  .about-side-tray-header {
    padding: 14px;
  }
  .about-content-scroll {
    padding: 14px 16px 16px;
  }
}

@media (max-width: 576px) {
  .about-side-tray-container {
    width: 95%;
    right: -100%;
    height: 80vh;
    top: 15%;
    bottom: 0;
    transform: none;
  }
  .about-side-tray.open .about-side-tray-container {
    right: 0;
    top: 15%;
  }
  .about-side-tray-title {
    font-size: 1.4rem;
    margin: 10px 0 16px;
  }
  .about-feature-card {
    padding: 12px;
  }
  .about-close-btn {
    width: 30px;
    height: 30px;
  }
}

@media (max-height: 600px) {
  .about-side-tray-container {
    height: 95vh;
  }
  .about-side-tray-title {
    margin: 8px 0 12px;
    font-size: 1.3rem;
  }
  .intro-text {
    margin-bottom: 12px;
    font-size: 0.9rem;
  }
  .about-side-tray-header {
    padding: 12px;
  }
}

      `}</style>
    </div>
  );
};

export default AboutSideTray;
