import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const questionApi = createApi({
    reducerPath: "questionApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/question" }),

    endpoints: (builder) => ({

        postQuestion: builder.mutation({
            query: ({questions, id, token}) => {
                return{
                    url: `/ask/${id}`,
                    method: "POST",
                    body: questions,
                    headers: {
                        "authorization": `Bearer ${token}`
                    }
                }
            }
        }),






    }),
})




