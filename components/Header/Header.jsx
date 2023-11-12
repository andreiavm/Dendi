import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopBanner from '../TopBanner/TopBanner';
import { data } from '../../data.js';
import styles from './header.module.css'
import { client } from '../../lib/client';
import { useStateContext } from '../../context/StateContext.js';
import Cart from '../Cart/Cart.jsx';

const Header = () => {
    const [categories, setCategories] = useState([]);
    const { showCart, setShowCart, totalQuantities } = useStateContext();

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
                <div className={`${styles.header_row} container`}>
                    <div className={styles.logo_search_wrapper}>
                    </div>
                    <h2 className={`${styles.header_text} text-header-small`}>~ stationery & more 💌 ~</h2>
                    <div className={styles.logo_cart_wrapper}>
                        <div className={styles.logo_cart} >
                            <Image
                                onClick={() => setShowCart(!showCart)}
                                className={styles.logo_cart_img}
                                src={data.header.cartSrc}
                                alt={data.header.cartAlt}
                                width="28" height="28"
                                priority>
                            </Image>
                            {totalQuantities > 0 ? (
                                <div className={`${styles.cart_count} text-note`}>
                                    {totalQuantities > 99 ? '99+' : totalQuantities}
                                </div>
                            ) : null}
                        </div>
                    </div>

                </div>
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
            {showCart && <Cart />}
        </>
    )
}

export default Header