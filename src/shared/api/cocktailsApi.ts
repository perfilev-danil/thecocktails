import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_API } from "./baseApi";
import type { CocktailsApiResponse } from "../types/api/cocktailsApiResponse";
import type { CocktailUI } from "../types/ui/cocktailUI";
import { mapCocktailToUI } from "../lib/mappers/cocktailMapper";
export const cocktailsApi = createApi({
  reducerPath: "cocktails",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
  }),
  endpoints: (builder) => ({
    getCocktailsByCategory: builder.query<CocktailUI[], string>({
      query: (
        category,
      ) => `${BASE_API}/filter.php?c=${encodeURIComponent(category)}
`,
      transformResponse: (response: CocktailsApiResponse) => {
        if (!response.drinks) return [];
        return response.drinks.map(mapCocktailToUI);
      },
    }),
  }),
});

export const { useGetCocktailsByCategoryQuery } = cocktailsApi;
