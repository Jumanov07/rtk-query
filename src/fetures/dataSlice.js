import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataSlice = createApi({
  reducerPath: "dataSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      //?   providesTags
      //! getGood
      //TODO  invalidatesTags
    }),
  }),
});

export const { useGetUsersQuery } = dataSlice;
