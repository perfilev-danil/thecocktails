import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  favoritesByIds: Record<string, true>;
}

const initialState: FavoritesState = {
  favoritesByIds: {},
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.favoritesByIds[id]) {
        delete state.favoritesByIds[id];
      } else {
        state.favoritesByIds[id] = true;
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
