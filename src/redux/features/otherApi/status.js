

import { apiSlice } from "../../api/apiSlice";

 

const status = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        status: builder.query({
            query: () => `/payment/user-count-and-total-earning`, 
        })
    })
})

export const {useStatusQuery} = status;