import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
