import { apiSlice } from "../../api/apiSlice";

 

const payment = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        payment: builder.query({
            query: () => `/payment/get-all-payments`, 
        })
    })
})

export const {usePaymentQuery} = payment;