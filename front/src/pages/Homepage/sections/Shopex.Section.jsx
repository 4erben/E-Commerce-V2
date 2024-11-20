import React from 'react';
import delivery from "../../../assets/images/freedelivery.png";
import cashback from "../../../assets/images/cashback.png";
import premium from "../../../assets/images/premium.png";
import allday from "../../../assets/images/24hours.png";

export default function ShopexHomeSection() {
  return (
    <section className='py-10 grow w-full'>
        <div className='max-w-screen-lg flex flex-col justify-center items-center grow mx-auto'>
            <h1 className='text-3xl font-bold mb-6'>What Shopex Offer!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5'>

                <div className='card py-8 px-2 gap-4 items-center text-center'>
                    <div>
                        <img src={delivery} alt='free delivery'/>
                    </div>
                    <div className=''>
                        <h3 className='text-1xl font-bold mb-4'>24/7 Support</h3>
                        <p className='text-sm text-primaryA30'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                <div className='card py-8 px-2 gap-4 items-center text-center'>
                    <div>
                        <img src={cashback} alt='free delivery'/>
                    </div>
                    <div className=''>
                        <h3 className='text-1xl font-bold mb-4'>24/7 Support</h3>
                        <p className='text-sm text-primaryA30'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                <div className='card py-8 px-2 gap-4 items-center text-center'>
                    <div>
                        <img src={premium} alt='free delivery'/>
                    </div>
                    <div className=''>
                        <h3 className='text-1xl font-bold mb-4'>24/7 Support</h3>
                        <p className='text-sm text-primaryA30'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
                <div className='card py-8 px-2 gap-4 items-center text-center'>
                    <div>
                        <img src={allday} alt='free delivery'/>
                    </div>
                    <div className=''>
                        <h3 className='text-1xl font-bold mb-4'>24/7 Support</h3>
                        <p className='text-sm text-primaryA30'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>


            </div>
        </div>
    </section>
  )
}
