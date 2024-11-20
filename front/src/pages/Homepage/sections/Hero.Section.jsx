import React from 'react'
import chair from "../../../assets/images/bedroomchair.png";
import styles from "../homepage.module.css";
import bulb from "../../../assets/images/bulb.png";
import FeaturedProduct from '../../../components/FeaturedProduct/FeaturedProduct';
export default function HomeHeroSection() {
  return (
    <>
    
    <img alt='bulb image' className={`${styles.bulb} right-0 lg:left-0`} src={bulb} />
    <section className='bg-surfaceA30 grow w-full '>
      <div className='grid grid-cols-1  lg:grid-cols-2 max-w-screen-lg py-20 px-16 relative z-10 gap-10 mx-auto'>
        <div className='flex flex-col gap-5 font-semibold items-start justify-center'>
          <p className='text-surfaceA50'>Best Furniture For Your Castle....</p>
          <h1 className='text-5xl'>New Furniture Collection Trends in 2020</h1>
          <p className='text-sm text-primaryA30'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.
          </p>
          <button className='btn'>
            shop now
          </button>
        </div>
        <div className='hidden md:flex justify-center'>
          <FeaturedProduct product={chair} />
        </div>
        
      </div>
      </section>
    </>
  )
}
