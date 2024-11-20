import React from 'react'
import Swiper from '../../../components/swiper/Swiper'
import product from "../../../assets/images/product.png";
import Card3 from '../../../components/card/Card3';
import { MdCircle } from "react-icons/md";



export default function TopCategoriesSection() {
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
    <section className='py-10 grow '>
        <div className='max-w-screen-lg flex flex-col justify-center items-center grow mx-auto px-10'>
            <h1 className='text-3xl font-bold mb-6'>top categories</h1>
            <Swiper products={products} itemsPerView={4} productComponent={Card3} swiperComponent={MdCircle}/>
        </div>
    </section>

  )
}
