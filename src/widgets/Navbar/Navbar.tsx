import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import Favorites from "../Favorites/Favorites";
import { routes } from "../../app/providers/router/routes";
import { getNavLinkClass } from "../../features/Cocktails/lib/nav/nav";
const Navbar = () => {
  const links = [
    { path: routes.Categories, label: "Categories" },
    { path: routes.Ingredients, label: "Ingredients" },
    { path: routes.Alcoholic, label: "Alcoholic" },
    { path: routes.Glass, label: "Glass" },
  ];
  const toActive = getNavLinkClass(styles.navbar__active);
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {links.map(({ path, label }) => (
          <li key={path}>
            <NavLink to={path} className={toActive}>
              {label}
            </NavLink>
          </li>
        ))}
        <li>
          <Favorites />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
