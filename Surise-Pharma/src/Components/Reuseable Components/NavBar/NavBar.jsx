import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import ColorButtons from "../Button/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          className="logo-image"
          src="./Assets/Home Page/Sunrise Pharmacy Logo.png"
          alt="Sunrise Pharmacy"
        />
      </div>
      <div className="left-container">
        <div className="topLeft-container">
          <div>
            <Link to="/" style={{ textDecoration: "none", color: "#0d58a6" }}>
              <button
                className="button-css"
                onClick={() => handleTabClick("Home")}
                style={{
                  color: selectedTab === "Home" ? "#7FC602" : "#0d58a6",
                }}
              >
                Home
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
                onClick={() => handleTabClick("About")}
                style={{
                  color: selectedTab === "About" ? "#7FC602" : "#0d58a6",
                }}
              >
                About Us
              </button>
            </Link>
          </div>
          <div className="dropdown" onClick={toggleDropdown}>
            <button
              className="dropdown-toggle"
              onClick={() => handleTabClick("Services")}
              style={{
                color: selectedTab === "Services" ? "#7FC602" : "#0d58a6",
              }}
            >
              Services
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                <Link
                  to="/pharmacy"
                  onClick={() => handleTabClick("Pharmacy")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Pharmacy" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Pharmacy</li>
                </Link>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </div>
          <div>
            <Link
              to="/insurance"
              style={{ textDecoration: "none", color: "#0d58a6" }}
            >
              <button
                className="button-css"
                onClick={() => handleTabClick("Insurance")}
                style={{
                  color: selectedTab === "Insurance" ? "#7FC602" : "#0d58a6",
                }}
              >
                Insurance
              </button>
            </Link>
          </div>
          {/* <div className="dropdown" onClick={toggleDropdown}>
            <button
              className="dropdown-toggle"
              onClick={() => handleTabClick("Resources")}
              style={{
                color: selectedTab === "Resources" ? "#7FC602" : "#0d58a6",
              }}
            >
              Dropdown
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </div> */}
          <div>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#0d58a6" }}
            >
              <button
                className="button-css"
                onClick={() => handleTabClick("Contact")}
                style={{
                  color: selectedTab === "Contact" ? "#7FC602" : "#0d58a6",
                }}
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="bottomLeft-container">
          <ColorButtons buttonLink="/refill" label="Refill" />
          <ColorButtons
            buttonLink="/pharmacy-near-me-orange-ct"
            label="Transfer a Prescription"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
