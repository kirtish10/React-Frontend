import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('authToken')
    ? localStorage.getItem('authToken')
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmailId: (state, action) => {
      state.emailId = action.payload.email;
    },
    setUserId: (state, action) => {
      state.userId = action.payload.id;
    },
    setCredentials: (state, action) => {
      state.token = action.payload['authToken']
      // console.log(action.payload['refreshToken'])
      state.refreshToken = action.payload['refreshToken']
      localStorage.setItem('authToken', action.payload['authToken']);
      localStorage.setItem('refreshToken', action.payload['refreshToken']);
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.removeItem('authToken')
      localStorage.removeItem('refreshToken')
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    }
  },
});

export const { setCredentials, logout, setUserId, setEmailId, setUserInfo } = authSlice.actions;

export default authSlice.reducer;