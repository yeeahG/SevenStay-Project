import React from 'react'
import { useParams} from 'react-router-dom';


const Place = () => {
  const { id } = useParams();
  return (
    <div>
      <h2> {id}지역 </h2>

      <div>
        목록
      </div>
      
      <div>
        지도
      </div>
    </div>
  )
}

export default Place