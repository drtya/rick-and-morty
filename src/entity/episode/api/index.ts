import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Episode } from "../models/dto";
import type { Pagination } from "@/shared/models/pagination";

export const episodeSlice = createApi({
  reducerPath: "episode",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL + "/api" }),
  tagTypes: ["Episode"],
  endpoints: (builder) => ({
    getEpisodes: builder.query<Pagination<Episode>, number>({
      query: (page) => `/episode?page=${page}`,
      providesTags: ["Episode"],
      serializeQueryArgs: ({ endpointName }) => endpointName,

      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
        currentCache.info = newItems.info; 
      },

      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
    getEpisode: builder.query<Episode, string>({
      query: (episodeId) => `/episode/${episodeId}`,
    }),
  }),
});

export const { useGetEpisodeQuery, useGetEpisodesQuery } = episodeSlice;
export default episodeSlice.reducer;
