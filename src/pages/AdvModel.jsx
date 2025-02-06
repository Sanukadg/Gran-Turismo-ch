import Navbar from "../components/Navbar";
import styles from "./advmodel.module.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function AdvModel({ models, cartItems, setCartItems }) {
    const { id } = useParams();
    const [model, setModel] = useState(null);
    const [mainImage, setMainImage] = useState(""); // Store main image

    useEffect(() => {
        const foundModel = models.find((m) => m.id === Number(id));
        if (foundModel) {
            setModel(foundModel);
            setMainImage(foundModel.images[0]); // Set initial image
        }
    }, [id, models]);

    if (!model) {
        return <div>Loading...</div>;
    }

    function addToCart() {
        setCartItems((prevItems) => {
            if (prevItems.includes(model)) {
                alert("Item already in cart");
                return prevItems;
            }
            return [...prevItems, model];
        });
    }

    return (
        <div className="container">
            <Navbar cartItems={cartItems} setCartItems={setCartItems} />
            <div className={styles.advModel_container}>
                <div className={styles.gallery}>
                    <img
                        src={mainImage}
                        alt={model.name}
                        className={styles.main_image}
                    />

                    <div className={styles.thumbnail}>
                        {model.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={model.name}
                                className={styles.image}
                                onClick={() => setMainImage(image)} // Update main image
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.info}>
                    <h1 className={styles.name}>{model.name}</h1>
                    <p className={styles.price}>PRICE Cr.{model.price}</p>
                    <p>{model.description}</p>
                    <button className={styles.button} onClick={addToCart}>
                        Add to Cart
                    </button>
                    <h1> SPECS </h1>
                    <h2>Engine</h2>
                    <p>{model.specs.engine}</p>
                    <p>{model.specs.power}</p>
                    <p>{model.specs.asp}</p>
                    <h2>Drivetrain</h2>
                    <p>{model.specs.drivetrain}</p>
                    <p>{model.specs.transmission}</p>
                    <h2>Dimensions</h2>
                    <p>Length {model.specs.length}</p>
                    <p>Width {model.specs.width}</p>
                    <p>Height {model.specs.height}</p>
                    <p>Weight {model.specs.weight}</p>
                </div>
            </div>
        </div>
    );
}
