import React from 'react';
import newsletter from "../../../assets/images/newsletter.webp";

export default function NewsletterSection() {
  return (
    <section 
    className='w-full py-10 min-h-64 bg-no-repeat bg-center bg-cover flex flex-col gap-10 justify-center items-center text-center' 
    style={{backgroundImage:`url(${newsletter})`}}>
        <h1 className='text-3xl'>Get Leatest Update By Subscribe our Newslater</h1>
        <button className='btn'>shop now</button>
    </section>
  )
}
