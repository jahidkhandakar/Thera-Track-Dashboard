
import { apiSlice } from "../../api/apiSlice";

 

const singleSubscription = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        singleSubscription: builder.query({
            query: (id) => `/subscription/read/${id}`, 
        })
    })
})

export const {useSingleSubscriptionQuery} = singleSubscription;