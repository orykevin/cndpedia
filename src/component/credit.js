import React from 'react'

function credit() {
  return (
    <div className='credit-cont'>
        <div className='white-cont'>
            <h1>This Web App created by</h1>
            <h1>Ory Works</h1>
            
            <h2>Api used in this project</h2>
            <a href="https://thedogapi.com"><span>- https://thedogapi.com</span></a>
            <a href="https://thecatapi.com"><span>- https://thecatapi.com</span></a>
            <h3>for more works you can visit</h3>
            <a className='link-to' href="https://orykevin.github.io">orykevin.github.io</a>
        </div>
    </div>
  )
}

export default credit