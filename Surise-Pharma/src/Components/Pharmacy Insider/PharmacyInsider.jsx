import "./PharmacyInsider.css";
import ColorButtons from "../Reuseable Components/Button/button";

const PharmacyInsider = () => {
  return (
    <>
      <div className="insider-section">
        <div>
          <br />
          <br />
          <h2>Join the Pharmacy Insider community.</h2>
          <p>
            Join our newsletter to receive promotions, health updates, and exclusive savings.
          </p>
          <br />
          <input type="text" id="email" placeholder="Email address" />
          <ColorButtons buttonLink="" label="Subscribe Here" />
        </div>
      </div>
    </>
  );
};

export default PharmacyInsider;
