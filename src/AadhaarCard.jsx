import React, { useState } from 'react';
import AadhaarCard_Front from './AadhaarComponents/AadhaarCard_Front';
import AadhaarCard_Back from './AadhaarComponents/AadhaarCard_Back';
import './AadhaarCard.css';

function AadhaarCard({name, dob, gender, image, number, address, area, district, state, pincode}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipDirection, setFlipDirection] = useState('right');

  const handleFlip = (e) => {
    const cardWidth = e.currentTarget.offsetWidth;
    const clickX = e.clientX - e.currentTarget.getBoundingClientRect().left;

    if (clickX > cardWidth / 2) {
      setFlipDirection('right');
    } else {
      setFlipDirection('left');
    }

    setIsFlipped(!isFlipped);
  };

  return (
    <div className="AadhaarApp">
      <div 
        className={`card-container`} 
        onClick={handleFlip}
      >
        <div className={`Aadhaarcard ${isFlipped ? `flipped-${flipDirection}` : ''}`}>
          <div className="front">
            <AadhaarCard_Front name={name} dob={dob} gender={gender} image={image} number={number} />
          </div>
          <div className="back">
            <AadhaarCard_Back address={address} area={area} district={district} state={state} pincode={pincode} />
          </div>
        </div>
      </div>
      <div className="pagination">
        <div className={`circle ${!isFlipped ? 'active' : ''}`}></div>
        <div className={`circle ${isFlipped ? 'active' : ''}`}></div>
      </div>
    </div>
  );
}

export default AadhaarCard;
