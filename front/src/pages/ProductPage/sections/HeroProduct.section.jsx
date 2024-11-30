import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { BiSolidCartAdd } from "react-icons/bi";
import Rating from '../../../components/ratingStars/Rating';
export default function HeroProductSection({product}) {
    const [imgIndex ,setImgIndex ] = useState(0);
    const price = Number(product.price).toFixed(2);
    const title = product.title;
    const description = product.description;
    const category = product.category;
    const brand = product.brand;
    const rating = product.rating;
    const roundRating = Math.round(product.rating) ;
    const sku = product.sku;
    const images = product.images;
    const discountPercentage = product.discountPercentage;
    const stock = product.stock;
    const newPrice = Number(price - (price*(discountPercentage/100))).toFixed(2);
    
    const handleImg = (i)=>{
        setImgIndex(i)
    }
  return (
    <section className='w-full py-10'>
            <div className='max-w-screen-lg mx-auto px-5 md:px-10'>
                <div className='p-2 shadow-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-3 mb-20'>
                    {/* images div */}
                    <div className='grid grid-cols-4 gap-2'>
                        <div className='flex flex-col gap-2'>
                            {images?.map((p,i)=>{
                                return <div className='bg-surfaceA40/50 cursor-pointer hover:bg-surfaceA40/90' key={i} onClick={()=>handleImg(i)}> <img src={p}  className='w-full h-full'/></div>
                            })}
                        </div>
                        <div className='col-span-3 bg-surfaceA40/50 flex items-center'>
                            <img src={images && images[imgIndex]} className=''/>
                        </div>
                    </div>
                    {/* description div */}
                    <div className='flex flex-col items-start justify-start px-4 py-5 capitalize gap-3'>
                        <h1 className='text-3xl'>{title}</h1>
                        <Rating  roundRating={roundRating} rating={rating}/>
                        <p className='flex gap-4 items-center'>
                            <span className='font-bold'>${newPrice}</span>
                            <span className='line-through text-surfaceA50 text-sm'>${price}</span>
                        </p>
                        <p className='text-primaryA50'>{description}</p>
                        <button className='btn flex items-center gap-2'><span>add to cart</span> <BiSolidCartAdd /></button>
                        <div className='flex gap-3'><h3>category:</h3> <p>{category}</p></div>
                        <div className='flex gap-3'><h3>brand:</h3> <p>{brand}</p></div>
                        <div className='flex gap-3'><h3>stock:</h3> <p>{stock}</p></div>
                    </div>
                </div>
            </div>
        </section>
  )
}
