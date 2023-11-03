import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      { <TopNavigationBar/>}
    </div>
  );
};

export default HomeRoute;
