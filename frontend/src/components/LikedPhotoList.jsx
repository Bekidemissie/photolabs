import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

const LikedPhotosList = () => {
  const { favorites } = useContext(FavoritesContext);

  // Here you would fetch the photo details based on the favorites IDs
  // and return a list of photo components

  return (
    <div className="liked-photos-list">
      {favorites.map(photoId => (
        // Render each liked photo here
        <div key={photoId}>Photo {photoId}</div>
      ))}
    </div>
  );
};

export default LikedPhotosList;
