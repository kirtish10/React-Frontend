import { apiSlice } from './apiSlice';
const USERS_URL = '/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (data) => ({
        url: `http://localhost:5000/api/auth/login`,
        method: 'POST',
        body: data,
      }),
    }),

    // logout: builder.mutation({
    //     query: () => ({
    //       url: `${USERS_URL}/logout`,
    //       method: 'POST',
    //     }),
    //   }),

    register: builder.mutation({
      query: (data) => ({
        url: `http://localhost:5000/api/auth/signup`,
        method: 'POST',
        body: data,
      }),
    }),

    verify: builder.mutation({
      query: (data) => ({
        url: `http://localhost:5000/api/auth/verifycode`,
        method: 'POST',
        body: data,
      }),
    }),



    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),


  }),
});



export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useVerifyMutation, useUpdateUserMutation } = userApiSlice;
