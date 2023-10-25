import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../../styles/product.module.css'
import Image from 'next/image'
import Button from '../../components/Button/Button'
import Product from '../../components/Product/Product'
import { client, urlFor } from '../../lib/client'

const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product[0]
    const [selectedImage, setSelectedImage] = useState(image[0])

    useEffect(() => {
        setSelectedImage(image[0]);
    }, [image]);

    const cardImageUrl = urlFor(image && selectedImage).width(298).height(280).url()
    const [quantity, setQuantity] = useState(1);

    const handleInputChange = (e) => {
        const inputQuantity = parseInt(e.target.value);
        if (!isNaN(inputQuantity) && inputQuantity >= 1) {
            setQuantity(inputQuantity);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div>
                <div className={`${styles.product_page} container`}>
                    <div className={styles.product_image_wrapper}>
                        <Image
                            src={cardImageUrl}
                            className={styles.product_image}
                            alt="test"
                            width="696"
                            height="654"
                            priority>
                        </Image>
                        <div className={styles.small_images_container}>
                            {image?.map((item, i) => (
                                <div key={i} className={styles.small_image_wrapper} onClick={() => setSelectedImage(item)}>
                                    <Image
                                        className={styles.small_image}
                                        src={urlFor(item).width(298).height(280).url()}
                                        alt="test"
                                        width="198"
                                        height="186"
                                        priority
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.product_details_wrapper}>
                        <div className={`${styles.product_title} text-display-secondary`}>{name}</div>
                        <div className={`${styles.product_price} text-header-serif`}>{price}$</div>
                        <div className={`${styles.quantity_selector_wrapper}`}>
                            <h2 className="text-header-small">Quantity:</h2>
                            <div className={styles.quantity_selector}>
                                <button onClick={handleDecrement} className={styles.quantity_button}>-</button>
                                <input className={styles.quantity_input}
                                    type="number"
                                    value={quantity}
                                    onChange={handleInputChange}
                                />
                                <button onClick={handleIncrement} className={styles.quantity_button}>+</button>
                            </div>
                            <Button className={styles.cart_button} label="add to cart" />
                        </div>
                        <div className={`${styles.product_description} text-header-small`}>{details}</div>
                    </div>
                </div>
                <div className={`${styles.similar_products_wrapper} container`}>
                    <h2 className="text-display-secondary">You may also like:</h2>
                    <div className={styles.similar_products_container}>
                        {products.map((item) => (
                            <Product
                                key={item._id}
                                product={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
                slug {
                current
            }
    }
            `

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking',
    }

}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}']`
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(query)
    const products = await client.fetch(productsQuery)

    return {
        props: {
            products,
            product
        },
    };
};

export default ProductDetails;