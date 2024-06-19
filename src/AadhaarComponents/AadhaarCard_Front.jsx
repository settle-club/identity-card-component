import React from "react";
import "./AadhaarCard_Front.css";
import aadhaarHeader from "../assets/aadhaar-header.png";
import user from "../assets/user.png"
import qr_code from "../assets/qr-code.png";

const AadhaarCard_Front = ({ name, dob, gender, image, number }) => {
  const handleImageError = (e) => {
    e.target.src = user; // Fallback to default user image
  };
  
  return (
    <div className="aadhaar-card">
      <div className="header">
        <img
          className="aadhaar-img-header"
          src={aadhaarHeader}
          alt="Aadhaar Card Header"
        />
      </div>
      <div className="body">
        <div className="photo">
          <img src={image || user} alt="Profile" onError={handleImageError}/>
        </div>
        <div className="info">
          <div className="sub-info">
            <div className="details">
              <p>
                <strong>NAME:</strong> {name}
              </p>
              <p>
                <strong>DOB:</strong> {dob}
              </p>
              <p>
                <strong>GENDER:</strong> {gender}
              </p>
            </div>
            <div className="qr-code">
              <img src={qr_code} alt="QR Code" />
            </div>
          </div>
          <div className="aadhaar-number">
            <h2>{number}</h2>
          </div>
        </div>
      </div>
      <div className="footer">
        <h3><span className="footer-red">आधार</span> - भारतीय विशिष्ट पहचान प्राधिकरण</h3>
      </div>
    </div>
  );
};

export default AadhaarCard_Front;
