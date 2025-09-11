import { apiSlice } from "../../api/apiSlice";


const settingSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTearms: builder.query({
            query: () => `/settings/terms`,
            providesTags: [{type: "Setting"}]
        }),
       updateTearms: builder.mutation({
         query: (data) => ({
            url: `/settings/terms`,
            method: "POST",
            body: {
                termsConditions:data
            }
         }),
         invalidatesTags: [{type: "Setting"}]
       }),
        getAbout: builder.query({
            query: () => `/settings/terms`,
            providesTags: [{type: "Setting"}]
        }),
       updateAbout: builder.mutation({
         query: (data) => ({
            url: `/settings/terms`,
            method: "POST",
            body: data
         }),
         invalidatesTags: [{type: "Setting"}]
       })

    //     getTearms: builder.query({
    //         query: () => `/settings/terms`,
    //         providesTags: [{type: "Setting"}]
    //     }),
    //    updateTearms: builder.mutation({
    //      query: (data) => ({
    //         url: `/settings/terms`,
    //         method: "POST",
    //         body: data
    //      }),
    //      invalidatesTags: [{type: "Setting"}]
    //    })
  

    })
})

export const {  
    useGetTearmsQuery,
    useUpdateTearmsMutation,
} = settingSlice;