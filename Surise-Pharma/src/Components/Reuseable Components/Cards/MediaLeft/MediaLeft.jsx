import "./MediaLeft.css";

const MediaLeft = ({ imgSrc, content, title }) => {
  return (
    <div className="outer-container">
      <div className="left-image-div">
        <img src={imgSrc} alt="Additional Services" className="inner-Image" />
      </div>
      <div className="media-bottom">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default MediaLeft;
