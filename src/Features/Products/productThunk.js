import axios from "axios";

export const productListThunk = async (_,thunkAPI) => {
    try {
        const resp = await axios.get("https://fakestoreapi.com/products/");
        return resp.data;
    } catch (error) {
        return error;
    }
}