import React from "react";
import "./style.css";

import Button from "../../Components/Button";
import DietTrack from "../../assets/Diettracks.png";
import SleepNotes from "../../assets/Sleepnotes.png";
import HeroMockup from "../../assets/heromockup.png";
import Stars from "../../Components/Stars";

const Home = () => {
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
          <div className="section-title">
            <span className="section-icon">i</span>
            <span>WHY CHOOSE US</span>
          </div>

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
    </>
  );
};

export default Home;
