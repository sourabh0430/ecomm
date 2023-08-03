import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "./Product";
import { productsList } from "../../Features/Products/productSlice"


const ProductList = () => {
    const dispatch = useDispatch();
    const { productData } = useSelector((store)=>store.products)
    useEffect(()=>{
        dispatch(productsList());
    },[]);
    console.log(productData);

    return <>     
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2">    
        {productData.map((product)=>{
            return <Product product={product} key={product.id} />
        })}
        </div>
    </>;
}


export default ProductList;