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
            query: (token) => {
                return{
                    url: "alluser",
                    method: "GET",
                    header: {
                        "authorization": `Bearer ${token}`
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

        //get all question
        getAllQuestion: builder.query({
            query: () => {
                return{
                    url: "allquestion",
                    method: "GET",
                    headers: {
                        "Content-type" : "application/json"
                    }
                }
            }
        }), 

        getQuestions: builder.query({
            query: ({id}) => {
                return {
                    url: `question/${id}`,
                    method: "GET",
                    headers: {
                        "Content-type" : "application/json"
                    }
                }
            }
        }),

        postAnswer: builder.mutation({
            query: ({id, answer, token}) => {
                return {
                    url: `answer/${id}`,
                    method: 'PATCH',
                    body: answer, 
                    headers: {
                        "authorization": `Bearer ${token}`
                    }
                }
            }
        }),

        // displayAnswer: builder.query({
        //     query: ({id}) => {
        //         return{
        //             url: `allanswers/${id}`,
        //             method: 'GET',
        //             headers: {
        //                 "Content-type" : "application/json"
        //             }
        //         }
        //     }
        // }),
    }),
    
})

export const { useUserSigneUpMutation, useUserLoginMutation, 
    useLogedUserQuery, useAskQuestionMutation, useGetAllUserQuery, 
   useGetAllQuestionQuery, useGetQuestionsQuery, usePostAnswerMutation, useDisplayAnswerQuery } = userAuthApi

