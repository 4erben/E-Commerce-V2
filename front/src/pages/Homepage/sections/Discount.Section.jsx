import React from 'react';
import { MdDone } from "react-icons/md";
import discount from "../../../assets/images/discount.png";
import FeaturedProduct from '../../../components/FeaturedProduct/FeaturedProduct';

export default function DiscountSection() {
  return (
    <section className='py-10 grow '>
        <div className='max-w-screen-lg flex flex-col justify-center items-center grow mx-auto px-10'>
        <h1 className='text-3xl font-bold mb-6'>discount item</h1>
        <div className='max-w-screen-lg grid grid-cols-1 md:grid-cols-2 mx-auto gap-10 items-center my-10'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-2xl'>20% Discount Of All Products</h3>
                <span className='text-surfaceA50 font-medium'>Eams Sofa Compact</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                <div className='grid grid-cols-2 gap-3'>
                    <p className='flex gap-2 items-center'>
                        <span><MdDone /></span>
                        <span>Material expose like metals</span>
                    </p>
                    <p className='flex gap-2 items-center'>
                        <span><MdDone /></span>
                        <span>Material expose like metals</span>
                    </p>
                    <p className='flex gap-2 items-center'>
                        <span><MdDone /></span>
                        <span>Material expose like metals</span>
                    </p>
                    <p className='flex gap-2 items-center'>
                        <span><MdDone /></span>
                        <span>Material expose like metals</span>
                    </p>
                    <button className='btn grow-0'> shop now</button>
                </div>
            </div>
            <div className=''>
                    <FeaturedProduct product={discount} single={true} className={`mx-auto`}/>
            </div>
        </div>
        </div>
    </section>
  )
}
