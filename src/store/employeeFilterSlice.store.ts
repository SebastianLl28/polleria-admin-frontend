import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface employeeState {
  search: string
  order: 'ALL' | 'ACTIVE' | 'INACTIVE'
}

const initialState: employeeState = {
  search: '',
  order: 'ALL'
}

const employeeFilterSlice = createSlice({
  name: 'employeeFilter',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setOrder: (state, action: PayloadAction<'ALL' | 'ACTIVE' | 'INACTIVE'>) => {
      state.order = action.payload
    }
  }
})

export const { setOrder, setSearch } = employeeFilterSlice.actions

export default employeeFilterSlice.reducer
