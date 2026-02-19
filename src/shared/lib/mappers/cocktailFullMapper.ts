import type { CocktailFullApi } from "../../types/api/cocktails/cocktailFullApi";

export const mapFullCocktailToUI = (c: CocktailFullApi) => ({
  id: c.idDrink,
  name: c.strDrink,
  category: c.strCategory,
  tags: c.strTags,
  iba: c.strIBA,
  alcoholic: c.strAlcoholic,
  glass: c.strGlass,
  instructions: c.strInstructions,
  image: c.strDrinkThumb,
});
