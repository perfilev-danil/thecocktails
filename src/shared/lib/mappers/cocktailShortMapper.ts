import type { CocktailShortApi } from "../../types/api/cocktails/cocktailShortApi";

export const mapShortCocktailToUI = (c: CocktailShortApi) => ({
  id: c.idDrink,
  name: c.strDrink,
  image: c.strDrinkThumb,
});
