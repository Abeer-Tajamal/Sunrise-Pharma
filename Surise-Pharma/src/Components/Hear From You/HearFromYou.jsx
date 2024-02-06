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
            At Sunrise Pharmacy, we’re committed to helping you live a healthier
            life. Our pharmacy staff would be happy to help you with any
            questions you may have.
          </p>
          <ColorButtons
            buttonLink="mailto:sunrisepharmrx@gmail.com"
            label="Send an Email"
          />
          <p>
            Phone:&nbsp;
            <Link
              to="tel:475-209-9284"
              style={{ textDecoration: "none", color: "green" }}
            >
              475-209-9284
            </Link>
          </p>
          <p>Fax: 475-209-9286</p>
        </div>
      </div>
    </>
  );
};

export default HearFromYou;
