import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    value: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")):null ,
  },
  reducers: {
    activeuser: (state,action) => {
        state.value=action.payload
    }
  },
})

export const { activeuser } = userSlice.actions

export default userSlice.reducer