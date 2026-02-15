import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API } from "./baseApi";
import type { CategoryUI } from "../types/ui/categoryUI";
import type { CategoriesApiResponse } from "../types/api/categoriesApiResponse";
import { mapCategoryToUI } from "../lib/mappers/categoryMapper";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryUI[], void>({
      query: () => "/list.php?c=list",
      transformResponse: (response: CategoriesApiResponse) => {
        if (!response.drinks) return [];
        return response.drinks.map(mapCategoryToUI);
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
