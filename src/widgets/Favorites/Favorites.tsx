import styles from "./Favorites.module.scss";
import { Link } from "react-router-dom";
import favoriteImg from "../../assets/ui/favorite.svg";
import { useAppSelector } from "../../app/providers/hooks/hooks";

const Favorites = () => {
  const favoritesAmount = useAppSelector((state) => state.favorites.count);
  return (
    <Link className={styles.favorites} to="/favorites">
      <img className={styles.favorites__icon} src={favoriteImg} />
      <div className={styles.favorites__badge}>{favoritesAmount}</div>
    </Link>
  );
};

export default Favorites;
