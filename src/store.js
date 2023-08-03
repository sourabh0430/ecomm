import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Features/Products/productSlice";
import AuthSlice from "./Features/Auth/AuthSlice";

const store = configureStore({
    reducer : {
        products : productSlice,
        auth : AuthSlice
    }
});

export default store;