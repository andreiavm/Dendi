import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css'


const Navbar = () => {
  return (
    <nav className="container">
      <div className={styles.nav_container}>
        <Link className={`${styles.nav_link} text-body`} href="/">
          New In
        </Link>
        <Link className={`${styles.nav_link} text-body`} href="/">
          Diaries & Planners
        </Link>
        <Link className={`${styles.nav_link} text-body`} href="/">
          Notebook & Journals
        </Link>
        <Link className={`${styles.nav_link} text-body`} href="/">
          Accesories
        </Link>
        <Link className={`${styles.nav_link} text-body`} href="/">
          Cards
        </Link>
        <Link className={`${styles.nav_link} text-body`} href="/">
          Magazines
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;