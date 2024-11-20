
import React from 'react'
import styles from "./header.module.css";
import Navbar from './Navbar.Header';
import Sidebar from './Sidebar.Header';
import { useDispatch, useSelector } from 'react-redux';
import { switchSidebar } from '../../redux/Slices/appUI.slice';

export default function Header() {
    const isExpanded = useSelector(state=>state.appUI.isExpanded);
    const dispatch = useDispatch();
    const handleSwitch = ()=>{
        dispatch(switchSidebar())
        
    }
  return (
    <header className={` flex flex-col  w-full `}>
        <div 
        className={`${styles.fullscreen} ${!isExpanded?"hidden":""}`}
        onClick={handleSwitch}
        ></div>
        <Navbar />
        <Sidebar />
    </header>
  )
}
