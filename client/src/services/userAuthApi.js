import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const userAuthApi = createApi({
    reducerPath: "userAuthApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/user" }),

    endpoints: (builder) => ({

        userSigneUp: builder.mutation({
            query: (user) => {
                return{
                    url: "signup",
                    method: "POST",
                    body: user,
                    headers: {
                        "Content-type":"application/json"
                    }
                }
            }
        }),

        userLogin: builder.mutation({
            query: (user) => {
                return{
                    url: "login",
                    method: "POST",
                    body: user,
                    headers: {
                        "Content-type":"application/json"
                    }
                }
                
            }
        }),

        logedUser: builder.query({
            query: (token) =>{
                return{
                    url: "logeduser",
                    method: "GET",
                    headers: {
                        "authorization": `Bearer ${token}`
                    }
                }
            }
        }),

        getAllUser: builder.query({
            query: () => {
                return{
                    url: "alluser",
                    method: "GET",
                    header: {
                        "Content-type":"application/json"
                    }
                }
            }
        }),


        //ask question route
        askQuestion: builder.mutation({
            query: ({question, id}) => {
                return{
                    url: `ask/${id}`,
                    method: "POST",
                    body: question, 
                    headers: {
                        "Content-type":"application/json"
                    }
                }
            }
        }),


    }),
    
})

export const { useUserSigneUpMutation, useUserLoginMutation, useLogedUserQuery, useAskQuestionMutation, useGetAllUserQuery } = userAuthApi

