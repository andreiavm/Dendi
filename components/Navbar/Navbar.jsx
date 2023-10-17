import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css'


const Navbar = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.nav_container}>
        <Link className={`${styles.nav_link} text-body-serif`} href="/">
          New In
        </Link>
        <Link className={`${styles.nav_link} text-body-serif`} href="/">
          Diaries & Planners
        </Link>
        <Link className={`${styles.nav_link} text-body-serif`} href="/">
          Notebook & Journals
        </Link>
        <Link className={`${styles.nav_link} text-body-serif`} href="/">
          Accesories
        </Link>
        <Link className={`${styles.nav_link} text-body-serif`} href="/">
          Cards
        </Link>
        <Link className={`${styles.nav_link} text-body-serif`} href="/">
          Magazines
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;