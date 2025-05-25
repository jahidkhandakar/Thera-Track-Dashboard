import { apiSlice } from "../../api/apiSlice";

 

const getFeedback = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFeedback: builder.query({
            query: () => `/send/get-all-feedback`,
           
        })
    })
})

export const {useGetFeedbackQuery} = getFeedback;