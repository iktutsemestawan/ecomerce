// src/context/CartContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';
import { products } from '../data/products';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

const LOCAL_STORAGE_KEY = 'ecomm_cart';

export const CartProvider = ({ children }) => {
    // Memuat data dari Local Storage saat inisialisasi
    const [cartItems, setCartItems] = useState(() => {
        try {
            const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.error("Error loading cart from Local Storage:", error);
            return [];
        }
    }); 

    // Menyimpan data ke Local Storage setiap kali cartItems berubah
    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
        } catch (error) {
            console.error("Error saving cart to Local Storage:", error);
        }
    }, [cartItems]);

    // Tambah atau perbarui item
    const addToCart = (productId, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.productId === productId);
            if (existingItem) {
                return prevItems.map(item =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevItems, { productId, quantity }];
            }
        });
    };

    // Hapus item
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
    };

    // Kosongkan keranjang
    const clearCart = () => {
        setCartItems([]);
    };

    // Mendapatkan detail dan total
    const getCartDetails = () => {
        const detailedCart = cartItems.map(item => {
            const product = products.find(p => p.id === item.productId);
            return {
                ...item,
                product,
                subtotal: product ? product.price * item.quantity : 0,
            };
        }).filter(item => item.product);

        const total = detailedCart.reduce((sum, item) => sum + item.subtotal, 0);

        return { detailedCart, total, itemCount: cartItems.length };
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartDetails,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};