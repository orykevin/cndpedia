import React from 'react';

function brProfile({setProf}) {

  return (
  <div className='profile-cont' >
      <img src={setProf.img} alt="" width="75px" height="75px"/>
      <p className='breeds-name'>{setProf.name}</p>
  </div>
  );
}

export default brProfile;
