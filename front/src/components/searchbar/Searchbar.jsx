import React, { useEffect, useState } from 'react'
import styles from "./searchbar.module.css";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
export default function Searchbar() {
  const navigate = useNavigate();
  const [title,setTitle] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem("searchTitle",title);
    navigate("/shop",{state:title})
  }
  useEffect(()=>{
    setTitle(localStorage.getItem("searchTitle"))
  },[])
 
  return (
    <form className={styles.searchbar} onSubmit={handleSubmit}>
        <input
          aria-label='Search input'
          id='searchbar'
          type='text'
          placeholder='' 
          className=''
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <button aria-label='search button' type='submit'>
            <IoSearch />
        </button>
    </form>

  )
}
