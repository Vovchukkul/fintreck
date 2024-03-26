import React from "react"
import './LoadingPage.scss';
import logo from '../../images/logo_fintreck2.png';

export const LoadingPage = () => {
  return (
    <div className="loading">
      <img 
        src={logo} 
        alt="logo" 
        className="loading__logo"
      />
    </div>
  );
}