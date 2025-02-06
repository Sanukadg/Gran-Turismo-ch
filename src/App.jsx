import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Models from "./pages/Models";
import About from "./pages/About";
import Account from "./pages/Account";
import AdvModel from "./pages/AdvModel";
import { useEffect, useState } from "react";

function App() {
    const [models, setModels] = useState([]); // State to store the properties data

    const [cartItems, setCartItems] = useState(() => {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    import.meta.env.BASE_URL + "/models.json"
                ); // Fetching the properties data from the JSON file
                if (!response.ok) throw new Error("Failed to fetch JSON");
                const json = await response.json();
                setModels(json.models);
            } catch (error) {
                console.log("Error fetching data:", error); // Log any errors
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Router basename={import.meta.env.BASE_URL}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/models"
                        element={
                            <>
                                <Models
                                    models={models}
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <>
                                <About
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/account"
                        element={
                            <>
                                <Account
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/models/:id"
                        element={
                            <>
                                <AdvModel
                                    models={models}
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                />
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
