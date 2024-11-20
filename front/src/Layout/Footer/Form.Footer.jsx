import React from 'react';
import styles from "./footer.module.css";

export default function FooterForm() {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <form className={`${styles.footerForm}`} onSubmit={handleSubmit}>
        <input 
        type='email'
        placeholder='Enter Email Address'
        />
        <button type='submit'>
            Sign up
        </button>
    </form>
  )
}
