import React from 'react';
import { Product, Cart, Footer, FooterBanner, Header, HeroBanner, Layout, Navbar } from '../components';
import Head from 'next/head'

const Home = () => (
  <>
    <Head>
      <title>Dendi Studio | Home</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
    <Header />
    <HeroBanner />

    {/* <div>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div>
      {["Product 1", "Product 2", "Product 3"].map(
        (product) => product)}
    </div>

    <FooterBanner /> */}
  </>
)

export default Home;