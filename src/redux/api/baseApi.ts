import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://airbnblight-b.vercel.app/api' }),
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

export const { useGetPlacesQuery } = baseApi;