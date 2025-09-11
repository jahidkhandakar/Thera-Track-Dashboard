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
            query: () => `/settings/about-us`,
            providesTags: [{type: "Setting"}]
        }),
       updateAbout: builder.mutation({
         query: (data) => ({
            url: `/settings/about-us`,
            method: "POST",
            body: {
                aboutUs: data
            }
         }),
         invalidatesTags: [{type: "Setting"}]
       }),

        getPrivacy: builder.query({
            query: () => `/settings/privacy-policy`,
            providesTags: [{type: "Setting"}]
        }),

       updatePrivacy : builder.mutation({
         query: (data) => ({
            url: `/settings/privacy-policy`,
            method: "POST",
            body: {
                privacyPolicy:data
            }
         }),
         invalidatesTags: [{type: "Setting"}]
       })
  

    })
})

export const {  
    useGetTearmsQuery,
    useUpdateTearmsMutation,
    useGetAboutQuery,
    useUpdateAboutMutation,
    useGetPrivacyQuery,
    useUpdatePrivacyMutation
} = settingSlice;