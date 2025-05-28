
import { apiSlice } from "../../api/apiSlice";

 

const earningStatus = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        earningStatus: builder.query({
            query: () => `/payment/get-current-year-monthly-payment-sums`,
           
        })
    })
})

export const {useEarningStatusQuery} = earningStatus;