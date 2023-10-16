import React from 'react'
import Navbar from '../Navbar/Navbar'
import Image from 'next/image';
import TopBanner from '../TopBanner/TopBanner';
import { data } from '../../data.js';
import styles from './styles.module.css'

const Header = () => {
    return (
        <>
            <TopBanner />
            <div className={styles.logo_container}>
                <Image
                    className={styles.logo}
                    src={data.header.logoSrc}
                    alt={data.header.logoAlt}
                    width="459" height="79" >
                </Image>
                <h2 className={`${styles.logo_header} text-header-small`}>~ stationery & more ~</h2>
            </div>
            <Navbar />
        </>

    )
}

export default Header