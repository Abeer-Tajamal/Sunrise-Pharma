import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="leftContent">
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
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            </li>
            <li className="underlineText">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Service
              </Link>
            </li>
            <li className="underlineText">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Contact
              </Link>
            </li>
            <li className="underlineText">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Refill
              </Link>
            </li>
            <li className="underlineText">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
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
              <strong>Leave Us A Review</strong>
            </li>
            <li>
              Let us know how you enjoyed your pharmacy experience here at
              Sunrise Pharmacy.
            </li>
            <br />
            <li>
              <Button variant="contained" color="success">
                <Link
                  to="http://search.google.com/local/writereview?placeid=ChIJdenmwm116IkRQ_JDQmbs_4U"
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                >
                  Submit a Review
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
