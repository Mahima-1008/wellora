import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-social">
          <a href="https://instagram.com" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-text">
  © 2026 Wellora — Women’s Hygiene & Wellness Store
</p>


        
      </div>
    </footer>
  );
}

export default Footer;
