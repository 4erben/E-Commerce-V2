import axios from "axios";
import { useQuery } from "react-query";


const fetchSpecialOffer = ()=>{
    return axios.get(`${import.meta.env.VITE_API_URL}/products/specialoffer`)
}
const useSpecialProducts = (onSuccess,onError,componentName,isEnabled = true)=>{
    return  useQuery(
        ["special offer",componentName],
        fetchSpecialOffer,
        {
            onSuccess,
            onError,
            enabled:isEnabled
        }
    )
}

export default useSpecialProducts;