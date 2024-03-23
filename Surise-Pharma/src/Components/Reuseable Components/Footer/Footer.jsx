import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div>
          <ul>
            <li>
              <strong className="footer-headings">Contact Us</strong>
            </li>
          </ul>
          <ul>
            <li className="underlineFooterText">
              <PhoneIcon fontSize="small" />
              &nbsp; Phone: &nbsp;
              <Link
                to="tel:475-209-9284"
                style={{ textDecoration: "none", color: "#0d58a6" }}
              >
                <span className="underlineFooterText">475-209-9284</span>
              </Link>
            </li>
            <li className="underlineFooterText">
              <LocationOnIcon fontSize="small" />
              &nbsp;
              <Link
                to="https://goo.gl/maps/gRCqUduCEt3FBXvn6"
                target="_blank"
                style={{ textDecoration: "none", color: "#0d58a6" }}
              >
                <span className="underlineFooterText">
                  240 Indian River Rd Orange, CT 0647
                </span>
              </Link>
            </li>
            <li className="underlineFooterText">
              <EmailIcon fontSize="small" />
              &nbsp;
              <Link
                to="mailto:sunrisepharmrx@gmail.com"
                style={{ textDecoration: "none", color: "#0d58a6" }}
              >
                <span className="underlineFooterText">
                  sunrisepharmrx@gmail.com
                </span>
              </Link>
            </li>
            <br />
            <li className="logo">
              <Link to="/">
                <img
                  className="logo-image"
                  src="./Assets/Home Page/Sunrise Pharmacy Logo.png"
                  alt="Sunrise Pharmacy"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <strong className="footer-headings">Quick Links</strong>
            </li>
          </ul>
          <ul>
            <li className="underlineFooterText">
              <Link to="/" style={{ textDecoration: "none", color: "#0d58a6" }}>
                <span className="underlineFooterText">Home</span>
              </Link>
            </li>
            <li className="underlineFooterText">
              <Link
                to="/about-us"
                style={{ textDecoration: "none", color: "#0d58a6" }}
              >
                <span className="underlineFooterText">About</span>
              </Link>
            </li>
            <li className="underlineFooterText">
              <Link
                to="/refill"
                style={{ textDecoration: "none", color: "#0d58a6" }}
              >
                <span className="underlineFooterText">Refill</span>
              </Link>
            </li>
            <li className="underlineFooterText">
              <Link
                to="/pharmacy-near-me-orange-ct"
                style={{ textDecoration: "none", color: "#0d58a6" }}
              >
                <span className="underlineFooterText">Transfer</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <strong className="footer-headings">Services</strong>
            </li>
          </ul>
          <ul>
            <li className="underlineFooterText">
              <Link
                to="/med-pre-pours"
                style={{ textDecoration: "none", color: "#0d58a6" }}
              >
                <span className="underlineFooterText">Med Pre-Pours</span>
              </Link>
            </li>
            <li className="underlineFooterText">
              <Link
                to="/immunizations"
                style={{ textDecoration: "none", color: "#0d58a6" }}
              >
                <span className="underlineFooterText">Immunization</span>
              </Link>
            </li>
            <li className="underlineFooterText">
              <Link
                to="/medication-adherence"
                style={{ textDecoration: "none", color: "#0d58a6" }}
              >
                <span className="underlineFooterText">
                  Medication Adherence
                </span>
              </Link>
            </li>
            <li className="underlineFooterText">
              <Link
                to="/medication-synchronization"
                style={{ textDecoration: "none", color: "#0d58a6" }}
              >
                <span className="underlineFooterText">
                  Medication Synchronization
                </span>
              </Link>
            </li>
            <li className="underlineFooterText">
              <Link
                to="/medication-therapy-management"
                style={{ textDecoration: "none", color: "#0d58a6" }}
              >
                <span className="underlineFooterText">
                  Medication Management
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <strong className="footer-headings">Visiting Hours</strong>
            </li>
          </ul>
          <ul className="visiting-hours">
            <li>Mon &nbsp; ------------- &nbsp; 09:00 - 06:00</li>
            <li>Tue &nbsp;&nbsp; ------------- &nbsp; 09:00 - 06:00</li>
            <li>Wed &nbsp; ------------- &nbsp; 09:00 - 06:00</li>
            <li>Thu &nbsp;&nbsp; ------------- &nbsp; 09:00 - 06:00</li>
            <li>Fri &nbsp;&nbsp; &nbsp; ------------- &nbsp; 09:00 - 06:00</li>
            <li>Sat &nbsp;&nbsp;&nbsp; ------------- &nbsp; 09:00 - 02:00</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#0d58a6",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        Copyrights 2024. All rights are reserved by Sunrise Pharmacy.
      </div>
    </>
  );
};

export default Footer;
