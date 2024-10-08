// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
        getPlaces: builder.query({
            query: (payload) => {
                console.log('PAYLOAD', payload);
                return {
                    url: `/places?start_price=${payload.price}&end_price=${payload.priceTwo}`,
                    method: 'GET'
                }
            }
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPlacesQuery } = baseApi;