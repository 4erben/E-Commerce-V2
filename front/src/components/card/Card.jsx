import React from 'react';
import styles from "./card.module.css";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import { CiHeart } from 'react-icons/ci';

export default function Card({title,img,price=0,code,id}) {
  return (
    <div className={`${styles.card} card`}>
        <div className={`${styles.cardHeader}`}>
            <img  alt={title} src={img} className={``}/>
            <button className='btn hidden'>
                view details
            </button>
            <div className={`${styles.headerDetails} hidden`}>
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
        <div className={`${styles.cardBody}`}>
            <h6 >{title}</h6>
            <span>Code - {code}</span>
            <span>${Number.parseFloat(price).toFixed(2)}</span>
        </div>
    </div>
  )
}
