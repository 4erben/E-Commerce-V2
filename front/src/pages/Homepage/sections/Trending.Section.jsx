import React from 'react';
import product from "../../../assets/images/product.png";
import offProduct from "../../../assets/images/offproduct.png";
import Card2 from '../../../components/card/Card2';


export default function TrendingSection() {

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
        } 
    ]
  return (
    <section className='py-10 w-full grow'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center grow gap-16'>
            <h1 className='text-3xl'>trending products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full px-4'>
                {products.map((p)=>{
                    return(
                        <div className='p-2 bg-surfaceA20/90 shadow-lg' key={p.id}>
                        <Card2  title={p.title} img={p.img} price={p.price} bodyStyle={`md:flex-col items-center`} sale={false}/>
                        </div>
                    )
                })}
            </div>
            {/* second section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 capitalize'>
                <div className='bg-secondaryA50 px-5 py-4'>
                    <h4 className='text-2xl'>23% of in all products</h4>
                    <div className='flex'>
                        <span className='underline text-nowrap text-surfaceA50 font-bold'>shop now</span>
                        <img src={offProduct} className='max-w-full'/>
                    </div>
                </div>
                <div className='bg-surfaceA30 px-5 py-4'>
                    <h4 className='text-2xl'>23% of in all products</h4>
                    <div className='flex'>
                        <span className='underline text-nowrap text-surfaceA50 font-bold'>view collection</span>
                        <img src={offProduct} className='max-w-full'/>
                    </div>
                </div>
                <div className='px-5 py-4 flex flex-col gap-3'>
                    <div className='grid grid-cols-3 items-center gap-3 '>
                        <img src={offProduct} className='col-span-1 bg-surfaceA30'/>
                        <div className='col-span-2'>
                            <p>Executive Seat chair</p>
                            <span>$32.00</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 items-center gap-3'>
                        <img src={offProduct} className='col-span-1 bg-surfaceA30'/>
                        <div className='col-span-2'>
                            <p>Executive Seat chair</p>
                            <span>$32.00</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 items-center gap-3'>
                        <img src={offProduct} className='col-span-1 bg-surfaceA30'/>
                        <div className='col-span-2'>
                            <p>Executive Seat chair</p>
                            <span>$32.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
