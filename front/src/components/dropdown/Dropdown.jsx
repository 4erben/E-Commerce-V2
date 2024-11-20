import React, { Fragment, useState } from 'react';
import styles from "./dropdown.module.css";
import { FaChevronDown } from 'react-icons/fa6';

export default function Dropdown({items =[],title,direction = "col",children ,position ="absolute",className="",menuStyle=""} ) {
    const [ isDropped , setIsDropped] = useState(false);
    const [selectedItem , setSelectedItem ] = useState(title);
    const handleDrop = ()=>{
        setIsDropped(!isDropped);
    }
    const handleSelectedItem = (item)=>{
        setSelectedItem(item);
    }
  return (
    <li className={`${styles.dropdown} ${className}`}>
        <button onClick={handleDrop}>
            <span>{selectedItem}</span>
            <span><FaChevronDown /></span>
        </button>
        <ul className={`${styles.dropdownMenu} ${isDropped?styles.dropped:""} flex-${direction} ${position} ${menuStyle}`}>
            {items.map((item)=>{
                if(item === selectedItem) return null;
                return (
                <Fragment key={item}>
                <li  onClick={()=>handleSelectedItem(item)}>
                    {item}
                </li>
                <hr/>
                </Fragment>)
            })}
            {children}
        </ul>
    </li>
  )
}
