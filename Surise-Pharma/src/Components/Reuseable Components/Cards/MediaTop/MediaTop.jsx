import { Link } from "react-router-dom";
import "./MediaTop.css";

const MediaTop = ({ imgSrc, imgLink, btnName, content }) => {
  return (
    <div className="container-media">
      <div className="media-top">
        <div className="image-div">
          <Link to={imgLink} style={{ textDecoration: "none" }}>
            <img src={imgSrc} alt="COVID-19 Testing" className="inner-image" />
          </Link>
        </div>
        <Link to={imgLink}>
          <button
            className="media-button"
            style={{ color: "#0d58a6", fontWeight: "bold", fontSize: "15px" }}
          >
            {btnName}
          </button>
        </Link>
      </div>
      <div className="media-bottom">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default MediaTop;
