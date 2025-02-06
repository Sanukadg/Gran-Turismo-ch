import CartPopup from "./CartPopup";

const Navbar = ({ cartItems, setCartItems }) => {
    return (
        <div className="navbar">
            <a href="/">
                <div className="logo">
                    <img src="/images/logo.png" width="125px" alt="Logo" />
                </div>
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="/" style={{ color: "white" }}>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="/models" style={{ color: "white" }}>
                            MODELS
                        </a>
                    </li>
                    <li>
                        <a href="/about" style={{ color: "white" }}>
                            ABOUT US
                        </a>
                    </li>
                    <li>
                        <a href="/account" style={{ color: "white" }}>
                            ACCOUNT
                        </a>
                    </li>
                </ul>
            </nav>
            <CartPopup cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    );
};

export default Navbar;
