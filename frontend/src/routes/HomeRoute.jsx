import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  // State to manage if the modal is visible
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="home-route">
      <TopNavigationBar />
      {/* Button to open modal */}
      <button onClick={openModal}>Show Photo Details</button>
      
      {/* Conditionally render the PhotoDetailsModal */}
      {isModalVisible && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};

export default HomeRoute;
