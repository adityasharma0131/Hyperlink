import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page components
import Home from "./Pages/Home/Home";

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
