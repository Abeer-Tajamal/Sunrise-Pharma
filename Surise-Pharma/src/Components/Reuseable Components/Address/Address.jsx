import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./Address.css";

const Address = () => {
  return (
    <div className="container">
      <strong>Welcome To Sunrise Pharmacy</strong>

      <div className="flexDisplay">
        <LocationOnIcon />
        <Link
          to="https://goo.gl/maps/gRCqUduCEt3FBXvn6"
          target="_blank"
          className="map-link"
        >
          <strong className="underlineText">
            240 Indian River Rd Orange, CT 0647
          </strong>
        </Link>
      </div>

      <div className="flexDisplay">
        <PhoneIcon />
        <strong>
          &nbsp;Phone:&nbsp;
          <Link to="tel:475-209-9284" className="map-link">
            <span className="underlineText">475-209-9284</span>
          </Link>
        </strong>
      </div>

      <div className="flexDisplay">
        <AccessTimeIcon />
        &nbsp;
        <strong>Mon-Fri: 9a.m.-6p.m.</strong>
        <strong>| Sat: 9a.m.-2p.m.</strong>
        <strong>| Sun: Closed</strong>
      </div>
    </div>
  );
};

export default Address;
