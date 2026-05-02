import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Episode } from "../models/dto";
import type { Pagination } from "@/shared/models/pagination";

export const episodeSlice = createApi({
  reducerPath: "episode",
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_API_URL + "/api",
    })(args, api, extraOptions);

    if (result.error?.status === 404) {
      return {
        data: {
          info: { count: 0, pages: 1, next: null, prev: null },
          results: [],
        },
      };
    }
    return result;
  },
  tagTypes: ["Episode"],
  endpoints: (builder) => ({
    getEpisodes: builder.query<
      Pagination<Episode>,
      { page: number; search: string }
    >({
      query: ({ page, search }) => `/episode?page=${page}&name=${search}`,
      providesTags: ["Episode"],
      serializeQueryArgs: ({ endpointName }) => endpointName,

      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 1) {
          // ✅ новый поиск или первая страница — заменяем
          currentCache.results = newItems.results;
        } else {
          // ✅ следующая страница — накапливаем
          currentCache.results.push(...newItems.results);
        }
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
