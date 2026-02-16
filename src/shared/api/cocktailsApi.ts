import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_API } from "./baseApi";
import type { CocktailsShortApiResponse } from "../types/api/cocktailsShortApiResponse";
import type { CocktailShortUI } from "../types/ui/cocktailShortUI";
import { mapShortCocktailToUI } from "../lib/mappers/cocktailShortMapper";
export const cocktailsApi = createApi({
  reducerPath: "cocktails",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
  }),
  endpoints: (builder) => ({
    getCocktailsByCategory: builder.query<CocktailShortUI[], string>({
      query: (
        category,
      ) => `${BASE_API}/filter.php?c=${encodeURIComponent(category)}
`,
      transformResponse: (response: CocktailsShortApiResponse) => {
        if (!response.drinks) return [];
        return response.drinks.map(mapShortCocktailToUI);
      },
    }),
  }),
});

export const { useGetCocktailsByCategoryQuery } = cocktailsApi;
