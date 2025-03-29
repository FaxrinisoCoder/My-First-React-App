import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <div className="continer3">
      <footer className="footer">
        <div className="footer_left">
          <i className="footer_icon">{<FaFacebookF />}</i>
          <i className="footer_icon">{<FaInstagram />}</i>
          <i className="footer_icon">{<FaTwitter />}</i>
          <i className="footer_icon">{<FaPinterestP />}</i>
          <i className="footer_icon">{<IoLogoTiktok />}</i>
          <i className="footer_icon">{<FaWhatsapp />}</i>
          <i className="footer_icon">{<FaYoutube />}</i>
        </div>
        <div className="footer_right">
          <p className="footer_text">© Start, 2022. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
