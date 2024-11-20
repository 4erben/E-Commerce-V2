import React from 'react';
import styles from "./featuredproduct.module.css";

export default function FeaturedProduct({product,single,className}) {
  return (
          <div className={`${styles.chairContainer} flex items-center justify-center w-3/6 lg:w-full md:max-w-full ${single?styles.single:""} ${className}`}>
            <img src={product} alt='bedroom Chair' className={`${styles.chair} relative z-10`} />
           {/*  <span> {50}%off</span> */}
          </div>
  )
}
