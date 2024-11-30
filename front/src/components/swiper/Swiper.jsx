import React, { Suspense, useCallback, useState } from 'react';
const Card = React.lazy(()=> import('../card/Card'));
import { CgLoadbar } from "react-icons/cg";
import Spinner from '../Spinner/Spinner';

const Swiper = React.memo((
    {
    products=[],
    itemsPerView = 4,
    cols =itemsPerView,
    productComponent:ProductComponent=Card,
    swiperComponent:SwiperComponent=CgLoadbar
    })=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const ProductComponentMemoized = React.memo(ProductComponent);
    const totalPages = Math.ceil(products.length / itemsPerView ) ;
    const handlePage = useCallback((index) => {
        setCurrentIndex(index * itemsPerView);
    }, [itemsPerView]);
    
    const slicedProducts = products?.slice(currentIndex, currentIndex+itemsPerView);
    
    return (
        <>
        <div className={` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-${cols} w-full gap-5`}>
        <Suspense  fallback={<Spinner />}>
            {slicedProducts && slicedProducts?.map((p)=>{
            return(
                <ProductComponentMemoized key={p.id} product={p}/>  
            )})}
        </Suspense>
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
});

export default Swiper;
