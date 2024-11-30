import React, { useState } from 'react';
import Swiper from "../../../components/swiper/Swiper.jsx";
import useFeaturedProducts from '../../../utils/react-query-hooks/useFeaturedProducts.jsx';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary.jsx';



export default function FeaturedHomeSection() {
    const [pageNumber,setPageNumber] = useState(1);
    const [perPage,setPerPage] = useState(4);
    const {data,isLoading,isError,error} = useFeaturedProducts(pageNumber,perPage);

  return (
    <section className='py-10 grow w-full'>
        <div className='max-w-screen-lg grow mx-auto flex flex-col items-center'>
            <h1 className='text-3xl font-bold mb-6'>Featured Products</h1>
            <ErrorBoundary isLoading={isLoading} isError={isError} error={error}>
                <Swiper  products={data?.data} pagination={data?.data?.pagination} itemsPerView={perPage}  cols={4} setPageNumber={setPageNumber} setPerPage={setPerPage}/>
            </ErrorBoundary>
            
        </div>
    </section>
  )
}