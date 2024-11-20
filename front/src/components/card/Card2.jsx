import React from 'react'
import styles from "./card.module.css";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import { CiHeart } from 'react-icons/ci';
export default function Card2({title,img,price,sale=65,bodyStyle}) {
  return (
    <div className={`${styles.card} card !shadow-none md:mb-0 mb-8`}>
        <div className={`${styles.cardHeader} shadow-inner`}>
            <img  alt={title} src={img} className={``}/>
            <button className='btn hidden'>
                view details
            </button>
            <div className={`${styles.headerDetails} hidden flex-col top-full`}>
                <span>
                    <MdOutlineShoppingCart />
                </span>
                <span>
                    <CiHeart />
                </span>
                <span>
                    <HiMiniMagnifyingGlassPlus />
                </span>
            </div>
        </div>
        <div className={`flex justify-between  text-primaryA10 ${bodyStyle}`}>
            <h6 >{title}</h6>
            <span>${Number.parseFloat(price).toFixed(2)}</span>
            {sale && <span className='text-surfaceA50 line-through'>${sale}</span>}
        </div>
    </div>
  )
}
