import "./PharmacyInsider.css";
import ColorButtons from "../Reuseable Components/Button/button";

const PharmacyInsider = () => {
  return (
    <>
      <div className="insider-section">
        <div>
          <br />
          <br />
          <h2>Schedule your vaccination appointment</h2>
          <p>
            Our devoted team of medical experts is dedicated to providing secure and efficient vaccinations in a convenient and pleasant setting.
          </p>
          <br />
          <ColorButtons buttonLink="/vaccines" label="Vaccines" />
        </div>
      </div>
    </>
  );
};

export default PharmacyInsider;
