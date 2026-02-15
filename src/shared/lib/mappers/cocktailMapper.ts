import type { CocktailApi } from "../../types/api/cocktailApi";

export const mapCocktailToUI = (c: CocktailApi) => ({
  id: c.idDrink,
  name: c.strDrink,
  image: c.strDrinkThumb,
  category: c.strCategory,
});
