import React, { useState } from 'react'
import PageAddress from '../../components/PageAddress/PageAddress'
import usePaginatedProducts from '../../utils/react-query-hooks/usePaginatedProducts'
import Card2 from '../../components/card/Card2';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import useFetchCategories from '../../utils/react-query-hooks/useFetchCategories';
import useMostExpensive from '../../utils/react-query-hooks/useMostExpensive';

export default function ShopPage() {
    const [page,setPage] = useState(1);
    const [myProducts,setMyProducts] = useState([]);
    const [price , setPrice] = useState(0);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const {data={data:{products:[],pagination:{page:1,totalPages:1}}},isLoading,isError,error} = usePaginatedProducts(page,12,selectedCategories,price,onSuccess,);
    const {data:categories ,isLoading:catIsLoading,isError:catIsError,error:catError} = useFetchCategories();
    const {data:mostExpensive,isLoading:mostIsLoading,isError:mostIsError,error:mostError} = useMostExpensive(onMostSuccess);
    const { pagination } = data.data;
    

    function onMostSuccess(data){    
        setPrice(Math.ceil(data.data.price));
    }
    function onSuccess(data){
        setMyProducts(data?.data.products);
    }

    // Handle checkbox changes
    const handleCategoryChange = (event) => {
        const { name, checked } = event.target;
        setSelectedCategories((prev) => {
        if (checked) {
            return [...prev, name];  // Add category to selected list
        } else {
            return prev.filter((cat) => cat !== name); // Remove category from selected list
        }
        });
    };
    const handleFilter = (e)=>{

    }
    
  return (
    <div>
        <PageAddress address={"shop page"} />
        <section className='w-full capitalize'>
            <div className='max-w-screen-lg mx-auto py-3 px-10'>
                {/* Top Filter div */}
                <div id='top-filter' className='flex justify-between items-center my-10'>
                    <h3>E-Commerce Shop Items</h3>
                    <p className='flex gap-1'>
                        <span className='font-semibold'>total items:</span>
                        <span>{pagination.total}</span>
                    </p>
                    <p className='flex gap-1'>
                        <span className='font-semibold'>page:</span> 
                        <select onChange={(e)=>{setPage(e.target.value)}} value={page}>
                            {Array.from({length:pagination.totalPages}).map((_,i)=>{
                                return <option key={i} value={i+1}>{i+1}</option>
                            })}
                        </select>
                    </p>
                </div>
                
            </div>
            {/* second Section */}
            <div className='grid grid-cols-1 sm:grid-cols-5 ps-2 md:pe-20 pe-0  mb-10 gap-10'>
                <ErrorBoundary isLoading={catIsLoading} isError={catIsError} error={catError}>
                <div className=' flex-col gap-5 px-2 flex' >
                    <h3>Filter</h3>
                    <div>
                        <h4 className='underline font-bold mb-2'>Categories</h4>
                        <div className='flex flex-wrap gap-2 sm:gap-2 sm:flex-col'>
                            {categories?.data.map((cat,i)=>{
                                    return (
                                        <div className='flex gap-1 items-baseline' key={i}>
                                            <input 
                                            type='checkbox' 
                                            value={cat} 
                                            name={cat}
                                            onChange={handleCategoryChange}
                                            /> 
                                            <label>{cat}</label>
                                        </div>
                                    )
                            })}
                        </div>  
                    </div>
                    <div className='flex flex-col'>
                        <h4>Price</h4>
                        <input 
                        name='price'
                        id='price'
                        type='range' 
                        min={0} 
                        max={Math.ceil(mostExpensive?.data.price)} 
                        value={price} 
                        onChange={(e)=>(setPrice(e.target.value))}/>
                        <label htmlFor='price'>{price}</label>
                    </div>
                    {/* <button className='btn' onClick={refetch}>filter</button> */}
                </div>
                </ErrorBoundary>
                <ErrorBoundary isLoading={isLoading} isError={isError} error={error}>
                    <div className={`col-span-1 sm:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 h-fit`}>
                        {myProducts.map((p)=>{
                        return <Card2  key={p._id} product={p}/>
                        })}
                    </div>
                </ErrorBoundary>
                </div>
        </section>
    </div>
  )
}
