import { createApi } from "@reduxjs/toolkit/query/react";
import {
  fetchBaseQuery,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { BASE_API } from "./baseApi";
import type { CocktailsFullApiResponse } from "../types/api/cocktails/cocktailsFullApiResponse";
import type { CocktailShortUI } from "../types/ui/cocktails/cocktailShortUI";
import type { CocktailFullUI } from "../types/ui/cocktails/cocktailFullUI";
import { mapShortCocktailToUI } from "../lib/mappers/cocktailShortMapper";
import { mapFullCocktailToUI } from "../lib/mappers/cocktailFullMapper";
import type { OptionsApiResponse } from "../types/options/optionsApiResponse";
import type { ListItem } from "../types/ui/listItems/listItem";
import type { OptionTypes } from "../types/options/optionTypes";
import { optionsMap } from "../lib/configs/optionsMap";
import { optionApiKeys } from "../lib/configs/optionApiKeys";
import type { ApiSingleField } from "../types/api/common/common";

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
        const apiKey = optionApiKeys[type];
        return (response.drinks as ApiSingleField<typeof apiKey>[]).map(
          (item) => ({ name: item[apiKey] }),
        );
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
    getCocktailsByName: builder.query<CocktailShortUI[] | null, string>({
      query: (name) => `/search.php?s=${name}`,
      transformResponse: (response: CocktailsFullApiResponse) => {
        if (!response.drinks) return [];
        return response.drinks.map(mapFullCocktailToUI);
      },
    }),
    getFavoriteCocktails: builder.query<CocktailShortUI[], string[]>({
      async queryFn(favoritesById, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const results: CocktailShortUI[] = [];
          for (const id of favoritesById) {
            const res = await fetchWithBQ(`lookup.php?i=${id}`);
            if (res.error) return { error: res.error as FetchBaseQueryError };
            const data = res.data as CocktailsFullApiResponse;
            if (data.drinks && data.drinks[0]) {
              results.push(mapShortCocktailToUI(data.drinks[0]));
            }
          }
          return { data: results };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
  }),
});

export const {
  useGetListQuery,
  useGetCocktailByIdQuery,
  useGetCocktailsByFilterQuery,
  useGetCocktailsByNameQuery,
  useGetFavoriteCocktailsQuery,
} = cocktailsApi;
