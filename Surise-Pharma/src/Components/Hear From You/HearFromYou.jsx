import { Link } from "react-router-dom";
import "./HearFromYou.css";
import ColorButtons from "../Reuseable Components/Button/button";

const HearFromYou = () => {
  return (
    <>
      <div className="hear-section">
        <div className="love-to-hear-section">
          <img src="./Assets/Home Page/Sunrise Pharmacy Logo.png" alt="" />
          <h2>We'd Love to Hear From You</h2>
          <p>
            At Sunrise Pharmacy, our dedication lies in supporting you to lead a
            healthier life. Our pharmacy team is ready and willing to assist
            with any inquiries you may have.
          </p>
          <ColorButtons
            buttonLink="mailto:sunrisepharmrx@gmail.com"
            label="Send an Email"
          />
          <p style={{ marginBottom: "5px" }}>
            Phone:&nbsp;
            <Link
              to="tel:475-209-9284"
              style={{ textDecoration: "none", color: "green" }}
            >
              <span className="underline-text">475-209-9284</span>
            </Link>
          </p>
          <p style={{ marginTop: "5px" }}>Fax: 475-209-9286</p>
        </div>
      </div>
    </>
  );
};

export default HearFromYou;
