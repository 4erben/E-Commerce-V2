import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./header.module.css";
import { IoMdClose } from "react-icons/io";
import { switchSidebar } from '../../redux/Slices/appUI.slice';
import { FaChevronDown ,FaPhoneVolume} from 'react-icons/fa6';
import { CiHeart, CiUser ,CiMail } from 'react-icons/ci';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Dropdown from '../../components/dropdown/Dropdown';
export default function Sidebar() {
    const isExpanded = useSelector(state=>state.appUI.isExpanded);
    const dispatch = useDispatch();
    const handleCloseSideBar = ()=>{
      dispatch(switchSidebar());
    }
  return (
    <aside id={styles.sidebar} className={`${isExpanded &&styles.expanded} px-4 flex flex-col`}>
        <div className='pt-5 px-2 flex justify-between items-center text-2xl capitalize font-bold' >
          <h1>hekto</h1>
          <span onClick={handleCloseSideBar} className='cursor-pointer'><IoMdClose /></span>
        </div>
        <hr className='my-2 border-2'/>
        <ul className={`${styles.sidebarList} `}>
          <Dropdown title="english" items={["english","spanish","arabic"]} position='static'   />
          <Dropdown title="USD" items={["USD","EGP","EUR","SAR"]} position='static'  />
          <li>
              <span>login</span>
              <span><CiUser /></span> 
          </li>
          <li>
              <span>wishlist</span>
              <span><CiHeart /></span>
          </li>
          <li className='!hidden !lg:block'>
              <span>
                  <AiOutlineShoppingCart />
              </span>
          </li>
        </ul>
        <hr className='my-2 border-2'/>
        <ul className={`${styles.sidebarList}`}>
          <li>
            <span>home</span>
            <span><FaChevronDown /></span>
          </li>
          <li>pages</li>
          <li>products</li>
          <li>blog</li>
          <li>shop</li>
        </ul>
        <div className="mt-auto flex flex-col justify-center items-between py-3">
          <hr className='my-2 border-2'/>
          <div className='flex items-center gap-5'>
            <span><CiMail /></span>
            <span>mhhasanul@gmail.com</span>
          </div>
          <div className='flex items-center gap-5'>
            <span><FaPhoneVolume /></span>
            <span>(12345)67890</span>
          </div>
        </div>
    </aside>
  )
}
