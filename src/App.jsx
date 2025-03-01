import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./layout/Footer";
import ContactUs from "./pages/ContactUs";
import TravelToJordan from "./pages/TravelToJordan";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/travel-to-jordan" element={<TravelToJordan />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
