import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = React.memo(({roundRating,rating}) =>{
  return (
    <div className='flex py-2 items-center gap-4'>
      <div className='flex gap-2 '>{Array.from({length:roundRating}).map((_,i)=>{
        return <FaStar key={i} className='text-yellow-400'/>
        })}
    </div>   
    <p className=''>({rating})</p>          
    </div>
    
  )
});

export default Rating;
