import "./MediaRight.css";

const ImageDetails = ({
  image,
  title,
  description,
  description2,
  description3,
  description4,
  description5,
  description6,
  array,
}) => {
  return (
    <div className="image-details">
      <div className="image-details-details">
        <p className="image-details-description">{description}</p>
        <p className="image-details-description">{description2}</p>
        <p className="image-details-description">{description3}</p>
        <ul>
          {array.map((list, index) => (
            <li className="bullet-list" key={index}>
              {list}
            </li>
          ))}
        </ul>
        <p className="image-details-description">{description4}</p>
        <p className="image-details-description">{description5}</p>
        <p className="image-details-description">{description6}</p>
      </div>
      <div className="image-details-image-container">
        <img src={image} alt={title} className="image-details-image" />
      </div>
    </div>
  );
};

export default ImageDetails;
