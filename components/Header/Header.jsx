import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopBanner from '../TopBanner/TopBanner';
import { data } from '../../data.js';
import styles from './header.module.css'
import { client } from '../../lib/client';

const Header = () => {
    const [categories, setCategories] = useState([]);

    async function getCategories() {
        try {
            const categoriesList = await client.fetch('*[_type == "category"]');
            setCategories(categoriesList); 
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <TopBanner />
            <div className={styles.logo_container}>
                <Link className={styles.logo} href="/">
                    <Image
                        src={data.header.logoSrc}
                        alt={data.header.logoAlt}
                        width="459" height="79" 
                        priority>
                    </Image>
                </Link>
                <h2 className={`${styles.logo_header} text-header-small`}>~ stationery & more 💌 ~</h2>
            </div>
            <nav className={`${styles.navbar} container`}>
                <div className={styles.nav_container}>
                    {categories.map((category) => (
                        <Link className={`${styles.nav_link} text-body-serif`} key={category._id} href={`/categories/${category.slug.current}`}>
                            <p>{category.title}</p>
                        </Link>
                    ))}
                </div>
            </nav>

        </>

    )
}

export default Header