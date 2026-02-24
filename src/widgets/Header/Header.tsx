import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className="logo" to="/">
        theCocktails
      </Link>
      <Navbar />
      <Search />
    </header>
  );
};

export default Header;
