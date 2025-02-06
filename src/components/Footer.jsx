import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.brands}>
                {[
                    "toyota",
                    "honda",
                    "mazda",
                    "nissan",
                    "mitsubishi",
                    "subaru",
                ].map((brand) => (
                    <div className={styles.brand_logo} key={brand}>
                        <img src={`/images/brands/${brand}.png`} alt={brand} />
                    </div>
                ))}
            </div>

            <div className={styles.footer_socials}>
                <h2>Our Socials</h2>
                <ul>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
