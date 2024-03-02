import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.css";
import ColorButtons from "../Button/button";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div>
          <ul>
            <li>
              <strong>Quick Links</strong>
            </li>
            <li className="underlineText">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </li>
            <li className="underlineText">
              <Link
                to="/about-us"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            </li>
            <li className="underlineText">
              <Link
                to="/pharmacy"
                style={{ textDecoration: "none", color: "white" }}
              >
                Service
              </Link>
            </li>
            <li className="underlineText">
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Link>
            </li>
            <li className="underlineText">
              <Link
                to="/refill"
                style={{ textDecoration: "none", color: "white" }}
              >
                Refill
              </Link>
            </li>
            <li className="underlineText">
              <Link
                to="/pharmacy-near-me-orange-ct"
                style={{ textDecoration: "none", color: "white" }}
              >
                Transfer
              </Link>
            </li>
            <li className="underlineText">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Account
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <strong>Contact Us</strong>
            </li>
            <li>
              <Link
                to="https://www.facebook.com/people/Sunrise-Pharmacy/100066406663162/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FacebookIcon />
              </Link>
            </li>
            <li>
              Phone:
              <Link
                to="tel:475-209-9284"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className="underlineText">475-209-9284</span>
              </Link>
            </li>
            <li>Fax: 475-209-9284</li>
            <li className="underlineText">
              <Link
                to="mailto:sunrisepharmrx@gmail.com"
                style={{ textDecoration: "none", color: "white" }}
              >
                sunrisepharmrx@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <strong>Services</strong>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <strong>Leave Us A Review</strong>
            </li>
            <li>
              Let us know how you enjoyed your pharmacy experience here at
              Sunrise Pharmacy.
            </li>
            <br />
            <li>
              <ColorButtons
                buttonTarget="_blank"
                buttonLink="http://search.google.com/local/writereview?placeid=ChIJdenmwm116IkRQ_JDQmbs_4U"
                label="Submit a Review"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
