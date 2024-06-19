import React from "react";
import "./AadhaarCardBack.css";
import aadhaarHeader from "../assets/aadhaar-header.png";

const AadhaarCardBack = ({ address, area, district, state, pincode }) => {
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
        <div className="add">
          <p>Address : {address}</p>
          <p>Area : {area}</p>
          <p>District : {district}</p>
          <p>State : {state}</p>
          <p>Pin Code : {pincode}</p>
        </div>
      </div>
      <div className="footer">
        <h3><span className="footer-red">आधार</span> - भारतीय विशिष्ट पहचान प्राधिकरण</h3>
      </div>
    </div>
  );
};

export default AadhaarCardBack;
