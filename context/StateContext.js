import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const showToast = (emoji, message) => {
    toast.custom(
        <div className='text-note fade-in border' style={{
            color: "var(--white)", background: 'var(--warm-red-700)', boxShadow: '3px 3px 0px 0px var(--black)', padding: '1rem', display: 'flex', alignItems: 'center'
        }}>
            <span style={{ marginRight: '8px' }
            } > {emoji}</ span>
            {message}
        </div>,
        {
            duration: 2000,
        }
    );
};


const context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, settotalPrice] = useState()
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id)

        settotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) {
                    return { ...cartProduct, quantity: cartProduct.quantity + quantity }
                }
            })

            setCartItems(updatedCartItems);

        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, { ...product }])
        }

        showToast('🎉', `${quantity} ${product.name} added to cart`);
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        })
    }

    return (
        <context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd
            }}>
            {children}
        </context.Provider>
    )
}

export const useStateContext = () => useContext(context)