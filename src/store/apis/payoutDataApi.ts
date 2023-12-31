import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Base url in .env for prod
// but for test purposes, i put the raw url here
// const lithiumUrl = import.meta.env.VITE_LITHIUM_BASE_URL;

const payoutDataApi = createApi({
  reducerPath: "payoutsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test",
    fetchFn: async (...args) => {
      return fetch(...args);
    },
  }),
  endpoints: (builder) => ({
    fetchData: builder.query<void, void>({
      query: () => {
        return { url: "/payouts", method: "GET" };
      },
    }),
    searchDataOld: builder.query<string, string>({
      query: (searchTerm: string) => {
        return { url: `/search?query=${searchTerm}`, method: "GET" };
      },
    }),
    searchData: builder.mutation({
      query: (searchTerm: string) => {
        return { url: `/search?query=${searchTerm}`, method: "GET" };
      },
    }),
  }),
});

export const { useFetchDataQuery, useSearchDataMutation } = payoutDataApi;
export default payoutDataApi;
