import React from 'react';
import './MediaRight.css';

const ImageDetails = ({ image, title, description }) => {
  return (
    <div className="image-details">
      <div className="image-details__details">
        <h2 className="image-details__title">{title}</h2>
        <p className="image-details__description">{description}</p>
      </div>
      <div className="image-details__image-container">
        <img src={image} alt={title} className="image-details__image" />
      </div>
    </div>
  );
};


export default ImageDetails;