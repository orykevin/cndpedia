import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function brInfo2({breedInfocat,setShow2}) {
  return (
  <div className='info-cont'>
      <FontAwesomeIcon icon={faChevronLeft} className='info-back-btn' onClick={()=>{setShow2(false)}}/>
      <h3>{breedInfocat.name}</h3>
      <div className='desc-cont desc-cont2'>
        <img src={breedInfocat.img} alt="" />
        <h4>Description</h4>
        <p>{breedInfocat.desc}</p>
        <h4>Personality Trait</h4>
        <p>{breedInfocat.trait}</p>
        <h4>Averages Life Span</h4>
        <p>{breedInfocat.life} years</p>
        <h4>Size</h4>
        <p>Weight : {breedInfocat.weight}</p>
      </div>
  </div>
  );
}

export default brInfo2;
