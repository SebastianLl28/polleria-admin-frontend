import { Store } from '@/model/Store.model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface StoreSelectedState {
  store: Store | null
}

const initialState: StoreSelectedState = {
  store: null
}

const storeSelectedSlice = createSlice({
  name: 'storeSelected',
  initialState,
  reducers: {
    setStore: (state, action: PayloadAction<Store>) => {
      state.store = action.payload
    },
    clear: state => {
      state.store = null
    }
  }
})

export const { setStore, clear } = storeSelectedSlice.actions

export default storeSelectedSlice.reducer
