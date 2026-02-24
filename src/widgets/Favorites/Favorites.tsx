import styles from "./Favorites.module.scss";
import { Link } from "react-router-dom";
import favoriteImg from "../../assets/ui/favorite.svg";

const Favorites = () => {
  return (
    <Link className={styles.favorites} to="/favorites">
      <img className={styles.favorites__icon} src={favoriteImg} />
    </Link>
  );
};

export default Favorites;
