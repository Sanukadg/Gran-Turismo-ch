import { Link } from "react-router";
import CartPopup from "./CartPopup";

const Navbar = ({ cartItems, setCartItems }) => {
    return (
        <div className="navbar">
            <Link to="/">
                <div className="logo">
                    <img
                        src={`${import.meta.env.BASE_URL}/images/logo.png`}
                        width="125px"
                        alt="Logo"
                    />
                </div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/" style={{ color: "white" }}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="/models" style={{ color: "white" }}>
                            MODELS
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ color: "white" }}>
                            ABOUT US
                        </Link>
                    </li>
                    <li>
                        <Link to="/account" style={{ color: "white" }}>
                            ACCOUNT
                        </Link>
                    </li>
                </ul>
            </nav>
            <CartPopup cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    );
};

export default Navbar;
