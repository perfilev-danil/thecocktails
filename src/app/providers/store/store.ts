import { configureStore } from "@reduxjs/toolkit";
import { cocktailsApi } from "../../../features/Cocktails/api/cocktailsApi";
import verificationReducer from "../../../features/Verification/model/verificationSlice";
import favoritesReducer from "../../../features/Cocktails/model/favoritesSlice";

export const store = configureStore({
  reducer: {
    verification: verificationReducer,
    favorites: favoritesReducer,
    [cocktailsApi.reducerPath]: cocktailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
