import React, { useState } from "react";
import "./style.css";
import HomeVector from "../../assets/HomeVector.svg";

import Button from "../../Components/Button";
import Stars from "../../Components/Stars";

import Product1 from "../../assets/product1.svg";
import Product2 from "../../assets/product2.svg";
import Product3 from "../../assets/product3.svg";

import VisionImg from "../../assets/visionimg.png";
import HomeSideTray from "../../Components/HomeSideTray";
import AboutSideTray from "../../Components/AboutSideTray";
import ScienceSideTray from "../../Components/ScienceSideTray";
import WhoAreWeSideTray from "../../Components/WhoAreWeSideTray";
import ThankyouSideTray from "../../Components/ThankyouSideTray";

const Home = () => {
  const [isTrayOpen, setTrayOpen] = useState(false);
  const [isATrayOpen, setATrayOpen] = useState(false);
  const [trayType, setTrayType] = useState(null);

  const [isSTrayOpen, setIsSTrayOpen] = useState(false);
  const [isWTrayOpen, setWIsTrayOpen] = useState(false);

  const handleKnowMore = (type) => {
    setTrayType(type);
    setATrayOpen(true);
  };

  const handleLearnMoreClick = () => {
    setIsSTrayOpen(true);
  };
  const handleTrayClose = () => {
    setIsSTrayOpen(false);
  };

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        setIsThankyouOpen(true); // Show Thank You tray
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

  return (
    <>
      <div className="home-container" id="Home">
        <HomeSideTray isOpen={isTrayOpen} onClose={() => setTrayOpen(false)} />
        <div className="home-bg-vector">
          <img src={HomeVector} alt="Home Background" />
        </div>

        <Stars count={20} />

        <h1 className="home-heading">
          Personalized Health. Powered by You. <br />
          <span className="highlight">Meet Hyperlink</span> <br />
          the future of healthcare, today.
        </h1>

        <p className="home-subtext">
          Discover a smarter, safer, DNA-driven way to live well.
        </p>

        <div className="home-buttons">
          <Button type="primary" onClick={() => setTrayOpen(true)}>
            Learn More
          </Button>
        </div>
      </div>

      <div className="about-app" id="Products">
        <Stars count={40} />

        <div className="blackhole-background">
          <div className="blackhole-core"></div>
          <div className="blackhole-glow"></div>
          <div className="blackhole-accretion"></div>
        </div>

        <div className="about-header">
          <h2>
            Hyperlink <span className="highlight">Products</span>
          </h2>
        </div>

        <div className="product-card-container">
          {/* Vaccination Card */}
          <div className="product-card">
            <h2 className="product-title">Vaccination</h2>
            <p className="product-subtitle">
              From Genes to Generations, Personalized Care Starts Here.
            </p>
            <div className="product-image-container">
              <img src={Product1} alt="Vaccination" className="product-image" />
            </div>
            <h3 className="product-heading">
              Protect Generations. Preserve Memories.
            </h3>
            <p className="product-description">
              From cervical cancer prevention to childhood immunizations,
              Hyperlink Vaccination empowers families with data-driven,
              personalized protection across every life stage.
            </p>
            <Button
              type="primary"
              onClick={() => handleKnowMore("vaccination")}
            >
              Know More
            </Button>
          </div>

          {/* Wellness Card */}
          <div className="product-card">
            <h2 className="product-title">Wellness</h2>
            <p className="product-subtitle">
              Your Well-Being, Enhanced by Precision Insights.
            </p>
            <div className="product-image-container">
              <img src={Product2} alt="Wellness" className="product-image" />
            </div>
            <h3 className="product-heading">Nurture Health. Elevate Life.</h3>
            <p className="product-description">
              Tailored health programs and lifestyle plans that adapt with you,
              ensuring optimal wellness at every stage of life.
            </p>
            <Button type="primary" onClick={() => handleKnowMore("wellness")}>
              Know More
            </Button>
          </div>

          {/* Precision Care Card */}
          <div className="product-card">
            <h2 className="product-title">Precision Care</h2>
            <p className="product-subtitle">
              Medical Care Aligned to Your Unique Genetic Profile.
            </p>
            <div className="product-image-container">
              <img
                src={Product3}
                alt="Precision Care"
                className="product-image"
              />
            </div>
            <h3 className="product-heading">Treat Smarter. Live Longer.</h3>
            <p className="product-description">
              From preventive care to advanced treatment, we combine data and
              genetics to provide the right care at the right time.
            </p>
            <Button type="primary" onClick={() => handleKnowMore("precision")}>
              Know More
            </Button>
          </div>
        </div>
      </div>

      {/* About Tray */}
      <AboutSideTray
        isOpen={isATrayOpen}
        onClose={() => setATrayOpen(false)}
        type={trayType}
      />

      <div className="science-section" id="Background">
        <Stars count={20} />
        <div className="home-bg-vector">
          <img src={HomeVector} alt="Home Background" />
        </div>

        <div className="science-container">
          <div className="science-content-wrapper">
            <div className="science-content">
              {/* Left Column */}
              <div className="science-left">
                <h1 className="science-heading">
                  Science Behind Our <span className="highlight">Product</span>
                </h1>
                <p className="science-description">
                  Where science meets you in personalized care, powered by
                  genetics, precision medicine, and the science of you.
                  <br />
                  <br />
                  Discover a smarter, safer, DNA-driven way to live well.
                </p>
                <Button type="primary" onClick={handleLearnMoreClick}>
                  Learn More
                </Button>
              </div>

              {/* Right Column - 2x2 Steps */}
              <div className="science-steps-container">
                <div className="science-steps-grid">
                  {[
                    {
                      number: "01",
                      title: "DECODE THE HELIX",
                      desc: "Discover how your genes influence your health, risks, and resilience.",
                    },
                    {
                      number: "02",
                      title: "PERSONALIZED THE JOURNEY",
                      desc: "Build care pathways tailored to your unique genetic blueprint.",
                    },
                    {
                      number: "03",
                      title: "PREVENT WITH PURPOSE",
                      desc: "Use advanced genomics to identify disease risks—before symptoms arise.",
                    },
                    {
                      number: "04",
                      title: "TREAT WITH PRECISION",
                      desc: "Deliver therapies that align with your biology, not assumptions.",
                    },
                  ].map((step) => (
                    <div className="step-card" key={step.number}>
                      <div className="step-number">{step.number}</div>
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

        <ScienceSideTray isOpen={isSTrayOpen} onClose={handleTrayClose} />
      </div>

      <div className="vision-section" id="About">
        {" "}
        <Stars count={20} />
        <div className="vision-header">
          <h1>
            Visionaries In Medicine, Technology, and <br />
            <span className="highlight">Human-Centered Design.</span>
          </h1>
          <p className="subtitle">
            A Pioneering Team Shaping The Future Of Personalized
            Healthcare—Where Precision Meets Compassion.
          </p>
        </div>
        <div className="vision-content">
          <div className="vision-image">
            <img src={VisionImg} alt="Visionary Doctor" />
          </div>

          <div className="vision-text">
            <p>
              At Hyperlink, we are scientists, oncologists, technologists, and
              design thinkers— united by a singular purpose: to redefine what
              healthcare can be.
            </p>
            <p>
              We don’t just build products. We create intelligent, deeply
              personal solutions that connect genetics, medicine, and technology
              into one seamless experience of care. From life-saving cancer
              innovations to DNA-powered nutrition and vaccination platforms,
              our work is rooted in rigorous science and guided by empathy.
            </p>
            <p>
              With every breakthrough, we move closer to a future where
              personalized care isn’t a privilege—it’s the global standard.
            </p>
            <h3>
              We’re not just imagining the future of healthcare. We’re
              engineering it one life, one genome, one innovation at a time.
            </h3>
            <Button type="primary" onClick={() => setWIsTrayOpen(true)}>
              Who We Are
            </Button>{" "}
          </div>
        </div>
        <WhoAreWeSideTray
          isOpen={isWTrayOpen}
          onClose={() => setWIsTrayOpen(false)}
        />
      </div>

      <div className="banner-container">
        {" "}
        <Stars count={20} />
        <div className="banner-text">
          <h1>
            Be The First To Experience
            <span className="highlight">Personalized Healthcare</span>
          </h1>
          <p>
            We’re building something extraordinary—where your health journey
            begins with your DNA. Join our early access list to stay informed
            and get priority access to Hyperlink's upcoming products and
            features.
          </p>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="First Name" required />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
            />
          </div>

          <input type="email" name="email" placeholder="Email" required />

          <Button type="submit" variant="primary">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          {result && (
            <div
              className={`form-result ${
                result.includes("Success") ? "success" : "error"
              }`}
            >
              {result}
            </div>
          )}
        </form>
        <ThankyouSideTray
          isOpen={isThankyouOpen}
          onClose={() => setIsThankyouOpen(false)}
        />
      </div>
    </>
  );
};

export default Home;
