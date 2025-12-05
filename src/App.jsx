import React from "react";
import { Box } from "@mui/material"; // <-- Add this
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <Box component="main" sx={{ flex: 1, mt: { xs: 8, sm: 10 } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
