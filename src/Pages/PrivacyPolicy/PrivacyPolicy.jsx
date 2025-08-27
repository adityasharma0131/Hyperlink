import React from "react";
import Stars from "../../Components/Stars";

import "./style.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <Stars count={40} />

      <header className="privacy-header">
        <h2>
          Read Our <span className="home-highlight">Privacy & Policy</span>
        </h2>
        <p>
          This Privacy Policy describes how we collect, use, and protect your
          personal data. Please read it carefully to understand our practices.
        </p>
      </header>

      <section className="privacy-section">
        <h3>Information We Collect</h3>
        <ul>
          <li>Personal details like name, email, and contact information.</li>
          <li>Health-related information for treatment and diagnosis.</li>
          <li>Demographic data such as age, gender, and location.</li>
          <li>Usage data like IP address, browser type, and device details.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>How We Use Your Information</h3>
        <ul>
          <li>To provide medical consultations and treatment.</li>
          <li>To schedule appointments and send reminders.</li>
          <li>To improve healthcare services and analytics.</li>
          <li>To comply with legal and regulatory obligations.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>Information Sharing</h3>
        <ul>
          <li>Authorized healthcare professionals.</li>
          <li>Diagnostic labs and pharmacies.</li>
          <li>Government health agencies if required by law.</li>
          <li>Third-party vendors under strict agreements.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>Data Security</h3>
        <p>
          All data is stored securely with encryption and role-based access.
          Regular audits and backups are performed to prevent unauthorized
          access or loss.
        </p>
      </section>

      <section className="privacy-section">
        <h3>Your Choices</h3>
        <ul>
          <li>Access and update your personal information.</li>
          <li>Withdraw consent for data usage.</li>
          <li>Request deletion of your records.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns, contact us at:{" "}
          <a href="mailto:info@hyperlink.health">info@hyperlink.health</a>
        </p>
      </section>

      <footer className="privacy-footer">
        <p>
          By using our services, you agree to the terms set forth in this
          Privacy Policy.
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
