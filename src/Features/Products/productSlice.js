import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productListThunk } from "./productThunk";

export const productsList = createAsyncThunk("getAllproductList",productListThunk);

const initialState = {
    isLoading : false,
    productData : [],
}

const productSlice = createSlice({
    name : "getAllproductList",
    initialState,
    reducers : (state, {payload}) => {

    },
    extraReducers : (builder) => {
        builder
        .addCase(productsList.pending,(state)=>{

        })
        .addCase(productsList.fulfilled,(state, {payload})=>{
            state.productData = payload;
        })
        .addCase(productsList.rejected,(state, {payload})=>{

        })
    }
});

export default productSlice.reducer;