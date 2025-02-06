import { Link } from "react-router";
import Navbar from "../components/Navbar";
import styles from "./home.module.css";

export default function Home({ cartItems, setCartItems}) {
    return (
        <>
            <div className="container">
                <Navbar cartItems={cartItems} setCartItems={setCartItems} />
                <div className={styles.header}>
                    <div className={styles.tagline}>
                        <h1>THE DRIVE OF YOUR LIFE</h1>
                        <p>
                            Rent from a wide variety of cars from iconic
                            classics to modern luxury
                        </p>
                        <Link to="/models" className="btn">
                            Browse &#10147;
                        </Link>
                    </div>
                    <div className={styles.pilot_image}>
                        <img src="images/pilot.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
