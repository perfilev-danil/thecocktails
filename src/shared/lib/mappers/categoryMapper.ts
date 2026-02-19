import type { CategoryApi } from "../../types/api/categories/categoryApi";

export const mapCategoryToUI = (c: CategoryApi) => ({
  name: c.strCategory,
});
