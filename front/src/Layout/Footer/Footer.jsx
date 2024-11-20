import React from 'react'
import Bottom from './Bottom.Footer'
import FooterForm from './Form.Footer'

export default function Footer() {
  return (
    <footer className='pt-5 bg-surfaceA30 flex flex-col items-center capitalize mt-auto'>
        <div className='max-w-screen-lg grid grid-cols-4  lg:grid-cols-5  py-5 grow shrink-0 gap-5  '>
            <div className='col-span-2  lg:col-span-2 mx-auto'>
                <h1 className='text-2xl font-bold mb-5'>hekto</h1>
                <div className='text-primaryA50 flex flex-col gap-4 text-sm' >
                    <FooterForm />
                    <div className='text-primaryA50'>
                        <h4>Contact Info</h4>
                        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                </div>
                
            </div>
            <div className='col-span-2  lg:col-span-1 px-2 '>
            <h2 className='font-bold mb-5'>categories</h2>
            <ul className='flex flex-col gap-3 text-primaryA50 text-sm'>
                <li>laptop & computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
            </ul>
            </div>
            <div className='col-span-2 lg:col-span-1 px-2'>
                <h2 className='font-bold mb-5'>customer care</h2>
                <ul className='flex flex-col gap-3 text-primaryA50 text-sm'>
                    <li>My Account</li>
                    <li>Discount</li>
                    <li>Returns</li>
                    <li>Orders History</li>
                    <li>Order Tracking</li>
                </ul>
            </div>
            <div className='col-span-2  lg:col-span-1 px-2'>
                <h2 className='font-bold mb-5'>pages</h2>
                <ul className='text-primaryA50 text-sm flex flex-col gap-3'>
                    <li>Blog</li>
                    <li>Browse the Shop</li>
                    <li>Category</li>
                    <li>Pre-Built Pages</li>
                    <li>Visual Composer Elements</li>
                    <li>WooCommerce</li>
                </ul>
            </div>
        </div>
        <Bottom/>
    </footer>
  )
}
