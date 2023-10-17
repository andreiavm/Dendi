import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from './styles.module.css'
import { data } from '../../data.js';
import Button from '../Button/Button.jsx'

const HeroBanner = () => {
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.title_container}>
        <h1 className={`${styles.header_top} text-display`}>{data.banner.title}</h1>
        <div className={styles.icons_wrapper}>
          <h2 className={`${styles.header_icon} text-display`}>🖇️</h2>
          <h2 className={`${styles.header_icon} text-display`}>📚</h2>
          <h2 className={`${styles.header_icon} text-display`}>📝</h2>
        </div>
      </div>
      <div className={styles.card1_container}>
        <Image alt="product" src={data.banner.card1.icon} width="48" height="48"></Image>
        <p className="text-body">{data.banner.card1.text}</p>
      </div>
      <div className={styles.card2_container}>
        <Image alt="product" src={data.banner.card2.icon} width="48" height="48"></Image>
        <p className="text-body">{data.banner.card2.text}</p>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.container_left}>
          <h1 className={`${styles.header_bottom} text-display`}>{data.banner.bottomTitle}</h1>
          <p className={`${styles.body_bottom} text-body-large`}>{data.banner.bottomBody}</p>
          <Button label={data.banner.bottomButton}></Button>
        </div>
        <div className={styles.container_right}>
          <Image className={styles.stock_image} alt={data.banner.stationeryAlt} src={data.banner.stationeryImg} width="619" height="387"></Image>
        </div>
      </div>

      {/* <Link href="/product/ID">
        <button type="button">Button Text</button>
      </Link> */}
      {/* <div className="description">
        <h5>Description</h5>
        <p>DESCRIPTION</p>
      </div> */}
    </div>
  )
}

export default HeroBanner;