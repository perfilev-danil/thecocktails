import { useParams } from "react-router-dom";
import type { OptionTypes } from "../types/options/optionTypes";
import { useGetListQuery } from "../api/cocktailsApi";
import { useGetCocktailsByFilterQuery } from "../api/cocktailsApi";

import { skipToken } from "@reduxjs/toolkit/query";
import { fromSlug } from "../lib/slug/fromSlug";

export const useOptionedData = () => {
  const { optionType, optionSlug } = useParams<{
    optionType: OptionTypes;
    optionSlug: string;
  }>();

  const { data: list } = useGetListQuery(optionType ?? skipToken);

  const decodedSlug = fromSlug(optionSlug);

  const { data: cockctails } = useGetCocktailsByFilterQuery(
    optionType && decodedSlug
      ? { type: optionType, slug: decodedSlug }
      : skipToken,
  );

  return { list, cockctails };
};
