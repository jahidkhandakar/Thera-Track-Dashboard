import { apiSlice } from "../../api/apiSlice";


const editSubscription = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        editSubscription: builder.mutation({
            query: ({ id , data}) => ({
                url: `/subscription/update/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: [{type: "Subscription"}]
        })
    })
})

export const {useEditSubscriptionMutation} = editSubscription