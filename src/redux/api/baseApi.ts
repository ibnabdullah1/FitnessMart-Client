import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fitness-mart-server.vercel.app/api",
    credentials: "include",
  }),
  tagTypes: ["product"],
  endpoints: () => ({}),
});
