import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";

const API_URI = "http://localhost:5173/api"

const baseQuery =  fetchBaseQuery({baseUrl:API_URI})


const apiSlice = createApi({
    baseQuery,
    tagTypes:[],
    endpoints:(builder)=>({})
})

export default apiSlice