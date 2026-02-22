import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";
import type { CocktailShortUI } from "../../types/ui/cocktails/cocktailShortUI";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Card = ({ item }: { item: CocktailShortUI }) => {
  return (
    <article className={styles.card}>
      <NavLink to={`${item.id}`}>
        <figure className={styles.card__wrapper}>
          <img className={styles.card__image} src={item.image} />
        </figure>
        <div className={styles.card__info}>
          <h2 className={styles.card__title}>{item.name}</h2>
          <FavoriteButton itemId={item.id} />
        </div>
      </NavLink>
    </article>
  );
};

export default Card;
