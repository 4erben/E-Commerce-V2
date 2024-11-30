import React from 'react'
import Swiper from '../../../components/swiper/Swiper'
import Card3 from '../../../components/card/Card3';
import { MdCircle } from "react-icons/md";
import useTopCategoriesProducts from '../../../utils/react-query-hooks/useTopCategoriesProducts';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';



export default function TopCategoriesSection() {
    const {data,isLoading,isError,error} = useTopCategoriesProducts();
  return (
    <section className='py-10 grow '>
        <div className='max-w-screen-lg flex flex-col justify-center items-center grow mx-auto px-10'>
            <h1 className='text-3xl font-bold mb-6'>top categories</h1>
            <ErrorBoundary isLoading={isLoading} isError={isError} error={error}>
                <Swiper products={data?.data} itemsPerView={4} productComponent={Card3} swiperComponent={MdCircle}/>
            </ErrorBoundary>
            
        </div>
    </section>

  )
}
