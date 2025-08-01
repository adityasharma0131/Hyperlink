import React from "react";
import "./style.css";

import DietTrack from "../../assets/Diettracks.png";
import SleepNotes from "../../assets/Sleepnotes.png";
import HeroMockup from "../../assets/heromockup.png";
import FeatureMockup from "../../assets/featuremockup.png";
import CtaBg from "../../assets/ctabg.png";

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

import { BsFillHeartPulseFill } from "react-icons/bs";
import { SiTicktick } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

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
      <div className="science-section">
        <Stars count={20} />

        <div className="science-container">
          <div className="science-content-wrapper">
            <div className="science-content">
              {/* Left Column - Sticky within section */}
              <div className="science-left">
                <ToolButton icon={LuLayoutDashboard} text="BACKGROUND" />
                <h1 className="science-heading">
                  Science Behind The <span className="highlight">Product</span>
                </h1>
                <p className="science-description">
                  Discover the Wonders Of Personalized Healthcare! Delve into
                  the World of Genetics, Genetic Testing, Cancer Prevention,
                  Precision Medicine, and Tailored Therapies – Lighting The Way
                  To Improved Well-Being.
                </p>
              </div>

              {/* Right Column - Scrollable Steps */}
              <div className="science-steps-container">
                <div className="science-steps">
                  {[
                    {
                      number: "01",
                      title: "EXPLORE THE HELIX",
                      desc: "Understand how your DNA influences your health and disease susceptibility.",
                    },
                    {
                      number: "02",
                      title: "HEALTH PERSONALIZATION",
                      desc: "Tailor your healthcare journey based on your unique genetic profile.",
                    },
                    {
                      number: "03",
                      title: "CANCER PREVENTION",
                      desc: "Utilize advanced genomics to identify risks and implement preventive strategies.",
                    },
                    {
                      number: "04",
                      title: "PRECISION MEDICINE",
                      desc: "Explore the future of tailored therapies that align with your health needs.",
                    },
                  ].map((step) => (
                    <div className="step-card" key={step.number}>
                      <div className="step-number" aria-hidden="true">
                        {step.number}
                      </div>
                      <div className="step-content">
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-section">
        <Stars count={30} />
        <div className="pricing-container">
          <div className="pricing-header">
            <ToolButton icon={LuLayoutDashboard} text="PRICING" />
            <h1>
              Discover Products With The{" "}
              <span className="highlight">Best Pricing</span>
            </h1>
            <p>
              Select from best plan, ensuring a perfect match. Need more or
              less? Customize your subscription for a seamless fit!
            </p>
          </div>

          <div className="pricing-cards">
            {/* 3-Month Plan (Featured) */}
            <div className="pricing-card highlight-card">
              <div className="card-badge">Most Popular</div>
              <div className="pricing-icon">
                <BsFillHeartPulseFill />
              </div>

              <h2>3 months</h2>
              <p className="pricing-subtitle">
                Ideal for individuals beginning their preventive health journey.
              </p>

              <div className="pricing-amount">
                <span className="original-price">₹799</span>
                <span className="discounted-price">₹499</span>
                <span className="billing-cycle">/per month</span>
              </div>

              <button className="pricing-button">
                Get Started <FiArrowRight className="button-icon" />
              </button>

              <div className="pricing-benefits">
                <h3>What you will get:</h3>
                <ul>
                  <li>
                    <SiTicktick className="benefit-icon" /> Full Genetic
                    Assessment via Helix AI
                  </li>
                  <li>
                    <SiTicktick className="benefit-icon" /> Personalized
                    Nutrigenomics Report & Diet Plan
                  </li>
                  <li>
                    <SiTicktick className="benefit-icon" /> 2 Free Doctor
                    Consultations
                  </li>
                  <li>
                    <SiTicktick className="benefit-icon" /> Discounted
                    Vaccination Services (10% off)
                  </li>
                  <li>
                    <SiTicktick className="benefit-icon" /> Access to Health
                    Locker
                  </li>
                </ul>
              </div>
            </div>

            {/* 6-Month Plan */}
            <div className="pricing-card">
              <div className="pricing-icon">
                <BsFillHeartPulseFill />
              </div>

              <h2>6 months</h2>
              <p className="pricing-subtitle">
                Perfect for continued health monitoring and progress tracking.
              </p>

              <div className="pricing-amount">
                <span className="original-price">₹599</span>
                <span className="discounted-price">₹359</span>
                <span className="billing-cycle">/per month</span>
              </div>

              <button className="pricing-button secondary">
                Get Started <FiArrowRight className="button-icon" />
              </button>

              <div className="pricing-benefits">
                <h3>What you will get:</h3>
                <ul>
                  <li>
                    <SiTicktick className="benefit-icon" /> 4 Free Doctor
                    Consultations
                  </li>
                  <li>
                    <SiTicktick className="benefit-icon" /> Advanced
                    Nutrigenomics Personalization
                  </li>
                  <li>
                    <SiTicktick className="benefit-icon" /> Priority Lab
                    Bookings
                  </li>
                  <li>
                    <SiTicktick className="benefit-icon" /> Priority Support
                  </li>
                  <li>
                    <SiTicktick className="benefit-icon" /> Plus, everything in
                    the 3-Month Plan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download-section">
        {/* Background with parallax effect */}
        <div className="download-bg-container">
          <img
            src={CtaBg}
            alt="App Interface Screenshot"
            className="download-bg"
            loading="lazy"
          />
          <div className="bg-overlay"></div>
        </div>

        {/* Content overlay */}
        <div className="download-content">
          <ToolButton icon={LuLayoutDashboard} text="DOWNLOAD NOW" />

          <h1 className="download-heading">
            Download Our App With <br />
            <span className="highlight">Android</span> Or{" "}
            <span className="highlight">IOS</span> Now!
          </h1>

          <div className="download-buttons">
            <Button className="download-btn primary">
              <FaGooglePlay className="store-icon" />
              <span>Get on Play Store</span>
            </Button>
            <Button className="download-btn primary">
              <FaApple className="store-icon" />
              <span>Download on App Store</span>
            </Button>
          </div>

          {/* App rating showcase */}
          <div className="app-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
            <p>Rated 4.9/5 by 10,000+ users</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
