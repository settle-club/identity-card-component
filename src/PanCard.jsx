import React from "react";
import "./PanCard.css";
import emblem from "./assets/national-emblem.png";
import user from "./assets/user.png";

const PanCard = ({ name, number }) => {
  return (
    <div className="pan-card">
      <div className="pan-card-header">
        <div>
          <div className="pan-card-title ln-hi">आयकर विभाग</div>
          <div className="pan-card-title ln-en">INCOME TAX DEPARTMENT</div>
        </div>
        <div className="pan-card-emblem">
          <img src={emblem} alt="National Emblem of India" />
        </div>
        <div>
          <div className="pan-card-title ln-hi">भारत सरकार</div>
          <div className="pan-card-title ln-en">GOVT. OF INDIA</div>
        </div>
      </div>
      <div className="pan-card-body">
        <div>
        <div className="pan-card-name">{name}</div>
        <div className="pan-card-number">{number}</div>
        </div>
        <div className="pan-card-user-icon">
          <img src={user} alt="user icon" />
        </div>
      </div>
    </div>
  );
};

export default PanCard;
