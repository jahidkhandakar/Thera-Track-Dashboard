import { apiSlice } from "../../../api/apiSlice";


const updateProfile = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateProfile: builder.mutation({
            query : (data) => ({
                url: `/user/profile`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags:[{type: "Users"}]
        })
    })
})

export const {useUpdateProfileMutation} = updateProfile;