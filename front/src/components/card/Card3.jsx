import React from 'react';
import styles from "./card.module.css";


export default function Card3({title,img,price,sale,bodyStyle}) {
  return (
<div className={`${styles.card} flex-col flex gap-4`}>
    <div className={`${styles.cardHeader3} `}>
        <img  alt={title} src={img} className={``}/>
        <button className='btn hidden'>
                view details
        </button>
    </div>
    <div className='flex flex-col items-center'>
        <h3>{title}</h3>
        <p>${Number.parseFloat(price).toFixed(2)}</p>
    </div>
</div>
  )
}
