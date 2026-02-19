import { configureStore } from "@reduxjs/toolkit";
import { cocktailsApi } from "../../shared/api/cocktailsApi";
//import optionsReducer from "../../features/model/optionsSlice";

export const store = configureStore({
  reducer: {
    //options: optionsReducer,
    [cocktailsApi.reducerPath]: cocktailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
