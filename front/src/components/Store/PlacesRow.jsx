import React, { useContext } from 'react';
import './PlacesRow.css'

const PlacesRow = (props) => {
    //const placeContext = useContext(PlaceContext);

  return (
    <div className='rowContainer'>
        <div className='rowDesc'>
            <h1>Recommand Places to stay</h1>
        </div>
        
        <div className='rowContent'>
            {/*<div className='styleText'>
                <div className='placeName'><h1>{props.name}name</h1></div>
                <div className='placeDesc'>{props.description}desc</div>
            </div>*/}

            <a href="../Layout/Place/서귀포" className='placesBox'>
                <img className='placesRow' src="https://cdn.pixabay.com/photo/2016/10/06/17/28/architecture-1719526_960_720.jpg"/>
                <p className='placesText'>서귀포</p>
            </a>

            <a href="../Layout/Place/시내동" className='placesBox'>
                <img className='placesRow' src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg"/>
                <p className='placesText'>시내동</p>
            </a>
            
            <a href="../Layout/Place/조천읍" className='placesBox'>
                <img className='placesRow' src="https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174__340.jpg"/>
                <p className='placesText'>조천읍</p>
            </a>

        </div>

    </div>
  )
}

export default PlacesRow