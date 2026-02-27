import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  favoritesByIds: Record<string, true>;
  count: number;
}

const initialState: FavoritesState = {
  favoritesByIds: {},
  count: 0,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.favoritesByIds[id]) {
        delete state.favoritesByIds[id];
        state.count--;
      } else {
        state.favoritesByIds[id] = true;
        state.count++;
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
