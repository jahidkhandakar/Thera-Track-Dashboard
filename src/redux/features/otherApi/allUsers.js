import { apiSlice } from "../../api/apiSlice";

const allUsers = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => `/user`,
      providesTags: ["Users"],
    }),
    updateUserStatus: builder.mutation({
      query: ({ id, action }) => ({
        url: `/update-user-status/${id}`,
        method: "PATCH",
        body: { action },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useAllUsersQuery, useUpdateUserStatusMutation } = allUsers;
