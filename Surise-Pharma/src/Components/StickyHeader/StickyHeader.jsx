import { Link } from "react-router-dom";
import "./StickyHeader.css";

const Home = () => {
  return (
    <strong className="header">
      Interested in the COVID-19 Vaccine?&nbsp;
      <Link to="/coronavirus" className="link">
        Get on the waitlist
      </Link>
    </strong>
  );
};

export default Home;
