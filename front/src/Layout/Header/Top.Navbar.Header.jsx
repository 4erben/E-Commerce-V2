import React from 'react'
import { useSelector } from "react-redux"
import styles from "./header.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart, CiMail, CiUser } from "react-icons/ci";
import { FaBars, FaChevronDown, FaPhoneVolume } from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { useDispatch } from 'react-redux';
import { switchSidebar, switchTheme } from '../../redux/Slices/appUI.slice';
import Dropdown from '../../components/dropdown/Dropdown';
import { Link } from 'react-router-dom';
export default function Top() {
    const isDark = useSelector(state=>state.appUI.isDark);
    const dispatch = useDispatch();
    const handleToggleSidebar = ()=>{
        dispatch(switchSidebar());   
    }
    const handleSwitchTheme = ()=>{
        dispatch(switchTheme());
    }
  return (
    <div className={`top-header bg-surfaceA0  text-surfaceA10 flex justify-center`}>
        <div className='max-w-screen-lg grid grid-cols-1 md:grid-cols-2 text-center grow px-3'>
            <div className='hidden grid-cols-1 gap-2 py-2 sm:grid-cols-2 text-center lg:text-start md:grid'>
                <div className='flex items-center gap-2'>
                    <span><CiMail /></span>
                    <span>mhhasanul@gmail.com</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span><FaPhoneVolume /></span>
                    <span>(12345)67890</span>
                </div>
            </div>
            <div className={`flex  py-2 items-center justify-around   lg:justify-between`}>
                <div className=' md:hidden'>
                    <h1 className="capitalize font-bold">hekto </h1>
                </div>
                <div className='flex items-center'>
                    <button onClick={handleSwitchTheme}>
                    {!isDark ? 
                        <MdDarkMode size={20} color='#321f49'/> 
                        :
                        <MdLightMode size={20} />
                    }
                    </button>
                </div>
                <div className='lg:hidden'>
                    <Link to="/cart">
                    <span >
                        <AiOutlineShoppingCart />
                    </span>
                    </Link>
                </div>
                <button 
                    className='block lg:hidden px-2 py-1 rounded-md  hover:ring-2 hover:ring-primaryA30'
                    onClick={handleToggleSidebar}>
                    <FaBars />
                </button>
                <ul className={`${styles.optionsMenu} `}>
                    <Dropdown title="english"  items={["english","spanish","arabic"]}/>
                    <Dropdown title="USD"  items={["USD","EUR","EGP"]}/>
                    <li>
                        <span>login</span>
                        <span><CiUser /></span> 
                    </li>
                    <li>
                        <span>wishlist</span>
                        <span><CiHeart /></span>
                    </li>
                    <li className='hidden lg:block'>
                        <Link to="/cart">
                        <span >
                            <AiOutlineShoppingCart />
                        </span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
