import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmailId: (state, action) => {
      state.emailId = action.payload.email;
      console.log(state.emailId)
    },
    setUserId: (state, action) => {
      state.userId = action.payload.id;
      console.log(state.userId)
    },
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
    setCode: (state, action) => {
      state.code = action.payload;
    }
  },
});

export const { setCredentials, logout, setUserId, setEmailId } = authSlice.actions;

export default authSlice.reducer;