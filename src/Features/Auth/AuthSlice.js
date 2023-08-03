import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
    isLoginBtnDisabled: true,
    loginFormData : {},
}

export const loginApi =  createAsyncThunk("auth",)


const AuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        handleChangeAuth : (state, { payload: {name,value}}) => {
            state.loginFormData[name] = value
        },
    },
})

export const { handleChangeAuth } = AuthSlice.actions;

export default AuthSlice.reducer;