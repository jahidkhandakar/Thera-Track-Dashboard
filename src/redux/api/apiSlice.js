import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
      baseUrl: `${import.meta.env.VITE_API_URL}/api/v1`,
    // baseUrl: "https://rakib8080.sobhoy.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
=======
    baseUrl: `${import.meta.env.VITE_API_URL}/api/v1`,
    prepareHeaders: (headers) => {
>>>>>>> f5d0235d4778e13792efc2d1e931734a2b766d8e
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Promotion", "Product", "Users", "Subscription", "Setting"],

  endpoints: () => ({}),
});
