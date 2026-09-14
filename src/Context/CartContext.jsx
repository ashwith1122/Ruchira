import { createContext, useEffect, useState } from 'react'

const CartContext = createContext();

function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState(() => {
        const savedcart = localStorage.getItem("food_cart")
        return savedcart ? JSON.parse(savedcart) : [];
    });

    useEffect(() => {
        localStorage.setItem("food_cart", JSON.stringify(cartItems))
    }, [cartItems])


    const addItems = (itm) => {
        let isExist = false
        cartItems.map((curr) => {
            if (curr.id == itm.id) {
                isExist = true
                return;
            }
        })

        if (!isExist) {
            setCartItems((prev) => [...prev, itm]);
        }
    }

    const removeItem = (eid) => {
        const updatedList = cartItems.filter((curr) => {
            return curr.id != eid;
        })

        setCartItems(updatedList);
    }

    const incrementQnt = (id) => {
        const newData = cartItems.map((curr) => {
            if (curr.id == id) {
                curr.qnt = curr.qnt + 1;
                return curr;
            } else {
                return curr;
            }
        })

        setCartItems(newData);
    }

    const decrementQnt = (id) => {
        const newData = cartItems.map((curr) => {
            if (curr.id == id) {
                curr.qnt = curr.qnt - 1;
                return curr;
            } else {
                return curr;
            }
        })

        setCartItems(newData);

    }
    return (
        <CartContext.Provider value={{ cartItems, addItems, removeItem, incrementQnt, decrementQnt }} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
