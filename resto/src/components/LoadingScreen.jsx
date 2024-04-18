/* eslint-disable no-unused-vars */
import React from 'react';
import reactLogo from '../assets/react.svg';
import '../assets/scss/loadingScreen.scss'; 


const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="loading-logo" alt="Loading React Logo" />
        </a>
    </div>
  );
};

export default LoadingScreen;