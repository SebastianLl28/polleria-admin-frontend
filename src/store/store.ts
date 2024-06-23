import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice.store'
import customerFilterSlice from './customerFilterSlice.store'
import employeeFilterSlice from './employeeFilterSlice.store'
import storeSelectedSlice from './storeSelectedSlice.store'

export const store = configureStore({
  reducer: {
    user: userSlice,
    customerFilter: customerFilterSlice,
    employeeFilter: employeeFilterSlice,
    storeSelected: storeSelectedSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
