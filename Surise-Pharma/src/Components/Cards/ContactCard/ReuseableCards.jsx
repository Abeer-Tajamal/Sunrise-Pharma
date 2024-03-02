import { Link } from "react-router-dom";
import "./ReuseableCards.css";

const ReuseableCards = ({ title, p1, p2, p3, LinkText, LinkText2 }) => {
  return (
    <div className="container-content">
      <h2 className="title-card-contact">{title}</h2>
      <p>
        {p1}
        <Link to="tel:475-209-9284" className="link-text">
          <span className="underline-hover">{LinkText}</span>
        </Link>
      </p>
      <p>{p2}</p>
      <p>
        {p3}
        <Link to="mailto:sunrisepharmrx@gmail.com" className="link-text">
          <span className="underline-hover">{LinkText2}</span>
        </Link>
      </p>
    </div>
  );
};

export default ReuseableCards;
