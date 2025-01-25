import React from 'react';
import PageAdress from "../../../components/PageAddress/PageAddress";
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div className=''>
        <PageAdress address="Login Page" />
        <section>
            <div className='max-w-screen-lg mx-auto h-full  flex py-20 px-4'>
                <form className='shadow-xl mx-auto border px-10 py-8 rounded-md text-center capitalize' onSubmit={handleSubmit}>
                    <div className='px-10'>
                        <h4>Login</h4>
                        <span className='text-xs font-light text-primaryA40'>please login using account detail below</span>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <input placeholder='Email Address' type='email' className='input-control '/>
                        <input placeholder='Password' type='password' className='input-control' />
                    </div>
                    <div>
                        <button className='btn w-full' type='submit'>
                            sign in
                        </button>
                    </div>
                    <div className='text-xs mt-3 font-normal text-primaryA40'>
                        dont have an account? <Link to="/auth/register" className='hover:text-surfaceA50'>register now</Link>
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}
