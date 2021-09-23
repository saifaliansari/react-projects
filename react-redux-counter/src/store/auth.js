import { createSlice } from '@reduxjs/toolkit'

const intialAuthState = { isAuthenticated: false }

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: intialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;

        }
    }
})

export const authAction = authenticationSlice.actions;

export default authenticationSlice.reducer;
