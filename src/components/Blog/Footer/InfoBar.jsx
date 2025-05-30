import React from "react";
import "./Footer.css"; 

const InfoBar = () => {
  return (
    <div className="info-bar">
      <div className="info-item">
        <i className="fas fa-truck"></i>
        <div>
          <h4>Free Shipping</h4>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="info-item">
        <i className="fas fa-headset"></i>
        <div>
          <h4>Contact us 24/7</h4>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="info-item">
        <i className="fas fa-undo-alt"></i>
        <div>
          <h4>30 Days Return</h4>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="info-item">
        <i className="fas fa-shield-alt"></i>
        <div>
          <h4>100% Secure Payment</h4>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
