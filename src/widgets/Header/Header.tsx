import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites";

const Header = () => {
  return (
    <header className={styles.header}>
      <span>theCocktails</span>
      <Navbar />
      <Search />
      <Favorites />
    </header>
  );
};

export default Header;
