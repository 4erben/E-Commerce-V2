import axios from "axios";
import { useQuery } from "react-query";


const fetchNewArrival = ()=>{
    return axios.get(`${import.meta.env.VITE_API_URL}/products/recentProducts`)
}
const useRecentProducts = (onSuccess,onError,componentName,isEnabled = true)=>{
    return  useQuery(
        ["new arrival",componentName],
        fetchNewArrival,
        {
            onSuccess,
            onError,
            enabled:isEnabled
        }
    )
}

export default useRecentProducts;