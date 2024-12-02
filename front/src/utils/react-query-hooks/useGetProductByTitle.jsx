import axios from "axios";
import { useQuery } from "react-query";



const fetchSingleProduct = (title)=>{
    return axios.get(`${import.meta.env.VITE_API_URL}/products/single?title=${title}`);
}

const useGetProductByTitle = (title,onSuccess,onError)=>{
    return useQuery(
        ["product",title],
        ()=>fetchSingleProduct(title),
        {
            onSuccess,
            onError
        }
    )
}

export default useGetProductByTitle;