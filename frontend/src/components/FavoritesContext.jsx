// FavoritesContext.js
import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (photoId) => {
    setFavorites([...favorites, photoId]);
  };

  const removeFavorite = (photoId) => {
    setFavorites(favorites.filter(id => id !== photoId));
  };

  const isFavorite = (photoId) => {
    return favorites.includes(photoId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
