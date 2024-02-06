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
                <Link
                  to="/covid-19-testing"
                  onClick={() => handleTabClick("COVID-19 Testing")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "COVID-19 Testing" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>COVID-19 Testing</li>
                </Link>
                <Link
                  to="/diabetes-specialized-care-center"
                  onClick={() => handleTabClick("Diabetes Specialized Care Center")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Diabetes Specialized Care Center" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Diabetes Specialized Care Center</li>
                </Link>
                <Link
                  to="/med-pre-pours"
                  onClick={() => handleTabClick("Med Pre-Pours")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Med Pre-Pours" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Med Pre-Pours</li>
                </Link>
                <Link
                  to="/durable-medical-equipment"
                  onClick={() => handleTabClick("Durable Medical Equipment")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Durable Medical Equipment" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Durable Medical Equipment</li>
                </Link>
                <Link
                  to="/erectile-dysfunction"
                  onClick={() => handleTabClick("Erectile Dysfunction")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Erectile Dysfunction" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Erectile Dysfunction</li>
                </Link>
                <Link
                  to="/health-screenings"
                  onClick={() => handleTabClick("Health Screenings")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Health Screenings" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Health Screenings</li>
                </Link>
                <Link
                  to="/immunizations"
                  onClick={() => handleTabClick("Immunizations")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Immunizations" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Immunizations</li>
                </Link>
                <Link
                  to="/leader-products"
                  onClick={() => handleTabClick("LEADER™ Products")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "LEADER™ Products" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>LEADER™ Products</li>
                </Link>
                <Link
                  to="/medication-adherence"
                  onClick={() => handleTabClick("Medication Adherence")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Medication Adherence" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Medication Adherence</li>
                </Link>
                <Link
                  to="/medication-synchronization"
                  onClick={() => handleTabClick("Medication Synchronization")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Medication Synchronization" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Medication Synchronization</li>
                </Link>
                <Link
                  to="/medication-therapy-management"
                  onClick={() => handleTabClick("Medication Therapy Management")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Medication Therapy Management" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Medication Therapy Management</li>
                </Link>
                <Link
                  to="/nutrient-depletion-counseling"
                  onClick={() => handleTabClick("Nutrient Depletion Counseling")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Nutrient Depletion Counseling" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Nutrient Depletion Counseling</li>
                </Link>
                <Link
                  to="/home-delivery"
                  onClick={() => handleTabClick("Home Delivery")}
                  style={{
                    textDecoration: "none",
                    color: selectedTab === "Home Delivery" ? "#7FC602" : "#0d58a6",
                  }}
                >
                  <li>Home Delivery</li>
                </Link>
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
