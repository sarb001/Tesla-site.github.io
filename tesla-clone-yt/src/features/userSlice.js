import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name : 'user',
    initialState: {
        user : null,
    },
    reducers : {
        login : (state,action) => {          // while logging in perform this Action
            state.user = action.payload
        },
        logout : (state) => {                // while logging out user is null 
           state.user = null 
        },
    },
})

export const { login ,logout } = userSlice.actions;
export const selectUser = (state) => state.user.user 
export default userSlice.reducer