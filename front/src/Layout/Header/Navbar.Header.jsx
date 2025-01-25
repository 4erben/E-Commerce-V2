import React  from 'react';
import styles from "./header.module.css";
import Top from './Top.Navbar.Header';
import Searchbar from '../../components/searchbar/Searchbar';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
    <Top />
    <nav id={styles.navbar} className='justify-center hidden lg:flex'>
        <div className='max-w-screen-lg grid grid-cols-12  py-3  grow text-primaryA10 capitalize items-center px-3'>
            <div className='col-span-2'>
              <Link to="/">
              <h2 className='text-3xl font-bold'>
                hekto
              </h2>
              </Link>
            </div>
            <div className='col-span-6'>
              <ul className={`${styles.optionsMenu}`}>
                <li>
                  <Link to="/">
                    home
                  </Link>
                </li>
                <li>
                  <Link to="/shop">
                    shop
                  </Link>
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
