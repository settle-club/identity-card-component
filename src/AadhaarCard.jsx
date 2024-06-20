import React, { useState } from 'react';
import AadhaarCardFront from './AadhaarComponents/AadhaarCardFront';
import AadhaarCardBack from './AadhaarComponents/AadhaarCardBack';
import './AadhaarCard.css';

function AadhaarCard({name, dob, gender, image, number, address, area, district, state, pincode, color='blue'}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipDirection, setFlipDirection] = useState('right');

  const handleFlip = (direction) => {
    setFlipDirection(direction);
    setIsFlipped(!isFlipped);
  }

  const handleClick = (e) => {
    const cardWidth = e.currentTarget.offsetWidth;
    const clickX = e.clientX - e.currentTarget.getBoundingClientRect().left;

    if (clickX > cardWidth / 2) {
      setFlipDirection('right');
    } else {
      setFlipDirection('left');
    }

    setIsFlipped(!isFlipped);
  };

  const handlePaginationClick = (isFront) => {
    if(isFront && isFlipped) {
      setFlipDirection('left');
      setIsFlipped(false);
    } else if (!isFront && !isFlipped) {
      setFlipDirection('right');
      setIsFlipped(true);
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleFlip('left'),
    onSwipedRight: () => handleFlip('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <div className="AadhaarApp">
      <div className={`card-container`} onClick={handleClick} {...swipeHandlers}>
        <div className={`Aadhaarcard ${isFlipped ? `flipped-${flipDirection}` : ''}`}>
          <div className="front">
            <AadhaarCardFront name={name} dob={dob} gender={gender} image={image} number={number} />
          </div>
          <div className="back">
            <AadhaarCardBack address={address} area={area} district={district} state={state} pincode={pincode} />
          </div>
        </div>
      </div>
      <div className="pagination">
        <div className={`circle ${!isFlipped ? 'active' : ''}`} style={{backgroundColor: !isFlipped ? color : '#ccc'}} onClick={() => handlePaginationClick(true)}></div>
        <div className={`circle ${isFlipped ? 'active' : ''}`} style={{backgroundColor: isFlipped ? color : '#ccc'}} onClick={() => handlePaginationClick(false)}></div>
      </div>
    </div>
  );
}

export default AadhaarCard;
