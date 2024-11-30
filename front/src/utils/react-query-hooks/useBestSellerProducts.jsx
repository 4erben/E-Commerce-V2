import axios from "axios";
import { useQuery } from "react-query";


const fetchBestSeller = ()=>{
    return axios.get(`${import.meta.env.VITE_API_URL}/products/bestrating`)
}
const useBestSellerProducts = (onSuccess,onError, componentName,isEnabled = true)=>{
    return  useQuery(
        ["best seller",componentName],
        fetchBestSeller,
        {
            onSuccess,
            onError,
            enabled:isEnabled
        }
    )
}

export default useBestSellerProducts;