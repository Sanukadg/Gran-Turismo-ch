import { Link } from "react-router";
import Navbar from "../components/Navbar";
import styles from "./models.module.css";

export default function Models({ models, cartItems, setCartItems }) {
    return (
        <>
            <div className="container">
                <Navbar cartItems={cartItems} setCartItems={setCartItems} />
                <div className={styles.models}>
                    <h1>Available Models</h1>

                    <div className={styles.modelContainer}>
                        {models.map((model) => (
                            <div key={model.id} className={styles.model}>
                                <Link to={`/models/${model.id}`} key={model.id}>
                                    <img
                                        src={model.images[0]}
                                        alt={model.name}
                                        className={styles.image}
                                    />
                                    <h3>{model.name}</h3>
                                    <p className={styles.price}>
                                        Cr.{model.price}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
