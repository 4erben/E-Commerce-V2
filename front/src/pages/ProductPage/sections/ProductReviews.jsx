import React from 'react'
import Rating from '../../../components/ratingStars/Rating';

export default function ReviewsSection({product}) {
  const reviews = product?.reviews;
  
  return (
    <section className='w-full py-10 bg-surfaceA40'>
        <div className='max-w-screen-lg mx-auto'>
          <h2 className='text-center text-3xl'>users review</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4 capitalize'>
            {/* Review */}
            {reviews?.map((r,i)=>{
              return (
              <div className='mx-auto' key={i}>
                <p className='flex gap-3 font-semibold text-primaryA20'>
                  <span>reviewer:</span>
                  <span>{r.reviewerName}</span>
                </p>
                <p className='flex gap-3 font-semibold text-primaryA20'>
                  <span>email:</span>
                  <span>{r.reviewerEmail}</span>
                </p>
                <p className='flex gap-3 font-semibold text-primaryA20'>
                  <span>comment:</span>
                  <span>{r.comment}</span>
                </p>
                <Rating rating={r.rating} roundRating={r.rating}/>
              </div>
              )
            })}
          </div>
        </div>
    </section>
  )
}
