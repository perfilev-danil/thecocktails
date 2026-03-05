import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link className="logo" to="/">
          theCocktails
        </Link>
      </div>
      <Navbar />
      <div className={styles.header__search}>
        <Search />
      </div>
    </header>
  );
};

export default Header;
