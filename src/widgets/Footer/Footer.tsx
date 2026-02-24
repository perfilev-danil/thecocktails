import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="https://www.thecocktaildb.com/api.php">thecocktaildb.com</Link>
      <Link to='https://t.me/perfilev_danil"'>@perfilev_danil</Link>
    </footer>
  );
};

export default Footer;
