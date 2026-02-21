import type { OptionTypes } from "../../types/options/optionTypes";

export const optionApiKeys: Record<OptionTypes, string> = {
  categories: "strCategory",
  ingredients: "strIngredient1",
  glass: "strGlass",
  alcoholic: "strAlcoholic",
} as const;
