import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="container">
      <div className="content">
        <p className="text">SMALL TEXT</p>
        <h3 className="big-text">BIG TEXT</h3>
        {/* <Image alt="product" src="" className="banner-image"></Image> */}
      </div>
      <Link href="/product/ID">
        <button type="button">Button Text</button>
      </Link>
      <div className="description">
        <h5>Description</h5>
        <p>DESCRIPTION</p>
      </div>
    </div>
  )
}

export default HeroBanner;