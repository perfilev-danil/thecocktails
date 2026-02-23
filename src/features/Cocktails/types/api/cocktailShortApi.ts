import type { CocktailFullApi } from "./cocktailFullApi";

export type CocktailShortApi = Pick<
  CocktailFullApi,
  "idDrink" | "strDrink" | "strDrinkThumb"
>;
