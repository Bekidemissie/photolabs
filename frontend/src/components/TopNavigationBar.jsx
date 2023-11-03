import React, { useContext } from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';
import PhotoList from './PhotoList';
import TopicList from './TopicList';
import { FavoritesContext } from './FavoritesContext'; // Import the context

const TopNavigationBar = () => {
  // Use the useContext hook to access the FavoritesContext
  const favoritesContext = useContext(FavoritesContext);

  // You can now access favorites, addFavorite, removeFavorite, etc., from favoritesContext
  // For example, to check if there are any favorites you can check favoritesContext.favorites array length

  const hasFavorites = favoritesContext.favorites.length > 0;

  return ( 
    <>
      <div className="top-nav-bar">
        <span className="top-nav-bar__logo">PhotoLabs</span>
        {/* Pass a boolean to indicate if there are favorites */}
        <FavBadge isFavPhotoExist={hasFavorites} />
      </div>
      <TopicList />
      <PhotoList />
    </>
  );
}

export default TopNavigationBar;
