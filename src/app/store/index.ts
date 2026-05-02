import { configureStore } from "@reduxjs/toolkit";
import { episodeSlice } from "../../entity/episode/api";

export default configureStore({
  reducer: {
    [episodeSlice.reducerPath]: episodeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(episodeSlice.middleware),
});
