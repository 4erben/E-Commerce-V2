import React from 'react'
import styles from "./searchbar.module.css";
import { IoSearch } from "react-icons/io5";
export default function Searchbar() {
  return (
    <div className={styles.searchbar}>
        <input
            type='text'
            placeholder='' 
            className=''
        />
        <button>
            <IoSearch />
        </button>
    </div>

  )
}
