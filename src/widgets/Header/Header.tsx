import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">theCocktails</Link>
      <Navbar />
      <Search />
      <Favorites />
    </header>
  );
};

export default Header;
