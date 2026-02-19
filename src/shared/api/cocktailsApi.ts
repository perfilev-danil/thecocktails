import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_API } from "./baseApi";
import type { CocktailsFullApiResponse } from "../types/api/cocktails/cocktailsFullApiResponse";
import type { CocktailShortUI } from "../types/ui/cocktails/cocktailShortUI";
import type { CocktailFullUI } from "../types/ui/cocktails/cocktailFullUI";
import { mapShortCocktailToUI } from "../lib/mappers/cocktailShortMapper";
import { mapFullCocktailToUI } from "../lib/mappers/cocktailFullMapper";
import type { OptionsApiResponse } from "../types/options/optionsApiResponse";
import type { ListItem } from "../types/ui/listItems/listItem";
import { mapCategoryToUI } from "../lib/mappers/categoryMapper";
import { mapIngredientToUi } from "../lib/mappers/ingredientMapper";
import type { OptionTypes } from "../types/options/optionTypes";
import { optionsMap } from "../lib/configs/optionsMap";

export const cocktailsApi = createApi({
  reducerPath: "cocktails",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
  }),
  endpoints: (builder) => ({
    getList: builder.query<ListItem[], OptionTypes>({
      query: (type: OptionTypes) => {
        return `/list.php?${optionsMap[type]}=list`;
      },
      transformResponse: (
        response: OptionsApiResponse,
        _meta,
        type: OptionTypes,
      ) => {
        if (!response.drinks) return [];
        const mappers = {
          categories: mapCategoryToUI,
          ingredients: mapIngredientToUi,
        };
        return response.drinks.map(mappers[type]);
      },
    }),
    getCocktailsByFilter: builder.query<
      CocktailShortUI[],
      { type: OptionTypes; slug: string }
    >({
      query: ({ type, slug }) => {
        return `filter.php?${optionsMap[type]}=${encodeURIComponent(slug)}`;
      },
      transformResponse: (response: OptionsApiResponse) => {
        if (!response.drinks) return [];
        return response.drinks.map(mapShortCocktailToUI);
      },
    }),
    getCocktailById: builder.query<CocktailFullUI | null, string>({
      query: (id) => `${BASE_API}/lookup.php?i=${id}`,
      transformResponse: (response: CocktailsFullApiResponse) => {
        if (!response.drinks) return null;
        return mapFullCocktailToUI(response.drinks[0]);
      },
    }),
  }),
});

export const {
  useGetListQuery,
  useGetCocktailByIdQuery,
  useGetCocktailsByFilterQuery,
} = cocktailsApi;
