import React, { useEffect, useState } from 'react'
import styles from './product.module.css'
import Link from 'next/link'
import { urlFor } from '../../lib/client'
import Image from 'next/image'

const colors = ['var(--warm-red-500)', 'var(--yellow-500)', 'var(--purple-500)'];
let colorIndex = 0;

function getNextColor() {
  const color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  return color;
}

const Product = ({ product: { image, name, slug, price } }) => {
  const cardImageUrl = urlFor(image && image[0]).width(298).height(280).url()
  const [color, setColor] = useState(colors[0]);
  
  useEffect(() => {
    // Update the color after component is mounted on the client side
    setColor(getNextColor());
  }, []);

  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div style={{ backgroundColor: color }} className={styles.product_card}>
          <div className={styles.image_wrapper}>
            <Image
              src={cardImageUrl}
              className={styles.product_image}
              alt="test"
              width="298"
              height="280"
              priority>
            </Image>
          </div>
          <div className={styles.bottom_container}>
            <h2 className={`${styles.product_name} text-body-serif`}>{name}</h2>
            <p className={`${styles.product_price} text-body-serif-bold`}>{price}$</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Product