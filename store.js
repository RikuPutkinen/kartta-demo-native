import { configureStore } from '@reduxjs/toolkit'

import { locationApi } from './services/locations'

export const store = configureStore({
  reducer: {
    [locationApi.reducerPath]: locationApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(locationApi.middleware),
})
