import React, { useEffect, useState } from 'react'
import styles from "./searchbar.module.css";
import { IoSearch } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
export default function Searchbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title,setTitle] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem("searchTitle",title);
    navigate("/shop",{state:{title}})
  }
/*   useEffect(()=>{
    setTitle(localStorage.getItem("searchTitle"))
  },[]) */
 useEffect(()=>{
  if(location.pathname === "/shop" && location.state?.title){
    setTitle(localStorage.getItem("searchTitle"))
  }
 },[location])
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
