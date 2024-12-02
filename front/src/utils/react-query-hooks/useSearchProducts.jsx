import axios from "axios"
import { useQuery } from "react-query"


const fetchProducts = (query)=>{
    return axios.get(`${import.meta.env.VITE_API_URL}/`)
}


const useSearchProducts = (query)=>{
    return useQuery(
        ["search products",query],
        ()=>fetchProducts(query)
    )
}