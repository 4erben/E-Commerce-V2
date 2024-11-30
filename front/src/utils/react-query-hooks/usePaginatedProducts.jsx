import axios from "axios";
import { useQuery } from "react-query";


const fetchProducts = (pageNumber,perPage = 4,query)=>{
    const {categories =[] , price} = query;
    const queryString = categories.join(",");
    return axios.get(`${import.meta.env.VITE_API_URL}/products?page=${pageNumber}&limit=${perPage}&maxPrice=${price}&categories=${queryString}`)
}

const usePaginatedProducts = (pageNumber,perPage,categories,price,onSuccess,onError)=>{
    const query = {price:price};
    if(categories){query.categories = categories}
    return  useQuery(
        ["paginated products",pageNumber,perPage,categories,price],
        ()=>fetchProducts(pageNumber,perPage,query),
        {
            onSuccess,
            onError,
        }
    );
}

export default usePaginatedProducts;