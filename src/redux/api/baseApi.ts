import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1000/api",
    credentials: "include",
  }),
  tagTypes: ["product"],
  endpoints: () => ({}),
});
