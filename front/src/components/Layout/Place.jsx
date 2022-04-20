import React from 'react'
import { useParams} from 'react-router-dom';
import Map from '../Map/Map'


const Place = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h2> {id}지역 </h2>

      <div>
        목록
      </div>
      
      <div>
        <Map id={id} />
      </div>
    </div>
  )
}

export default Place