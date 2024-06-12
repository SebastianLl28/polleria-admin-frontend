import { User } from '@/model/User.model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserState {
  user: Omit<User, 'password'> | null
}

const initialState: UserState = {
  user: {
    id: 1,
    username: 'admin',
    fullname: 'Administrator',
    status: true
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<User, 'password'>>) => {
      state.user = action.payload
    }
  }
})

export const { setUser } = userSlice.actions

export const selectUser = (state: { user: UserState }) => state.user.user

export default userSlice.reducer
