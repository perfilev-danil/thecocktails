import type { CocktailFullApi } from "../../types/api/cocktailFullApi";

export const mapFullCocktailToUI = (c: CocktailFullApi) => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = c[`strIngredient${i}` as keyof CocktailFullApi];
    const measure = c[`strMeasure${i}` as keyof CocktailFullApi];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure?.trim() || "",
      });
    }
  }

  return {
    id: c.idDrink,
    name: c.strDrink,
    category: c.strCategory,
    alternate: c.strDrinkAlternate,
    tags: c.strTags,
    iba: c.strIBA,
    alcoholic: c.strAlcoholic,
    glass: c.strGlass,
    instructions: c.strInstructions,
    image: c.strDrinkThumb,
    ingredients,
  };
};
