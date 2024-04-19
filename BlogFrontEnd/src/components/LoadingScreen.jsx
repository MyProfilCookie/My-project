/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../assets/scss/loadingScreen.scss';


const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <a href="/" target="_self">
        <FontAwesomeIcon icon={faSpinner} className="loading-logo" />

      </a>
    </div>
  );
};

export default LoadingScreen;