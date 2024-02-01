import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./Address.css";

const Address = () => {
  return (
    <div className="container">
      <div className="flexDisplay">
        <LocationOnIcon fontSize="small" />
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
        <PhoneIcon fontSize="small" />
        <strong>
          &nbsp;Phone:&nbsp;
          <Link to="tel:475-209-9284" className="map-link">
            <span className="underlineText">475-209-9284</span>
          </Link>
        </strong>
      </div>

      <div className="flexDisplay">
        <AccessTimeIcon fontSize="small" />
        <strong>
          Mon-Fri: 9a.m.-6p.m. | Sat: 9a.m.-2p.m. | Sun: Closed
        </strong>
      </div>
    </div>
  );
};

export default Address;