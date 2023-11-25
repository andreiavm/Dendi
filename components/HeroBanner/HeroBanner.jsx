import React from 'react';
import Image from 'next/image'
import styles from './hero.module.css'
import { data } from '../../data.js'
import Button from '../Button/Button.jsx'
import { urlFor } from '../../lib/client'

const HeroBanner = ({ heroBanner }) => {
  const bottomImageUrl = urlFor(heroBanner.image).width(619).height(387).url()

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.title_container}>
        <h1 className={`${styles.header_top} text-display-secondary`}>{data.banner.title}</h1>
        {/* <div className={styles.icons_wrapper}>
          <h2 className={`${styles.header_icon} text-display`}>🖇️</h2>
          <h2 className={`${styles.header_icon} text-display`}>📚</h2>
          <h2 className={`${styles.header_icon} text-display`}>📝</h2>
        </div> */}
      </div>
      <div className={styles.card1_container}>
        <Image alt={data.banner.card1.alt} src={data.banner.card1.icon} width="48" height="48"></Image>
        <p className="text-body">{data.banner.card1.text}</p>
      </div>
      <div className={styles.card2_container}>
        <Image alt={data.banner.card2.alt} src={data.banner.card2.icon} width="48" height="48"></Image>
        <p className="text-body">{data.banner.card2.text}</p>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.container_left}>
          <h1 className={`${styles.header_bottom} text-display`}>{heroBanner.largeText}</h1>
          <p className={`${styles.body_bottom} text-body-large`}>{heroBanner.smallText}</p>
          <Button label={heroBanner.buttonText}></Button>
        </div>
        <div className={styles.container_right}>
          <Image
            src={bottomImageUrl}
            alt={heroBanner.alt}
            width="619"
            height="387"
            priority>
          </Image>
        </div>
      </div>
    </div>
  )
}


export default HeroBanner;