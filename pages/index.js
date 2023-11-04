import React from 'react';
import { Product, HeroBanner, Newsletter } from '../components';
import styles from '../styles/home.module.css'
import { data } from '../data'
import { client } from '../lib/client'


const Home = ({ banner, products }) => (
  <>
    <HeroBanner heroBanner={banner.length && banner[0]} />
    {/* {(console.log(banner))} */}
    <div className="container">
      <h2 className={`${styles.section_header} text-display-secondary`}>{data.index.header1}</h2>
      <div className={styles.product_wrapper}>
        <div className={styles.products_container}>
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      </div>
    </div>
    <Newsletter />
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