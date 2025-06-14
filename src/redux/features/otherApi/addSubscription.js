import { apiSlice } from "../../api/apiSlice";


const addSubscription = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addSubscription: builder.mutation({
            query: (data) => ({
                url: `/subscription/create`,
                method: "POST",
                body: data
            }),
            invalidatesTags: [{type: "Subscription"}]
        })
    })
})

export const {useAddSubscriptionMutation} = addSubscription