import React, { useRef } from "react"
import styles from "./cart.module.css"
import Link from "next/link"
import toast from "react-hot-toast"
import Image from 'next/image'
import { data } from '../../data.js';
import Button from '../../components/Button/Button'
import { urlFor } from '../../lib/client'
import { useStateContext } from '../../context/StateContext'
import getStripe from '../../lib/getStripe'


const CartPage = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()

    const handleCheckout = async () => {
        const stripe = await getStripe();
        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        if (response.statusCode === 500) return;

        const data = await response.json();

        // toast.loading('Redirecting...');
    }

    return (
        <div className={styles.cart_wrapper} ref={cartRef}>
            <div className={styles.close_btn} >
                <div className={styles.cart_header}>
                    <h2 className="text-header">cart</h2>
                    <p className="text-body">{totalQuantities} Items</p>
                </div>
                <Image
                    onClick={() => setShowCart(false)}
                    className={styles.close_btn_img}
                    src={data.cart.closeSrc}
                    alt={data.cart.closeAlt}
                    width="28" height="28"
                    priority>
                </Image>
            </div>
            <div className={styles.cart_main}>
                {cartItems.length < 1 && (
                    <h2 className={`${styles.cart_title} text-display-secondary`}>Your cart is empty 😴</h2>
                )}
                {cartItems.length > 0 && cartItems.map((item) => (
                    <div className={styles.cart_product} key={item._id}>
                        <Image
                            src={urlFor(item?.image[0]).url()}
                            width="200"
                            height="188"
                            className={styles.product_image}
                            alt={item?.name}
                            priority>
                        </Image>
                        <div className={styles.cart_info}>
                            <div className={styles.cart_text_wrapper}>
                                <p className={`${styles.cart_item_name} text-body`}>{item?.name}</p>
                                <p className="text-body-serif">{item?.price}$</p>
                            </div>
                            <div className={styles.quantity_selector_wrapper}>
                                <div className={styles.quantity_selector}>
                                    <button
                                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                                        className={styles.quantity_button}>-</button>
                                    <input
                                        id="quantity-input-2"
                                        className={styles.quantity_input}
                                        type="number"
                                        value={item.quantity}
                                        readOnly
                                    />
                                    <button
                                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                                        className={styles.quantity_button}>+</button>
                                </div>
                                <Image
                                    className={styles.close_btn_img}
                                    onClick={() => onRemove(item)}
                                    src={data.cart.deleteSrc}
                                    alt={data.cart.deleteAlt}
                                    width="28" height="28"
                                    priority>
                                </Image>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            {cartItems.length > 0 && (
                <div className={styles.cart_bottom}>
                    <h3 className={`${styles.cart_total} text-body-large`}>Subtotal: {totalPrice.toFixed(2)} </h3>
                    <Button onClick={handleCheckout} label="go to checkout"></Button>
                </div>
            )}
        </div >
    )
}


export default CartPage