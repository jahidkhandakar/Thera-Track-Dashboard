import { apiSlice } from "../../api/apiSlice";

const subAdminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allSubAdmins: builder.query({
      query: () => `/user/get-all-sub-admins`, // Assuming sub-admin role
      providesTags: ["Users"],
    }),
    addSubAdmin: builder.mutation({
      query: (data) => ({
        url: `/user/create-sub-admin`, // Placeholder URL, update if needed
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useAllSubAdminsQuery, useAddSubAdminMutation } = subAdminApi;
