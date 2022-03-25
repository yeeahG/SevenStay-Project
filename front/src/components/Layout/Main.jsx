import React, { useState } from 'react'
import PlacesRow from '../Store/PlacesRow'
import './Main.css'


//메인화면 숙소 추천 사진들 리스트
const placesRecommand = [
    {
        id: "place1",
        image: "https://cdn.pixabay.com/photo/2016/10/06/17/28/architecture-1719526_960_720.jpg", 
        name: "서울",
        description: "1",
    },
    {
        id: "place2",
        image: "https://cdn.pixabay.com/photo/2016/10/06/17/28/architecture-1719526_960_720.jpg", 
        name: "서울",
        description: "2",
    },
    {
        id: "place3",
        image: "https://cdn.pixabay.com/photo/2016/10/06/17/28/architecture-1719526_960_720.jpg", 
        name: "서울",
        description: "3",
    }
];

const Main = () => {
    // const [places, setPlaces] = useState[placesRecommand];

    // const placeRow = places.map(place => 
    //     <PlacesRow
    //         key={place.id}
    //         id={place.id}
    //         image={place.image}
    //         name={place.name}
    //         description={place.description}
    //     />
    //     )



  return (
    <div className='Container'>
            {/* {placeRow} */}
            <PlacesRow/>
    </div>
  )
}

export default Main