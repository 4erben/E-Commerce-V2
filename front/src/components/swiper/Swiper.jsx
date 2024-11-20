import React, { useState } from 'react';
import Card from '../card/Card';
import { CgLoadbar } from "react-icons/cg";

export default function Swiper(
    {
    products=[],
    itemsPerView = 4,
    cols =itemsPerView,
    productComponent:ProductComponent=Card,
    swiperComponent:SwiperComponent=CgLoadbar
    }){
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPages = Math.ceil(products.length / itemsPerView ) ;
    const handlePage = (index)=>{
        setCurrentIndex(index * itemsPerView);
    }
    const slicedProducts = products.slice(currentIndex, currentIndex+itemsPerView);
    return (
        <>
        <div className={` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-${cols} w-full gap-5`}>
            {slicedProducts.map((p)=>{
            return(
                <ProductComponent title={p.title} product={p.product} price={p.price} code={p.code} img={p.img} key={p.id}/>
            )})}
        </div>
        <div className='flex justify-center mt-5 gap-5'>
            {Array.from({length:totalPages}).map((_,i)=>{
                return(
                    <SwiperComponent
                    onClick={()=>handlePage(i)}
                     key={i} 
                     size={20} 
                     className={` cursor-pointer ${i === currentIndex/itemsPerView?"text-surfaceA50":"text-surfaceA50/50"}`}
                     />
                )
            })}
        </div>
        </>
        );
}
