import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import Favorites from "../Favorites/Favorites";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/ingredients">Ingredients</NavLink>
        </li>
        <li>
          <NavLink to="/alcoholic">Alcoholic</NavLink>
        </li>
        <li>
          <NavLink to="/glass">Glass</NavLink>
        </li>
        <li>
          <Favorites />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
