import React, { useState } from 'react';
import product from "../../../assets/images/product.png";
import Card from '../../../components/card/Card';
import Swiper from "../../../components/swiper/Swiper.jsx";
import useFeaturedProducts from '../../../utils/react-query-hooks/useFeaturedProducts.jsx';



export default function FeaturedHomeSection() {
    const [pageNumber,setPageNumber] = useState(1);
    const [perPage,setPerPage] = useState(4);
    const {data,isLoading,isError,error,isFetching} = useFeaturedProducts(pageNumber,perPage);
    if(isLoading){
        return(
            <div className="flex items-center justify-center py-10">
            <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
        )
    }
    if(isError){
        return <div>{error.message}</div>
    }
  return (
    <section className='py-10 grow w-full'>
        <div className='max-w-screen-lg grow mx-auto flex flex-col items-center'>
            <h1 className='text-3xl font-bold mb-6'>Featured Products</h1>
            <Swiper  products={data?.data} pagination={data?.data?.pagination} itemsPerView={perPage}  cols={4} setPageNumber={setPageNumber} setPerPage={setPerPage}/>
        </div>
    </section>
  )
}