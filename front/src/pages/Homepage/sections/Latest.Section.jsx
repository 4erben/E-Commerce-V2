import React from 'react';
import Card2 from '../../../components/card/Card2';
import product from "../../../assets/images/product.png"
const products = [
    {   
        id:1,
        img:product,
        title:"Cantilever chair",
        code:"Y523201",
        price:42
    },
    {   
        id:2,
        img:product,
        title:"Cantilever chair",
        code:"Y523201",
        price:42
    },
    {   
        id:3,
        img:product,
        title:"Cantilever chair",
        code:"Y523201",
        price:42
    },
    {   
        id:4,
        img:product,
        title:"Cantilever chair",
        code:"Y523201",
        price:42
    },  
    {   
        id:5,
        img:product,
        title:"Cantilever chair",
        code:"Y523201",
        price:42
    },  
    {   
        id:6,
        img:product,
        title:"Cantilever chair",
        code:"Y523201",
        price:42
    },  
    {   
        id:7,
        img:product,
        title:"Cantilever chair",
        code:"Y523201",
        price:42
    },  
    {   
        id:8,
        img:product,
        title:"Cantilever chair",
        code:"Y523201",
        price:42
    },  
]

export default function LatestHomeSection() {
  return (
    <section className='py-10 grow w-full'>
        <div className='max-w-screen-lg grow mx-auto flex flex-col items-center'>
            <h1 className='text-3xl font-bold mb-6'>Latest Products</h1>
            <ul className='flex gap-6 text-primaryA0 font-medium capitalize text-center mb-4'>
                <li>new arrival</li>
                <li>best seller</li>
                <li>featured</li>
                <li>special offer</li>
            </ul>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5'>
                {products.map((p)=>{
                    return(
                        <Card2  title={p.title} product={p.product} price={p.price} code={p.code} img={p.img} key={p.id}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
