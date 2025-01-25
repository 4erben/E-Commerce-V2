import React from 'react'
import styles from "./card.module.css";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Slices/cart.slice';
import { BiSolidCartAdd } from 'react-icons/bi';
import { addToWishlist } from '../../redux/Slices/wishlist.slice';

    const Card2 = React.memo(({product,bodyStyle}) => {
    const {images,price,title,discountPercentage} = product;
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(`/product/${product._id}`)
    }
    const dispatch = useDispatch();
    
    const handleAddToCart = ()=>{
        dispatch(addToCart(product))
    }
    const handleAddToWishlist = ()=>{
        dispatch(addToWishlist(product))
    }
  return (
    <div className={`${styles.card} card !shadow-none md:mb-0 mb-8`}>
        <div className={`${styles.cardHeader} shadow-inner`}>
            <img  alt={title} src={images[0]} className={`max-h-60`}/>
            <button className='btn hidden' onClick={handleNavigate} role='link'>
                view details
            </button>
            <div className={`${styles.headerDetails} hidden flex-col top-full`}>
                <span onClick={handleAddToCart}>
                    <BiSolidCartAdd />
                </span>
                <span onClick={handleAddToWishlist}>
                    <CiHeart />
                </span>
            </div>
        </div>
        <div className={`flex justify-between  text-primaryA10 ${bodyStyle}`}>
            <h6 >{title}</h6>
            {discountPercentage?
            <div className='flex flex-col'>
                <span>${Number.parseFloat(price - (price*(discountPercentage/100))).toFixed(2)}</span>
                <span className='text-surfaceA50 line-through'>${Number.parseFloat(price).toFixed(2)}</span>
            </div>
             : 
             <span>${Number.parseFloat(price).toFixed(2)}</span>
            }
        </div>
    </div>
  )
})

export default Card2;