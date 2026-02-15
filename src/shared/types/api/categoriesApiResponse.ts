import type { CategoryApi } from "./categoryApi";

export type CategoriesApiResponse = {
  drinks: CategoryApi[] | null;
};
