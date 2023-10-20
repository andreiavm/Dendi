import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={`${styles.footer} container`}>
      <div className={styles.column}>
        <h1 className={`${styles.column_title} text-body-bold`}>Information</h1>
        <Link className={`${styles.link} text-body`} href="/">
          Shipping
        </Link>
        <Link className={`${styles.link} text-body`} href="/">
          Terms and Conditions
        </Link>
        <Link className={`${styles.link} text-body`} href="/">
          About Us
        </Link>
        <Link className={`${styles.link} text-body`} href="/">
          Contact
        </Link>
      </div>
      <div className={styles.column}>
        <h1 className={`${styles.column_title} text-body-bold`}>Social</h1>
        <Link className={`${styles.link} text-body`} href="/">
          Instagram
        </Link>
        <Link className={`${styles.link} text-body`} href="/">
          Pinterest
        </Link>
        <Link className={`${styles.link} text-body`} href="/">
          Youtube
        </Link>
        <Link className={`${styles.link} text-body`} href="/">
          Tiktok
        </Link>
      </div>
      <div className={styles.column}>
        <h1 className={`${styles.column_title} text-body-bold`}>Contact</h1>
        <Link className={`${styles.link} text-body`} href="/">
          hello@dendistudio.com
        </Link>
        <p className={`${styles.body} text-body`}>
          +31 6 12345678
        </p>
        <Link className={`${styles.link} text-body`} href="/">
          Customer Support
        </Link>
      </div>
      <div className={styles.column}>
        {/* <h1 className={`${styles.column_title} text-body-bold`}>© 2023, Present & Correct. All rights reserved.</h1> */}
        <p className={`${styles.body} text-body`}>
          ©2023, Dendi Studio.
        </p>
        <p className={`${styles.body} text-body`}>
          Made with ❤️ in Amsterdam.
        </p>
        <p className={`${styles.body} text-body`}>
          All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer