import React from "react";
import "./style.css";
import Stars from "../../Components/Stars";

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <Stars count={40} />

      <header className="terms-header">
        <h2>
          Read Our <span className="home-highlight">Terms of Service</span>
        </h2>
        <p>
          Please review our Terms of Service carefully. By using our services,
          you agree to the collection, use, and sharing of your health
          information in accordance with these terms.
        </p>
      </header>

      <section className="terms-section fade-in">
        <h3>Health Information Exchange Consent</h3>
        <p>
          A Health Information Exchange (“Exchange”) allows your health data to
          be electronically shared by participating medical groups, hospitals,
          labs, and providers you choose. By creating an account and using
          Hyperlink Health, you give free, informed, explicit, and voluntary
          consent for the collection, storage, use, and sharing of your
          healthcare data.
        </p>
      </section>

      <section className="terms-section fade-in">
        <h3>Nature of Data Collected</h3>
        <ul>
          <li>
            Personal Identifiable Information (PII): Name, age, contact,
            government ID, etc.
          </li>
          <li>
            Personal Health Records (PHR): Medical history, prescriptions, test
            reports, vaccination details, genetic data.
          </li>
          <li>Clinical notes and consultation summaries.</li>
          <li>Device-collected health data (e.g., wearables, uploads).</li>
        </ul>
      </section>

      <section className="terms-section fade-in">
        <h3>Purpose of Data Use</h3>
        <ul>
          <li>Medical diagnosis, treatment, and follow-up care.</li>
          <li>
            Sharing with registered doctors, therapists, nutritionists, and
            labs.
          </li>
          <li>
            Personalized care plans, prescriptions, lab orders, and preventive
            insights.
          </li>
          <li>Compliance with healthcare regulations.</li>
          <li>
            Research, anonymized analytics, and product development (with
            identifiers removed).
          </li>
        </ul>
      </section>

      <section className="terms-section fade-in">
        <h3>Data Sharing & Disclosure</h3>
        <ul>
          <li>
            With registered healthcare professionals (upon your consent or
            consultation).
          </li>
          <li>With diagnostic labs, pharmacies, or service providers.</li>
          <li>As required by law or valid legal processes.</li>
        </ul>
      </section>

      <section className="terms-section fade-in">
        <h3>Data Security & Retention</h3>
        <p>
          All data is stored in encrypted form as per the Digital Personal Data
          Protection Act, 2023. Health records are retained securely as long as
          you are an active user or as required under law.
        </p>
      </section>

      <section className="terms-section fade-in">
        <h3>Right to Withdraw Consent</h3>
        <ul>
          <li>
            You may withdraw consent at any time by deleting your account or
            contacting{" "}
            <a href="mailto:info@hyperlinkhealth.com">
              info@hyperlinkhealth.com
            </a>
            .
          </li>
          <li>
            Withdrawal of consent does not affect lawful prior processing of
            your data.
          </li>
        </ul>
      </section>

      <section className="terms-section fade-in">
        <h3>Acknowledgment</h3>
        <ul>
          <li>You have read and understood the purposes of data use.</li>
          <li>You voluntarily consent to data processing as outlined.</li>
          <li>
            You may access, correct, or delete your data per our Privacy Policy
            and law.
          </li>
        </ul>
      </section>

      <section className="terms-section fade-in">
        <h3>Revocation</h3>
        <p>
          This consent remains until you revoke it by managing your settings in
          the Hyperlink Health app or website. Health information already shared
          with providers remains protected under confidentiality obligations.
        </p>
      </section>

      <footer className="terms-footer">
        <p>
          By using our services, you acknowledge and agree to these Terms of
          Service.
        </p>
      </footer>
    </div>
  );
};

export default TermsOfService;
