import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import PhotoList from './PhotoList';
import TopicList from './TopicList';


const TopNavigation = () => {
  return ( 
    <>
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <FavBadge isFavPhotoExist={true} />
    </div>
    <TopicList/>
        <PhotoList />
    </>
  )
}

export default TopNavigation;