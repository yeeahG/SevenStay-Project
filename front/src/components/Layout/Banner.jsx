import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='content'>
        <div className='banner'>
            <img className="bannerImage" src="https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_960_720.jpg"/>
        </div>
        
        <div className='bannerText'>
            <h1>Seven Stay</h1>
            <p>We wish your 7days in week would be a like travel. Also wish your life be as happy as a trip. </p>
        </div>
    </div>
  )
}

export default Banner