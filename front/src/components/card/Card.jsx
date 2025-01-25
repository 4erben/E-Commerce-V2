import React, { useState } from 'react';
import styles from "./card.module.css";
import { CiHeart  } from 'react-icons/ci';
import { CgLoadbar } from "react-icons/cg";
import getRandomHexColor from '../../utils/helperFunctions/getRandomHexColor';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/Slices/cart.slice';
import { useDispatch } from 'react-redux';
import { BiSolidCartAdd } from "react-icons/bi";
import { addToWishlist } from '../../redux/Slices/wishlist.slice';
    const Card = React.memo(({product}) => {
    const [imgIndex , setImgIndex ] = useState(0);
    const {images,sku,price,title} = product;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleAddToCart = ()=>{
        dispatch(addToCart(product))
    }

    const handleNavigate = ()=>{
        navigate(`/product/${product._id}`)
    }
    const handleAddToWishlist = ()=>{
        dispatch(addToWishlist(product))
    }



  return (
    <div className={`${styles.card} card`}>
        <div className={`${styles.cardHeader}`}>
            <img  alt={title} src={images[imgIndex]} className={`max-h-60`} loading='lazy'/>
            <button className='btn hidden' onClick={handleNavigate} role='link'>
                view details
            </button>
            <div className={`${styles.headerDetails} hidden`}>
                <span onClick={handleAddToCart}>
                    <BiSolidCartAdd />
                </span>
                <span onClick={handleAddToWishlist}>
                    <CiHeart />
                </span>
            </div>
        </div>
        <div className={`${styles.cardBody}`}>
            <h6 >{product.title}</h6>
            <div className='flex flex-wrap'>
            {Array.from({length:product.images.length}).map((_,i)=>{
                return(
                    <CgLoadbar
                        key={i}
                        onClick={()=>{setImgIndex(i)}}
                        className={`hover:cursor-pointer rounded-full ${i === imgIndex? "bg-black/10":""}`}
                        color={getRandomHexColor()}
                    />

                )
            })}
            </div>
            <span>Code - {sku}</span>
            <span>${Number.parseFloat(price).toFixed(2)}</span>
        </div>
    </div>
  )
})

export default Card;