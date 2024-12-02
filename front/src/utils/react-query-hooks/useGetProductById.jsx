import axios from "axios";
import { useQuery } from "react-query";



const fetchSingleProduct = (_id)=>{
    return axios.get(`${import.meta.env.VITE_API_URL}/products/single/${_id}`);
}

const useGetProductById = (_id,onSuccess,onError)=>{
    return useQuery(
        ["product",_id],
        ()=>fetchSingleProduct(_id),
        {
            onSuccess,
            onError
        }
    )
}

export default useGetProductById;