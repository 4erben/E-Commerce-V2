import React from 'react'
import styles from "./searchbar.module.css";
import { IoSearch } from "react-icons/io5";
export default function Searchbar() {
  return (
    <div className={styles.searchbar}>
        <input
          aria-label='Search input'
          id='searchbar'
          type='text'
          placeholder='' 
          className=''
        />
        <button aria-label='search button '>
            <IoSearch />
        </button>
    </div>

  )
}
