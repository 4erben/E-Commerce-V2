import axios from "axios";
import { useQuery } from "react-query";



const fetchData =()=>{
    return axios.get(`${import.meta.env.VITE_API_URL}/products/topcategories`);
}
 

const useTopCategoriesProducts = ()=>{
    return  useQuery(
        ["top categories"],
        fetchData
    )
}

export default useTopCategoriesProducts;