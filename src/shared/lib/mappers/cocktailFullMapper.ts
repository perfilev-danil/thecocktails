import type { CocktailFullApi } from "../../types/api/cocktailFullApi";

export const mapFullCocktailToUI = (c: CocktailFullApi) => ({
  id: c.idDrink,
  name: c.strDrink,
  image: c.strDrinkThumb,
  category: c.strCategory,
});
