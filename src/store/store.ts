import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice.store'
import customerFilterSlice from './customerFilterSlice.store'

export const store = configureStore({
  reducer: {
    user: userSlice,
    customerFilter: customerFilterSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
