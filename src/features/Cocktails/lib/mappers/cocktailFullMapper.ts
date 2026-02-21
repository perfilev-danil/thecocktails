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
  ingredient1: c.strIngredient1,
  ingredient2: c.strIngredient2,
  ingredient3: c.strIngredient3,
  ingredient4: c.strIngredient4,
  ingredient5: c.strIngredient5,
});
