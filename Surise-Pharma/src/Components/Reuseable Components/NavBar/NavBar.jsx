import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ColorButtons from "../Button/button";
import "./NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener when the dropdown menu is opened
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      // Remove event listener when the dropdown menu is closed
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            className="logo-image"
            src="./Assets/Home Page/Sunrise Pharmacy Logo.png"
            alt="Sunrise Pharmacy"
          />
        </Link>
      </div>
      <div className="left-container">
        <div className="topLeft-container">
          <div>
            <Link to="/" style={{ textDecoration: "none", color: "#0d58a6" }}>
              <button
                className="button-css"
                style={{
                  color: location.pathname === "/" ? "#7FC602" : "#0d58a6",
                }}
              >
                Home |
              </button>
            </Link>
          </div>
          <div>
            <Link
              to="/about-us"
              style={{ textDecoration: "none", color: "#0d58a6" }}
            >
              <button
                className="button-css"
                style={{
                  color:
                    location.pathname === "/about-us" ? "#7FC602" : "#0d58a6",
                }}
              >
                About Us |
              </button>
            </Link>
          </div>
          <div className="dropdown" ref={dropdownRef} onClick={toggleDropdown}>
            <button
              className="dropdown-toggle"
              style={{
                color:
                  location.pathname === "/services" ? "#7FC602" : "#0d58a6",
              }}
            >
              Services |
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                <Link
                  to="/pharmacy"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/pharmacy" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Pharmacy</li>
                </Link>
                <Link
                  to="/diabetes-specialized-care-center"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/diabetes-specialized-care-center"
                        ? "#7FC602"
                        : "#0d58a6",
                  }}
                >
                  <li>Diabetes Specialized Care Center</li>
                </Link>
                <Link
                  to="/med-pre-pours"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/med-pre-pours"
                        ? "#7FC602"
                        : "#0d58a6",
                  }}
                >
                  <li>Med Pre-Pours</li>
                </Link>
                <Link
                  to="/durable-medical-equipment"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/durable-medical-equipment"
                        ? "#7FC602"
                        : "#0d58a6",
                  }}
                >
                  <li>Durable Medical Equipment</li>
                </Link>
                <Link
                  to="/health-screenings"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/health-screenings"
                        ? "#7FC602"
                        : "#0d58a6",
                  }}
                >
                  <li>Health Screenings</li>
                </Link>
                <Link
                  to="/immunizations"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/immunizations"
                        ? "#7FC602"
                        : "#0d58a6",
                  }}
                >
                  <li>Immunizations</li>
                </Link>
                <Link
                  to="/leader-products"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/leader-products"
                        ? "#7FC602"
                        : "#0d58a6",
                  }}
                >
                  <li>LEADER™ Products</li>
                </Link>
                <Link
                  to="/medication-adherence"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/medication-adherence"
                        ? "#7FC602"
                        : "#0d58a6",
                  }}
                >
                  <li>Medication Adherence</li>
                </Link>
                <Link
                  to="/medication-synchronization"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/medication-synchronization"
                        ? "#7FC602"
                        : "#0d58a6",
                  }}
                >
                  <li>Medication Synchronization</li>
                </Link>
                <Link
                  to="/medication-therapy-management"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/medication-therapy-management"
                        ? "#7FC602"
                        : "#0d58a6",
                  }}
                >
                  <li>Medication Therapy Management</li>
                </Link>
                <Link
                  to="/nutrient-depletion-counseling"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/nutrient-depletion-counseling"
                        ? "#7FC602"
                        : "#0d58a6",
                  }}
                >
                  <li>Nutrient Depletion Counseling</li>
                </Link>
                <Link
                  to="/home-delivery"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/home-delivery"
                        ? "#7FC602"
                        : "#0d58a6",
                  }}
                >
                  <li>Home Delivery</li>
                </Link>
              </ul>
            )}
          </div>
          <div>
            <Link
              to="/free-delivery"
              style={{ textDecoration: "none", color: "#0d58a6" }}
            >
              <button
                className="button-css"
                style={{
                  color:
                    location.pathname === "/free-delivery"
                      ? "#7FC602"
                      : "#0d58a6",
                }}
              >
                Free Delivery |
              </button>
            </Link>
          </div>
          <div>
            <Link
              to="/insurance"
              style={{ textDecoration: "none", color: "#0d58a6" }}
            >
              <button
                className="button-css"
                style={{
                  color:
                    location.pathname === "/insurance" ? "#7FC602" : "#0d58a6",
                }}
              >
                Insurance |
              </button>
            </Link>
          </div>
          <div>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#0d58a6" }}
            >
              <button
                className="button-css"
                style={{
                  color:
                    location.pathname === "/contact" ? "#7FC602" : "#0d58a6",
                }}
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottomLeft-container">
        <ColorButtons buttonLink="/refill" label="Refill" />
        <ColorButtons
          buttonLink="/pharmacy-near-me-orange-ct"
          label="Transfer a Prescription"
        />
        <ColorButtons
          buttonTarget="_blank"
          buttonLink="http://search.google.com/local/writereview?placeid=ChIJdenmwm116IkRQ_JDQmbs_4U"
          label="Submit a Review"
        />
      </div>
    </nav>
  );
};

export default Navbar;
