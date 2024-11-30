import axios from "axios";
import { useQuery } from "react-query";



const fetchCategories = ()=>{
    return axios.get(`${import.meta.env.VITE_API_URL}/categories/names`);
}

const useFetchCategories = (onSuccess)=>{
    return useQuery(
        ["all-categories"],
        fetchCategories,
        {
            onSuccess
        }
    )
}

export default useFetchCategories;