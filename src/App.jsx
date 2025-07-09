import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page components
import Home from "./Pages/Home/Home";
import AboutApp from "./Pages/AboutApp/AboutApp";
import Blogs from "./Pages/Blogs/Blogs";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";

// UI components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-app" element={<AboutApp />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
