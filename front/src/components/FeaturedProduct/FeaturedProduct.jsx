import React, { useState } from 'react';
import styles from "./featuredproduct.module.css";

export default function FeaturedProduct({product,single,className}) {
  const {images} = product;
  
  const [imgIndex , setImgIndex] = useState(0)
  return (
          <div className={`${styles.chairContainer} flex items-center justify-center w-3/6 lg:w-full md:max-w-full ${single?styles.single:""} ${className}`}>
            <img src={images && images[imgIndex]} alt='bedroom Chair' className={`${styles.chair} relative z-10`} loading='lazy'/>
           {/*  <span> {50}%off</span> */}
          </div>
  )
}
