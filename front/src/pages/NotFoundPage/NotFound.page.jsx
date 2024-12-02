import React from 'react'
import PageAddress from '../../components/PageAddress/PageAddress';
import notfound from "../../assets/images/notfound.webp";
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
        <PageAddress  address={"404 not found"}/>
        <section className='w-full py-10'>
            <div className='max-w-screen-lg flex flex-col mx-auto gap-3 justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={notfound} className='w-4/6 mx-auto'/>
                </div>
                <h4 className='text-2xl text-center'>The page you requested was not found!</h4>
                <div>
                    <Link to={"/"} className='btn !py-4'>back to home</Link>
                </div>
            </div>
        </section>
    </div>
  )
}
