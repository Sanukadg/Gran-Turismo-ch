import Navbar from "../components/Navbar";
import styles from "./about.module.css";

export default function About({ cartItems, setCartItems }) {
    return (
        <>
            <div className="container">
                <Navbar cartItems={cartItems} setCartItems={setCartItems} />
                <div className={styles.about}>
                    <div className={styles.about_tagline}>
                        <h1>ABOUT US</h1>
                        <p>
                            To make the unattainable, attainable. We specialize
                            in collecting and restoring used cars from any era
                            to be still enjoyed in the present
                            <br />
                            <br />
                            <br />
                            Our goal is to preserve automotive culture by
                            appreciating them
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
