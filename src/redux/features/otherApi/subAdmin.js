import { apiSlice } from "../../api/apiSlice";

const subAdminApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allSubAdmins: builder.query({
            query: () => `/user?role=sub-admin`, // Assuming sub-admin role
            providesTags: ['Users']
        }),
        addSubAdmin: builder.mutation({
            query: (data) => ({
                url: `/user/create-admin`, // Placeholder URL, update if needed
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Users']
        }),
        editSubAdmin: builder.mutation({
            query: ({ id, data }) => ({
                url: `/user/update-admin/${id}`, // Placeholder URL, update if needed
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Users']
        }),
        getSingleSubAdmin: builder.query({
            query: (id) => `/user/${id}`,
            providesTags: ['Users']
        })
    })
})

export const { 
    useAllSubAdminsQuery, 
    useAddSubAdminMutation, 
    useEditSubAdminMutation, 
    useGetSingleSubAdminQuery 
} = subAdminApi;
