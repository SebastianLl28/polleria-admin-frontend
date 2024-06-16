import { CustomerStatus } from '@/model/Customer.model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CustomerFilterState {
  search: string
  orderBy: undefined | keyof typeof CustomerStatus
}

const initialState: CustomerFilterState = {
  search: '',
  orderBy: undefined
}

const customerFilterSlice = createSlice({
  name: 'customerFilter',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setOrderBy: (state, action: PayloadAction<keyof typeof CustomerStatus>) => {
      state.orderBy = action.payload
    },
    clearFilter: state => {
      state.search = ''
      state.orderBy = undefined
    }
  }
})

export const { setSearch, setOrderBy, clearFilter } = customerFilterSlice.actions

export const selectFilter = (state: { customerFilter: CustomerFilterState }) =>
  state.customerFilter.search

export default customerFilterSlice.reducer
