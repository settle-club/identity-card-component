import React, { useState } from 'react';
import AadhaarCard_Front from './AadhaarComponents/AadhaarCard_Front';
import AadhaarCard_Back from './AadhaarComponents/AadhaarCard_Back';
import './App.css';

function AadhaarCard() {
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
    <div className="App">
      <div 
        className={`card-container`} 
        onClick={handleFlip}
      >
        <div className={`card ${isFlipped ? `flipped-${flipDirection}` : ''}`}>
          <div className="front">
            <AadhaarCard_Front name="Rithik Jain" dob="09/07/2024" gender="Male" />
          </div>
          <div className="back">
            <AadhaarCard_Back address="Apt. 772 304 Stephan Mountain, Cyriltown" area="Sakinaka" district="Mumbai" state="Maharashtra" pincode="400072" />
          </div>
        </div>
      </div>
      <div className="pagination">
        <div className={`circle ${!isFlipped ? 'active' : ''}`}></div>
        <div className={`circle ${isFlipped ? 'active' : ''}`}></div>
      </div>
      {/* <AadhaarCard_Front name="Rithik Jain" dob="09/07/2024" gender="Male" /> */}
    </div>
  );
}

export default AadhaarCard;
