
import React from 'react';
import { FavoritesProvider } from './components/FavoritesContext'
import './App.scss'
import HomeRoute from './routes/HomeRoute';

const App = () => {
  return (
    <div className="App">
      <FavoritesProvider>
        <HomeRoute />
      </FavoritesProvider>
    </div>
  );
}

export default App;