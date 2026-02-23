import styles from "./OptionedCocktail.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCocktailByIdQuery } from "../../../features/Cocktails/api/cocktailsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import FavoriteButton from "../../../features/Cocktails/ui/FavoriteButton/FavoriteButton";

const OptionedCocktail = () => {
  const { cocktailId } = useParams();

  const navigate = useNavigate();
  const { data: cocktail } = useGetCocktailByIdQuery(cocktailId ?? skipToken);

  return (
    <article className={styles.cocktailInfo}>
      <nav className={styles.cocktailInfo__navbar}>
        <button
          className={styles.cocktailInfo__backButton}
          onClick={() => navigate(-1)}
        >
          back
        </button>
      </nav>
      <section className={styles.cocktailInfo__description}>
        <div className={styles.cocktailInfo__card}>
          <div className={styles.cocktailInfo__details}>
            <header className={styles.cocktailInfo__head}>
              <h1>{cocktail?.name}</h1>
              {cocktailId && <FavoriteButton itemId={cocktailId} />}
            </header>
            <dl className={styles.cocktailInfo__meta}>
              <dt>Tags:</dt>
              <dd>{cocktail?.tags}</dd>
              <dt>IBA:</dt>
              <dd>{cocktail?.iba}</dd>
              <dt>Alcoholic:</dt>
              <dd>{cocktail?.alcoholic}</dd>
              <dt>Glass:</dt>
              <dd>{cocktail?.glass}</dd>
            </dl>
          </div>

          <img
            className={styles.cocktailInfo__image}
            src={cocktail?.image}
            alt={cocktail?.name}
          />
        </div>
        <p className={styles.cocktailInfo__instructions}>
          {cocktail?.instructions}
        </p>
      </section>
    </article>
  );
};

export default OptionedCocktail;
