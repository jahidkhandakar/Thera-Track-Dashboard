 
import { apiSlice } from "../../api/apiSlice"; 

const subscription = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        subscription: builder.query({
            query: () => `/subscription/read`,
           
        })
    })
})

export const {useSubscriptionQuery} = subscription;