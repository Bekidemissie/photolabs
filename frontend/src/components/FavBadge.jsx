import React, { useState, useContext } from 'react';
import FavIcon from './FavIcon';
import LikedPhotosList from './LikedPhotoList'; // This would be your new component for the list
import '../styles/FavBadge.scss';
import { FavoritesContext } from './FavoritesContext'; // Import the context

const FavBadge = () => {
  const [showLikedPhotos, setShowLikedPhotos] = useState(false);
  const { favorites } = useContext(FavoritesContext); // Get the list of favorites from the context
  
  const toggleLikedPhotos = () => {
    setShowLikedPhotos(!showLikedPhotos);
  };

  return (
    <div className='fav-badge'>
      <div onClick={toggleLikedPhotos}>
        <FavIcon displayAlert={favorites.length > 0}/>
      </div>
      {showLikedPhotos && <LikedPhotosList />} 
    </div>
  ); 
};

export default FavBadge;
