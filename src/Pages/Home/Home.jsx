import React from "react";
import "./style.css";

import DietTrack from "../../assets/Diettracks.png";
import SleepNotes from "../../assets/Sleepnotes.png";
import HeroMockup from "../../assets/heromockup.png";
import FeatureMockup from "../../assets/featuremockup.png";

import Button from "../../Components/Button";
import Stars from "../../Components/Stars";
import ToolButton from "../../Components/ToolButton";

import { CiCircleInfo } from "react-icons/ci";
import { FaUserDoctor, FaDna } from "react-icons/fa6";
import { FaFileMedicalAlt } from "react-icons/fa";
import { GrTestDesktop } from "react-icons/gr";
import { MdVaccines } from "react-icons/md";
import { RiBarChartBoxFill } from "react-icons/ri";
import { GiKnifeFork, GiNightSleep } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";

import { FaChartPie } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";

const Home = () => {
  const features = [
    {
      icon: <FaUserDoctor size={24} />,
      title: "Consultations",
      desc: "Book online appointments with specialists and track your consultation history.",
    },
    {
      icon: <GrTestDesktop size={24} />,
      title: "Lab Test Booking",
      desc: "Schedule lab tests at your convenience—home collection or nearest lab, your choice.",
    },
    {
      icon: <MdVaccines size={24} />,
      title: "Vaccine Booking",
      desc: "Choose from childhood, adult, or travel vaccines. Book doses and download certificates.",
    },
    {
      icon: <FaDna size={24} />,
      title: "Genetic Counselling",
      desc: "Get AI-driven insights into your DNA and health risks with Helix AI.",
    },
    {
      icon: <RiBarChartBoxFill size={24} />,
      title: "Daily Statics",
      desc: "Monitor your steps, sleep, calories, and vitals with real-time syncing.",
    },
    {
      icon: <GiKnifeFork size={24} />,
      title: "Daily Diet Tracking",
      desc: "Log meals, track macros, and follow your personalized nutrition plan.",
    },
    {
      icon: <GiNightSleep size={24} />,
      title: "Sleep Control",
      desc: "Analyze your sleep cycles and get personalized improvement tips from Helix.",
    },
    {
      icon: <FaFileMedicalAlt size={24} />,
      title: "Health Insights & Records",
      desc: "Securely store, access, and share all your reports in the Health Locker.",
    },
  ];

  return (
    <>
      <div className="home-container">
        <Stars count={20} />

        <h1 className="home-heading">
          Connect With Hyperlink Where <br />
          <span className="highlight">Your Health</span> Meets Innovation.
        </h1>
        <p className="home-subtext">
          Hyperlink is your ultimate partner in health and wellness, offering
          doctors consultation, prescription, lab test, vaccination, diet
          tracking, sleep and physical activity.
        </p>
        <div className="home-buttons">
          <Button type="primary">Get App Now</Button>
          <Button type="secondary">Scroll to Discover</Button>
        </div>

        <img src={DietTrack} alt="Diet Tracker" className="diet-track-img" />
        <img src={SleepNotes} alt="Sleep Notes" className="sleep-notes-img" />

        <div className="mockup-container">
          <img src={HeroMockup} alt="Hero Mockup" className="hero-mockup" />
        </div>
      </div>
      <div className="why-choose">
        <Stars count={20} />

        <div className="text-block">
          <ToolButton icon={CiCircleInfo} text="WHY CHOOSE US" />

          <h1>
            We Remain Continuously <br />
            Available For Your{" "}
            <span className="highlight">Health Services</span>
          </h1>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-number">01</div>
            <h2>Compassionate & Expert Care</h2>
            <p>
              Our team of dedicated healthcare professionals combines years of
              experience with a genuine commitment to providing.
            </p>
          </div>

          <div className="card">
            <div className="card-number">02</div>
            <h2>Patient-Centered Approach</h2>
            <p>
              Your health and well-being are our top priorities. We take the
              time to listen to your concerns, answer your questions.
            </p>
          </div>

          <div className="card">
            <div className="card-number">03</div>
            <h2>Personalized Treatment Plans</h2>
            <p>
              We understand that every patient is unique, and their healthcare
              needs may vary. That's why we create individualized treatment.
            </p>
          </div>
        </div>
      </div>
      <div className="about-app">
        <Stars count={30} />
        <ToolButton icon={CiCircleInfo} text="INFORMATION" />

        <div className="semicircle-background">
          <svg
            className="dotted-arc"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 A50,50 0 0,1 100,50"
              fill="none"
              stroke="rgba(164, 78, 204, 0.5)"
              strokeDasharray="1,2"
              strokeWidth="0.4"
            />
          </svg>
          <div className="semicircle-glow"></div>
        </div>

        <div className="about-header">
          <h2>
            What You Can Do <br />
            With <span className="highlight">This App?</span>
          </h2>
        </div>

        <div className="information-grid">
          {features.map((item, idx) => (
            <div className="information-card" key={idx}>
              <div className="information-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="know-more">
          <Button type="primary">Know More</Button>
        </div>
      </div>

      <div className="features-section">
        <Stars count={20} />
        <ToolButton icon={LuLayoutDashboard} text="FEATURES" />
        <h1 className="features-heading">
          Key Features Of This <span className="highlight">Application</span>
        </h1>

        <div className="features-grid">
          {/* Left column */}
          <div className="feature-column">
            <div className="feature-card">
              <div className="icon-wrapper" aria-hidden="true">
                <FaChartPie />
              </div>
              <h3>AI–Powered Genetic Counselling with Helix</h3>
              <p>
                Helix, your AI health assistant, delivers DNA-based insights,
                guides assessments, and connects you to personalized care.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon-wrapper" aria-hidden="true">
                <MdOutlineDateRange />
              </div>
              <h3>Smart Vaccination Management</h3>
              <p>
                From childhood to travel vaccines, easily book shots at home or
                in clinics. AI-based reminders make vaccination safe and timely.
              </p>
            </div>
          </div>

          {/* Center image */}
          <div className="feature-image-container">
            <img
              src={FeatureMockup}
              alt="Mobile application mockup showing key features"
              className="feature-image"
              loading="lazy"
            />
          </div>

          {/* Right column */}
          <div className="feature-column">
            <div className="feature-card">
              <div className="icon-wrapper" aria-hidden="true">
                <GiKnifeFork />
              </div>
              <h3>Nutrigenomics–Based Diet & Lifestyle Plans</h3>
              <p>
                Transform your nutrition with DNA-personalized meal plans,
                fitness goals, and sleep cycles. Everything is custom-built
                around your biology.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon-wrapper" aria-hidden="true">
                <AiOutlineSafety />
              </div>
              <h3>Secure Health Locker & Insights Dashboard</h3>
              <p>
                Store all your records, prescriptions, and certificates in an
                encrypted locker. Track activities, sleep, and genetics via the
                Health 360 dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
