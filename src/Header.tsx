import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "./assets/Frame_4.svg";
import menu from "./assets/list_1.png";
import X from "./assets/delFP.webp";
import "./Header.css";

const Header = () => {
  const [change, setChange] = useState(false);

  const toggle = () => {
    setChange(!change);
  };

  return (
    <header className="header">
      <div className="continer1">
        <div className="header_left">
          <img className="header_logo" src={logo} alt="Logo" />
        </div>
        <div className="header_right">
          <img
            className={`menu ${change ? "active" : ""}`}
            src={change ? X : menu}
            alt="menu icon"
            onClick={toggle}
          />
          <nav className={`header_nav ${change ? "active" : ""}`}>
            <Link to="/" className="link" onClick={toggle}>
              Home
            </Link>
            <Link to="/portfolio" className="link" onClick={toggle}>
              Portfolio
            </Link>
            <Link to="/services" className="link" onClick={toggle}>
              Services
            </Link>
            <Link to="/contact" className="link" onClick={toggle}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
