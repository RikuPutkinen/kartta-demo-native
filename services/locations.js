import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://192.168.56.1:3001/api/'

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getAllLocations: builder.query({
      query: () => 'markers/',
    }),
  }),
})

export const { useGetAllLocationsQuery } = locationApi

/*
import axios from 'axios'


async function getAll() {
  const res = await axios.get(baseUrl)
  return res.data
}

export default {
  getAll,
}
*/
