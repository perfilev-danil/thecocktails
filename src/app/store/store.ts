import { configureStore } from "@reduxjs/toolkit";
import { cocktailsApi } from "../../features/Cocktails/api/cocktailsApi";
import favoritesReducer from "../../features/favorites/model/favoritesSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    [cocktailsApi.reducerPath]: cocktailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
