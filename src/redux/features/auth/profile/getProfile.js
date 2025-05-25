import { apiSlice } from "../../../api/apiSlice";

const getProfile = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => `/user/profile`,
            providesTags: [{type: "Users"}]
        })
    })
})

export const {useGetProfileQuery} = getProfile;