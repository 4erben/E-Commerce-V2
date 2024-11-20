import React, { useState } from 'react';
import styles from "./header.module.css";
import Top from './Top.Navbar.Header';
import { FaChevronDown } from 'react-icons/fa6';
import Searchbar from '../../components/searchbar/Searchbar';
import Dropdown from '../../components/dropdown/Dropdown';

export default function Navbar() {

  return (
    <>
    <Top />
    <nav id={styles.navbar} className='justify-center hidden lg:flex'>
        <div className='max-w-screen-lg grid grid-cols-12  py-3  grow text-primaryA10 capitalize items-center px-3'>
            <div className='col-span-2'>
              <h3 className='text-3xl font-bold'>
                hekto
              </h3>
            </div>
            <div className='col-span-6'>
              <ul className={`${styles.optionsMenu}`}>
                <Dropdown title="home" items={["home","page","other"]} menuStyle='bg-transparent '/>
                <li>
                  <span>
                    pages
                  </span>
                </li>
                <li>
                  <span>
                    products
                  </span>
                </li>
                <li>
                  <span>
                    blog
                  </span>
                </li>
                <li>
                  <span>
                    shop
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-4">
              <div className="flex justify-start xl:justify-end">
                <Searchbar />
              </div>
            </div>
        </div>
    </nav>
    </>

  )
}
