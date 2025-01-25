import React from 'react'
import PageAddress from '../../../components/PageAddress/PageAddress'
import { Link } from 'react-router-dom';

export default function RegisterPage() {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div className=''>
        <PageAddress address="Register Page" />
        <section>
            <div className='max-w-screen-lg mx-auto h-full  flex py-20 px-4'>
                <form className='shadow-xl mx-auto border px-10 py-8 rounded-md text-center capitalize' onSubmit={handleSubmit}>
                    <div className='px-10'>
                        <h4>register</h4>
                        <span className='text-xs font-light text-primaryA40'>please enter your information</span>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <input placeholder='Display Name' type='text' className='input-control '/>
                        <input placeholder='Email Address' type='email' className='input-control '/>
                        <input placeholder='Password' type='password' className='input-control' />
                    </div>
                    <div>
                        <button className='btn w-full' type='submit'>
                            sign in
                        </button>
                    </div>
                    <div className='text-xs mt-3 font-normal text-primaryA40'>
                        already have an account? <Link to="/auth/login" className='hover:text-surfaceA50'>login now</Link>
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}
