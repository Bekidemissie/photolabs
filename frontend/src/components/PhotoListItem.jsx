import React from "react";

import "../styles/PhotoListItem.scss";

import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ( { photoData }) => {
return (

  <div className="photo-list__item">
    <PhotoFavButton/>
  <img src={photoData.imageSource} alt="Uploaded by user" className="photo-list__image" />
  <div className="photo-info">
    <div className="photo-list__user-location">
      {photoData.location.city}, {photoData.location.country}
    </div>
    <div className="photo-list__user-info">
      <img src={photoData.profile} alt={photoData.username} className="photo-list__user-profile" />
      <span className="username">{photoData.username}</span>
    </div>
  </div>
</div>
);

};

export default PhotoListItem;
