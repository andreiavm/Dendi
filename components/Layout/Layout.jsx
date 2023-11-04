import React from 'react';
import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Dendi Studio | Home</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div >
    )
}

export default Layout
