import axios from "axios";
import { useQuery } from "react-query";


const fetchProducts = (query)=>{
    const {categories = [] , price ,title ="" ,pageNumber=1, perPage=12} = query;
    const queryString = categories.join(",");
    return axios.get(`${import.meta.env.VITE_API_URL}/products?page=${pageNumber}&limit=${perPage}&maxPrice=${price}&categories=${queryString}&title=${title}`)
}

const usePaginatedProducts = (query,onSuccess,onError)=>{
    return  useQuery(
        ["paginated products",query],
        ()=>fetchProducts(query),
        {
            onSuccess,
            onError,
        }
    );
}

export default usePaginatedProducts;