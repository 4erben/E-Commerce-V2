import React from 'react'
import FeaturedProduct from '../../../components/FeaturedProduct/FeaturedProduct';
import sofa from "../../../assets/images/sofa.png";
import { BsCircleFill } from "react-icons/bs";

export default function UniqueSection() {
  return (
    <section className='bg-surfaceA30 py-10 w-full px-10'> 
        <div className='max-w-screen-lg grid grid-cols-1 md:grid-cols-5 mx-auto gap-4'>
            <div className='col-span-2 flex justify-center'>
                <FeaturedProduct  product={sofa} single={true}/>
            </div>
            <div className='flex flex-col  justify-center col-span-3 gap-4'>
                <h3 className='text-3xl mb-4'>
                    Unique Features Of leatest &
                    Trending Poducts
                </h3>
                <div className='flex flex-col gap-5'>
                    <p className='flex gap-2'>
                        <BsCircleFill color='#F52B70' size={12} className='my-auto'/>
                        All frames constructed with hardwood solids and laminates
                    </p>
                    <p className='flex gap-2'>
                        <BsCircleFill  color='#2B2BF5' size={12} className='my-auto'/>
                        Reinforced with double wood dowels, glue, screw - nails corner 
                        blocks and machine nails
                    </p>
                    <p className='flex gap-2'>
                        <BsCircleFill color='#2BF5CC' size={12} className='my-auto'/>
                        Arms, backs and seats are structurally reinforced
                    </p>
                </div>
                <div className='flex gap-4'>
                    <button className='btn'>
                        add to cart
                    </button>
                    <div className='flex flex-col '>
                        <h6 className='text-sm'>B&B Italian Sofa </h6>
                        <span className='text-primaryA30'>$32.00</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
