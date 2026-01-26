import { apiSlice } from "../../api/apiSlice";

const allUsers = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => `/user`,
    }),
  }),
});

export const { useAllUsersQuery } = allUsers;
