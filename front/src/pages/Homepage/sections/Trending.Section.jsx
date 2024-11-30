import React from 'react';
import offProduct from "../../../assets/images/offproduct.png";
import Card2 from '../../../components/card/Card2';
import Swiper from '../../../components/swiper/Swiper';
import useBestSellerProducts from '../../../utils/react-query-hooks/useBestSellerProducts';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';


export default function TrendingSection() {
    const {data,isLoading , isError,error} = useBestSellerProducts(undefined,undefined,"trending");
  return (
    <section className='py-10 w-full grow'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center grow gap-16'>
            <h1 className='text-3xl'>trending products</h1>
            <ErrorBoundary isLoading={isLoading} isError={isError} error={error}>
                <Swiper  products={data?.data} productComponent={Card2}/>
            </ErrorBoundary>
            {/* second section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 capitalize'>
                <div className='bg-secondaryA50 px-5 py-4'>
                    <h4 className='text-2xl'>23% of in all products</h4>
                    <div className='flex'>
                        <span className='underline text-nowrap text-surfaceA50 font-bold'>shop now</span>
                        <img src={offProduct} className='max-w-full' alt='sale product'/>
                    </div>
                </div>
                <div className='bg-surfaceA30 px-5 py-4'>
                    <h4 className='text-2xl'>23% of in all products</h4>
                    <div className='flex'>
                        <span className='underline text-nowrap text-surfaceA50 font-bold'>view collection</span>
                        <img src={offProduct} className='max-w-full' alt='sale product'/>
                    </div>
                </div>
                <div className='px-5 py-4 flex flex-col gap-3'>
                    <div className='grid grid-cols-3 items-center gap-3 '>
                        <img src={offProduct} className='col-span-1 bg-surfaceA30' alt='sale product'/>
                        <div className='col-span-2'>
                            <p>Executive Seat chair</p>
                            <span>$32.00</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 items-center gap-3'>
                        <img src={offProduct} className='col-span-1 bg-surfaceA30' alt='sale product'/>
                        <div className='col-span-2'>
                            <p>Executive Seat chair</p>
                            <span>$32.00</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 items-center gap-3'>
                        <img src={offProduct} className='col-span-1 bg-surfaceA30' alt='sale product'/>
                        <div className='col-span-2'>
                            <p>Executive Seat chair</p>
                            <span>$32.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
