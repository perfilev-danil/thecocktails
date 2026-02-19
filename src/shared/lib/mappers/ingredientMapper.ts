import type { IngredientApi } from "../../types/api/Ingredients/ingredientApi";

export const mapIngredientToUi = (i: IngredientApi) => ({
  name: i.strIngredient1,
});
