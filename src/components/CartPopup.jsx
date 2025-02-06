import { useState } from "react";
import styles from "./cartpopup.module.css";

export default function CartPopup({ cartItems, setCartItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => setIsOpen(!isOpen);

    function removeFromCart(itemToRemove) {
        setCartItems((prevCart) => {
            const updatedCart = prevCart.filter(
                (cartItems) => cartItems !== itemToRemove
            );
            // Save updatedFavId to localStorage for persistence
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    }

    return (
        <div>
            <img
                src="/images/cart.png"
                width="30px"
                height="30px"
                className={styles.cart_icon}
                alt="Cart"
                onClick={toggleCart}
            />
            {isOpen && (
                <div className={styles.overlay}>
                    <div className={styles.popup}>
                        {cartItems.length > 0 ? (
                            <div>
                                {cartItems.map((item) => (
                                    <div key={item.id} className={styles.item}>
                                        <img
                                            src={item.images[0]}
                                            width="150px"
                                            alt={item.name}
                                        />
                                        <div>
                                            <h4>{item.name}</h4>
                                            <p>${item.price}</p>
                                        </div>
                                        <button
                                            className={styles.remove_button}
                                            onClick={() => removeFromCart(item)}
                                        >
                                            x
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>Empty Cart</p>
                        )}
                        <button
                            onClick={toggleCart}
                            className={styles.close_button}
                        >
                            close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
