import React from 'react'

function searchIcon({setProf}) {
  return (
    <div className='search-conts'>
        <img src={setProf.img} alt="" />
        <p>{setProf.name}</p>
    </div>
  )
}

export default searchIcon