import React from 'react'
import { FaFacebook, FaRegCopyright } from 'react-icons/fa6'
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from 'react-icons/ai';

export default function Bottom() {
  return (
    <div className='bg-surfaceA40 py-2 mt-auto w-full text-primaryA10'>
        <div className='flex justify-evenly max-w-screen-lg items-center '>
            <div className='flex text-xs'>
            <FaRegCopyright />
            Webecy - All Rights Reserved
            </div>
            <div className='flex gap-3'>
                <FaFacebook />
                <AiFillInstagram />
                <FaTwitterSquare />
            </div>
        </div>

    </div>
  )
}
