import React from 'react';
import styles from "./card.module.css";
import { useNavigate } from 'react-router-dom';


const Card3 = React.memo(({product,bodyStyle}) => {
  const {images,title,price,category} = product;
  const navigate = useNavigate();

  const handleNavigate = ()=>{
      navigate(`/product/${product._id}`)
  }
  return (
<div className={`${styles.card} flex-col flex gap-4 items-center`}>
  <h1>{category}</h1>
    <div className={`${styles.cardHeader3} `}>
        <img  alt={title} src={images[0]} className={``}/>
        <button className='btn hidden' onClick={handleNavigate} role='link'>
                view details
        </button>
    </div>
    <div className='flex flex-col items-center'>
        <h4>{title}</h4>
        <p>${Number.parseFloat(price).toFixed(2)}</p>
    </div>
</div>
  )
})

export default Card3;
