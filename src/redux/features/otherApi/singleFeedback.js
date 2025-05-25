
import { apiSlice } from "../../api/apiSlice";

 

const singleFeedback = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        singleFeedback: builder.query({
            query: (id) => `/send/get-single-feedback/${id}`,
           
        })
    })
})

export const {useSingleFeedbackQuery} = singleFeedback;