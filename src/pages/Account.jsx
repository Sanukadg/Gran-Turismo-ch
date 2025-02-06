import Navbar from "../components/Navbar";
import styles from "./account.module.css";

export default function Account({ cartItems, setCartItems }) {
    return (
        <>
            <div className="container">
                <Navbar cartItems={cartItems} setCartItems={setCartItems} />
                <div className={styles.account}>
                    <div className={styles.form}>
                        <form>
                            <div className={styles.signin}>
                                <h1>Login</h1>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                />
                                <a href="/">Forgot your password?</a>
                                <button type="submit" className={styles.button}>
                                    Login
                                </button>
                            </div>
                            <div className={styles.signup}>
                                <p>Don't have an account? </p>
                                <a href="/">Sign up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
