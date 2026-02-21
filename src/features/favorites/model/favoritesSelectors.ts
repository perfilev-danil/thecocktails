import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store/store";

export const selectFavoritesByIds = createSelector(
  (state: RootState) => state.favorites.favoritesByIds,
  (favoritesByIds) => Object.keys(favoritesByIds),
);

export const selectFavoritesByIdMap = (state: RootState) =>
  state.favorites.favoritesByIds;
