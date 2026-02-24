import styles from "./OptionedCocktail.module.scss";
import { useParams } from "react-router-dom";
import { useGetCocktailByIdQuery } from "../../../features/Cocktails/api/cocktailsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import FavoriteButton from "../../../features/Cocktails/ui/FavoriteButton/FavoriteButton";
import BackButton from "../../../shared/ui/BackButton/BackButton";
import React from "react";

const OptionedCocktail = () => {
  const { cocktailId } = useParams();

  const { data: cocktail } = useGetCocktailByIdQuery(cocktailId ?? skipToken);
  console.log(cocktail);

  return (
    <article className={styles.cocktail}>
      <div className={styles.cocktail__card}>
        <div className={styles.cocktail__info}>
          <nav className={styles.cocktail__navbar}>
            <BackButton />
          </nav>
          <header className={styles.cocktail__head}>
            <h1>{cocktail?.name}</h1>
            {cocktailId && <FavoriteButton itemId={cocktailId} />}
          </header>
          <dl className={styles.cocktail__meta}>
            {cocktail?.tags && (
              <>
                <dt>Tags</dt>
                <dd>{cocktail?.tags}</dd>
              </>
            )}
            {cocktail?.iba && (
              <>
                <dt>IBA</dt>
                <dd>{cocktail?.iba}</dd>
              </>
            )}
            <dt>Alcoholic</dt>
            <dd>{cocktail?.alcoholic}</dd>
            <dt>Glass</dt>
            <dd>{cocktail?.glass}</dd>
          </dl>
        </div>

        <dl className={styles.cocktail__meta}>
          {cocktail?.ingredients.map((ingredient) => {
            return (
              <React.Fragment key={ingredient.name}>
                <dt>{ingredient.name}</dt>
                <dd>{ingredient.measure || "to taste"}</dd>
              </React.Fragment>
            );
          })}
        </dl>
        <img
          className={styles.cocktail__image}
          src={cocktail?.image}
          alt={cocktail?.name}
        />
      </div>

      <div className={styles.cocktail__instructionsWrapper}>
        <p className={styles.cocktail__instructions}>
          {cocktail?.instructions}
        </p>
      </div>
    </article>
  );
};

export default OptionedCocktail;
