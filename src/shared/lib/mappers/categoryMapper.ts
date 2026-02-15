import type { CategoryApi } from "../../types/api/categoryApi";

export const mapCategoryToUI = (c: CategoryApi) => ({
  name: c.strCategory,
});
