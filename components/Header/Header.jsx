import React from 'react'
import Navbar from '../Navbar/Navbar'
import Image from 'next/image';
import Link from 'next/link';
import TopBanner from '../TopBanner/TopBanner';
import { data } from '../../data.js';
import styles from './header.module.css'

const Header = () => {
    return (
        <>
            <TopBanner />
            <div className={styles.logo_container}>
                <Link className={styles.logo} href="/">
                    <Image
                        src={data.header.logoSrc}
                        alt={data.header.logoAlt}
                        width="459" height="79" >
                    </Image>
                </Link>
                <h2 className={`${styles.logo_header} text-header-small`}>~ stationery & more 💌 ~</h2>
            </div>
            <Navbar />
        </>

    )
}

export default Header