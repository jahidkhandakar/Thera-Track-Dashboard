
import { apiSlice } from "../../api/apiSlice";

 

const allUsers = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allUsers: builder.query({
            query: () => `/user?role=user`,
           
        })
    })
})

export const {useAllUsersQuery} = allUsers; 