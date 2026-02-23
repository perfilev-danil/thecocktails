import type { CocktailFullUI } from "./cocktailFullUI";

export type CocktailShortUI = Pick<CocktailFullUI, "id" | "name" | "image">;
