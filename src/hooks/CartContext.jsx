import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
        let newProductsInCart = [];

        if (cartIndex >= 0) {
            newProductsInCart = cartProducts.map((prd, index) => {
                if (index === cartIndex) {
                    return { ...prd, quantity: prd.quantity + 1 };
                }
                return prd;
            });
        } else {
            const newProduct = { ...product, quantity: 1 };
            newProductsInCart = [...cartProducts, newProduct];
        }

        setCartProducts(newProductsInCart);
        updateLocalStorage(newProductsInCart);
    };

    const clearCart = () => {
        setCartProducts([]);
        updateLocalStorage([]);
    };

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);
        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId
                ? { ...prd, quantity: prd.quantity + 1 }
                : prd;
        });

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const decreaseProduct = (productId) => {
        const product = cartProducts.find((prd) => prd.id === productId);

        if (product && product.quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productId
                    ? { ...prd, quantity: prd.quantity - 1 }
                    : prd;
            });

            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    };

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
    };

    useEffect(() => {
        const clientCartData = localStorage.getItem('devburger:cartInfo');

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                putProductInCart,
                clearCart,
                increaseProduct,
                decreaseProduct,
                deleteProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
};
