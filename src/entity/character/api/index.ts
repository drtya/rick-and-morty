import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Character } from "../models/dto";

export const characterSlice = createApi({
  reducerPath: "character",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["character"],
  endpoints: (builder) => ({
    getCharacter: builder.query<Character, string>({
      query: (url) => url,
      providesTags: ["character"],
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
  }),
});

export const { useGetCharacterQuery } = characterSlice;
export default characterSlice.reducer;