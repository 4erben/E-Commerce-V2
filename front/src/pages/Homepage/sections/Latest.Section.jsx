import React, { useEffect, useState } from 'react';
import Card2 from '../../../components/card/Card2';
import useRecentProducts from '../../../utils/react-query-hooks/useRecentProducts';
import useSpecialProducts from '../../../utils/react-query-hooks/useSpecialProducts';
import useBestSellerProducts from '../../../utils/react-query-hooks/useBestSellerProducts';
import Swiper from '../../../components/swiper/Swiper';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';


export default function LatestHomeSection() {
    const [products , setProducts] = useState([]);
    const [activeProducts , setActiveProducts] = useState("arrival");

    useEffect(()=>{
        refetchArrival();
    },[])
    
    const onSuccess = (data)=>{
        setProducts(data.data);
    }
    const onError  = (e)=>{
        console.log(e);
    }
    const handleRefetch = (refetchFn , productsName)=>{
        refetchFn();
        setActiveProducts(productsName);
    }

    const {isLoading:arrivalIsLoading,isError:arrivalIsError,error:arrivalError,isFetching:arrivalIsFetching ,refetch:refetchArrival} = useRecentProducts(onSuccess,onError,"latest",true);
    const {isLoading:specialIsLoading,isError:specialIsError,error:specialError,isFetching:specialIsFetching,refetch:refetchSpecial} = useSpecialProducts(onSuccess,onError,"latest",false);
    const {isLoading:bestIsLoading,isError:bestIsError,error:bestError,isFetching:bestIsFetching,refetch:refetchBestSeller} = useBestSellerProducts(onSuccess,onError,"latest",false);

  return (
    <section className='py-10 grow w-full'>
        <div className='max-w-screen-lg grow mx-auto flex flex-col items-center'>
            <h1 className='text-3xl font-bold mb-6'>Latest Products</h1>
            <ul className='flex gap-6 text-primaryA0 font-medium capitalize text-center mb-4'>
                <li className={`cursor-pointer hover:text-primaryA40 ${activeProducts === "arrival"?"text-primaryA40 font-bold":""}`} onClick={()=>handleRefetch(refetchArrival,"arrival")}>new arrival</li>
                <li className={`cursor-pointer hover:text-primaryA40 ${activeProducts === "best"?"text-primaryA40 font-bold":""}`} onClick={()=>handleRefetch(refetchBestSeller,"best")}>best seller</li>
                <li className={`cursor-pointer hover:text-primaryA40 ${activeProducts === "special"?"text-primaryA40 font-bold":""}`} onClick={()=>handleRefetch(refetchSpecial,"special")}>special offer</li>
            </ul>
            <ErrorBoundary isLoading={arrivalIsLoading || specialIsLoading || bestIsLoading} isError={arrivalIsError || specialIsError || bestIsError} error={arrivalError || specialError || bestError }>
                <Swiper products={products} productComponent={Card2}/>
            </ErrorBoundary>
        </div>
    </section>
  )
}
