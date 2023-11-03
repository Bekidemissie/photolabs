import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photoData }) => { 
  // Ensure that photoData has an 'id' field
  return (
    <div className="photo-list__item">
      {/* Pass the photoId to the PhotoFavButton */}
      <PhotoFavButton photoId={photoData.id} />
      <img src={photoData.urls.regular} alt="Uploaded by user" className="photo-list__image" />
      <div className="photo-info">
        <div className="photo-list__user-location">
          {photoData.location.city}, {photoData.location.country}
        </div>
        <div className="photo-list__user-info">
          <img src={photoData.user.profile} alt={photoData.user.name} className="photo-list__user-profile" />
          <span className="username">{photoData.user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
