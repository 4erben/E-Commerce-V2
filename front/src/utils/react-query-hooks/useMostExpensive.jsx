import axios from "axios"
import { useQuery } from "react-query";

const fetchMostExpensive = ()=>{
    return axios.get(`${import.meta.env.VITE_API_URL}/products/most-expensive`);
}


const useMostExpensive = (onSuccess)=>{
    return useQuery(
        ["most-expensive"],
        fetchMostExpensive,
        {
            onSuccess
        }

    )
}

export default useMostExpensive;