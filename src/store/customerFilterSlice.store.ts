import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CustomerStatus } from '@/model/Customer.model'

export interface CustomerFilterState {
  name: string
  status: undefined | keyof typeof CustomerStatus
  page: number
  size: number
  orderBy: {
    key: string
    order: 'asc' | 'desc' | null
  } | null
}

const initialState: CustomerFilterState = {
  name: '',
  status: undefined,
  page: 0,
  size: 5,
  orderBy: null
}

const customerFilterSlice = createSlice({
  name: 'customerFilter',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setStatus: (
      state,
      action: PayloadAction<keyof typeof CustomerStatus | undefined>
    ) => {
      state.status = action.payload
    },
    clearFilter: state => {
      state.name = ''
      state.status = undefined
    },
    setFilter: (state, action: PayloadAction<Partial<CustomerFilterState>>) => {
      // state = action.payload //! ❌ No se puede hacer esto
      // state = { ...state, ...action.payload } //! ❌ No se puede hacer esto
      // return { ...state, ...action.payload } // ✅
      Object.assign(state, action.payload) // ✅
    }
  }
})

export const { setName, setStatus, clearFilter, setFilter } = customerFilterSlice.actions

export default customerFilterSlice.reducer
