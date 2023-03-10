import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: getDefaultMiddleware().concat(githubApi.middleware),
});
