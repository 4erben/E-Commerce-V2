import React from 'react';
import product from "../../../assets/images/product.png";
import Card from '../../../components/card/Card';
import Swiper from "../../../components/swiper/Swiper.jsx";

export default function FeaturedHomeSection() {
    const products = [
        {   
            id:1,
            img:product,
            title:"Cantilever chair1",
            code:"Y523201",
            price:42
        },
        {   
            id:2,
            img:product,
            title:"Cantilever chair2",
            code:"Y523201",
            price:42
        },
        {   
            id:3,
            img:product,
            title:"Cantilever chair3",
            code:"Y523201",
            price:42
        },
        {   
            id:4,
            img:product,
            title:"Cantilever chair4",
            code:"Y523201",
            price:42
        },  
        {   
            id:5,
            img:product,
            title:"Cantilever chair5",
            code:"Y523201",
            price:42
        },  
        {   
            id:6,
            img:product,
            title:"Cantilever chair6",
            code:"Y523201",
            price:42
        },  
        {   
            id:7,
            img:product,
            title:"Cantilever chair7",
            code:"Y523201",
            price:42
        },  
        {   
            id:8,
            img:product,
            title:"Cantilever chair7",
            code:"Y523201",
            price:42
        },  
        {   
            id:9,
            img:product,
            title:"Cantilever chair7",
            code:"Y523201",
            price:42
        },  
        {   
            id:10,
            img:product,
            title:"Cantilever chair7",
            code:"Y523201",
            price:42
        },  
        {   
            id:11,
            img:product,
            title:"Cantilever chair7",
            code:"Y523201",
            price:42
        },  
        {   
            id:12,
            img:product,
            title:"Cantilever chair7",
            code:"Y523201",
            price:42
        },  
    ]
  return (
    <section className='py-10 grow w-full'>
        <div className='max-w-screen-lg grow mx-auto flex flex-col items-center'>
            <h1 className='text-3xl font-bold mb-6'>Featured Products</h1>
            <Swiper  products={products} itemsPerView={4}  cols={4}/>
        </div>
    </section>
  )
}