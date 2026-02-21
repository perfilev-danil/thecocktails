import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";
import type { CocktailShortUI } from "../../types/ui/cocktails/cocktailShortUI";
import Favorite from "../Favorite/Favorite";

const Card = ({ item }: { item: CocktailShortUI }) => {
  return (
    <article className={styles.card}>
      <NavLink to={`${item.id}`}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={item.image} />
        </div>
        <h2 className={styles.title}>{item.name}</h2>
      </NavLink>
      <Favorite itemId={item.id} />
    </article>
  );
};

export default Card;
