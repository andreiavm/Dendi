import React from 'react';
import { client } from '../../lib/client';
import styles from '../../styles/category.module.css';
import Product from '../../components/Product/Product';

const CategoryPage = ({ category, products }) => {

    return (
        <div className="container">
            <div className={styles.container}>
                <div className={styles.text_container}>
                    <h1 className={`${styles.category_header} text-display-secondary`}>{category.title}</h1>
                    <p className={`${styles.category_body} text-body-large`}>{category.description}</p>
                </div>
            </div>
            <div className={styles.product_wrapper}>
                <div className={styles.products_container}>
                    {products?.map((product) => <Product key={product._id} product={product} />)}
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const query = `*[_type == "category"] {
        slug {
            current
        }
    }`;

    const categories = await client.fetch(query);
    const paths = categories.map((category) => ({
        params: {
            slug: category.slug.current,
        },

    }));

    return {
        paths,
        fallback: 'blocking',
    };

};

export const getStaticProps = async ({ params: { slug } }) => {
    try {
        const categoryQuery = `*[_type == "category" && slug.current == '${slug}']`;
        const [selectedCategory] = await client.fetch(categoryQuery);

        const productsQuery = `*[_type == "product" && references('${selectedCategory._id}')]`;
        const products = await client.fetch(productsQuery);
        return {
            props: {
                category: selectedCategory,
                products: products,
            },
        };

    } catch (error) {
        console.error('Error fetching category and products:', error);
        return {
            notFound: true,
        };
    }
};



export default CategoryPage;
