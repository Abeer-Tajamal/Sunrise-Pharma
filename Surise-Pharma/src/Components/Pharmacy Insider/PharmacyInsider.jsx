import "./PharmacyInsider.css";
import ColorButtons from "../Reuseable Components/Button/button"


const PharmacyInsider = () => {
    return (
        <>
            <div className="insider-section">
                <div>
                    <br />
                    <br />
                    <h2>Become a Pharmacy Insider</h2>
                    <p>Subscribe to our newsletter for promotions, health news and savings</p>
                    <br />
                    <input type="text" id="email" placeholder="Email address" />
                    <ColorButtons buttonLink="" label="Subscribe Here" />
                </div>
            </div>
        </>
    );
};

export default PharmacyInsider;