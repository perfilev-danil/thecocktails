import type { CocktailApi } from "./cocktailApi";

export type CocktailsApiResponse = {
  drinks: CocktailApi[] | null;
};
