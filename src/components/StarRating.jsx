import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import './rating.css'
const StarRating = ()=> {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = () => {
    setRating(rating)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')


  return (
    <div className='grid grid-cols-5'>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
    </div>
  );
}
export default StarRating;