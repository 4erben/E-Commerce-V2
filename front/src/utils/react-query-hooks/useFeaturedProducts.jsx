import axios from "axios";
import { useQuery } from "react-query";


const fetchProducts = ()=>{
    return axios.get(`${import.meta.env.VITE_API_URL}/products/featured`)
}

const useFeaturedProducts = ()=>{
    return  useQuery(
        ["featured-products"],
        fetchProducts
    );
}

export default useFeaturedProducts;