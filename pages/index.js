import React from 'react';
import { Product, Cart, Footer, FooterBanner, Header, HeroBanner, Navbar } from '../components';
import Head from 'next/head'
import styles from '../styles/home.module.css'
import { data } from '../data'
import { client } from '../lib/client'


const Home = ({ banner, products }) => (
  <>
    <Head>
      <title>Dendi Studio | Home</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
    <Header />
    <HeroBanner heroBanner={banner.length && banner[0]} />
    {/* {(console.log(banner))} */}
    <div className="container">
      <h2 className={`${styles.section_header} text-display-secondary`}>{data.index.header1}</h2>
      <div className={styles.products_container}>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </div>
  </>
)
export const getStaticProps = async () => {

  async function getBanner() {
    const banner = await client.fetch('*[_type == "banner"]');
    return banner;
  }
  async function getProducts() {
    const products = await client.fetch('*[_type == "product"]');
    return products;
  }

  const banner = await getBanner();
  const products = await getProducts();

  return {
    props: {
      banner,
      products,
    },
  };
};

export default Home;