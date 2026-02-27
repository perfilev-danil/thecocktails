import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import Favorites from "../Favorites/Favorites";
import { links } from "./links";
import { getNavLinkClass } from "../../entities/cocktail/lib/utils/nav/nav";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toActive = getNavLinkClass(styles.navbar__active);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav className={styles.navbar}>
        {isOpen && (
          <div className={styles.navbar__overlay} onClick={handleClose}></div>
        )}
        <ul
          className={`${styles.navbar__list} ${isOpen ? styles["navbar__list--opened"] : ""}`}
        >
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink className={toActive} to={path} onClick={handleClose}>
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Favorites />
          </li>
          {isOpen && (
            <button onClick={handleClose} aria-label="Close menu">
              ×
            </button>
          )}
        </ul>
        <button
          className={styles.navbar__burger}
          onClick={handleOpen}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </nav>
    </>
  );
};

export default Navbar;
