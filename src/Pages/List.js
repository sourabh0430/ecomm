import { useEffect, useState } from "react";
import axios from "axios";
const List = () => {

    const [productData, setProductData] = useState([]);
    const [searchKey, setSearchKey] = useState();
    const fetchData = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data)
        setProductData(res.data);
    }

    useEffect(()=>{
        fetchData();
    },[searchKey]);

    useEffect(()=>{
        fetchData();
    },[]);

    return <div>
        <input  onChange={(e)=>setSearchKey(e.target.value)} />
        <select name="product">
            <option>Select Product</option>
            {productData.map((product)=>{
                return <option  key={product.id}>{product.title}</option>
            })}
        </select>
        <ul>
            {productData.map((product)=>{
                return <li key={product.id}>{product.title}</li>
            })}
        </ul>
    </div>;
}

export default List;