// PhotoFavButton.js
import React, { useContext } from 'react';
import '../styles/PhotoFavButton.scss';
import { FavoritesContext } from './FavoritesContext'; // Import the context
import FavIcon from './FavIcon';

function PhotoFavButton({ photoId }) { // Accept photoId as a prop
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const isFavorited = isFavorite(photoId);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(photoId);
    } else {
      addFavorite(photoId);
    }
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
