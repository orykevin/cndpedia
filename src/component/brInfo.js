import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function brInfo({breedInfo,setShow}) {
  return (
  <div className='info-cont'>
      <FontAwesomeIcon icon={faChevronLeft} className='info-back-btn' onClick={()=>{setShow(false)}}/>
      <h3>{breedInfo.name}</h3>
      <div className='desc-cont'>
        <img src={breedInfo.img} alt="" />
        <h4>Breed Group</h4>
        <p>{breedInfo.group}</p>
        <h4>Personality Trait</h4>
        <p>{breedInfo.trait}</p>
        <h4>Averages Life Span</h4>
        <p>{breedInfo.life}</p>
        <h4>Breed For</h4>
        <p>{breedInfo.for}</p>
        <h4>Size</h4>
        <p>Weight : {breedInfo.weight}</p>
        <p>Height : {breedInfo.height}</p>
      </div>
  </div>
  );
}

export default brInfo;
