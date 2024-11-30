import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function PageAddress({address}) {
  return (
    <section className='w-full bg-surfaceA30 py-16 capitalize px-10'>
            <div className='max-w-screen-lg mx-auto'>
                <h1 className='text-2xl font-bold'>{address}</h1>
                <p className='flex items-center gap-5'>
                    <Link to="/">Home</Link> 
                    <MdOutlineNavigateNext />
                     <span className='text-surfaceA50'>{address}</span>
                </p>
            </div>
    </section>
  )
}
