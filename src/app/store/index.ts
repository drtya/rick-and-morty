import { configureStore } from "@reduxjs/toolkit";
import { episodeSlice } from "../../entity/episode/api";
import { characterSlice } from "@/entity/character/api";

export default configureStore({
  reducer: {
    [episodeSlice.reducerPath]: episodeSlice.reducer,
    [characterSlice.reducerPath]: characterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(episodeSlice.middleware)
      .concat(characterSlice.middleware),
});
