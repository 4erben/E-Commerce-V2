import React from 'react'
import PageAddress from '../../components/PageAddress/PageAddress'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/Slices/cart.slice';

export default function WishlishPage() {
    const wishlistItems = useSelector(state=>state.wishlist.wishlist);
    const dispatch = useDispatch();
    const handleAddToCart = (product)=>{
        dispatch(addToCart(product));
    }
  return (
    <div>
        <PageAddress address="wish list"/>
        <section className='py-10 '>
            <div className='max-w-screen-lg mx-auto'>
                {/* left side */}
                <div className=''>
                    {wishlistItems.length? 
                    <table className='w-full capitalize text-start'> 
                        <thead className=''>
                            <tr className='grid grid-cols-4 text-primaryA20 mb-4'>
                                <th className='col-span-2 text-start'>Product</th>
                                <th className='text-start'>price</th>
                                <th className='text-center'>add</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlistItems.map((item)=>{
                                return(
                                <tr key={item._id} className='grid grid-cols-4 text-primaryA20 items-center font-semibold my-2 border-b-2 pb-2'>
                                    <td className='col-span-2 flex justify-start gap-2 items-center'>
                                        <Link to={`/product/${item._id}`}>
                                        <img src={item.images[0]} alt={item.title} className='w-20 p-1 bg-surfaceA50/80'/>
                                        </Link>
                                        <div className='flex flex-col'>
                                            <span>{item.title}</span>
                                            <span className='text-xs text-primaryA50'>Code:{item.sku}</span>
                                            <span className='text-xs text-primaryA50'>{item.shippingInformation}</span>
                                        </div>
                                    </td>
                                    <td className='col-span-1'>${Number(item.price).toFixed(2)}</td>
                                    <td className='mx-auto'>
                                        <button className='btn' onClick={()=>handleAddToCart(item)}>add to cart</button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    :
                    <div className='text-center flex items-center flex-col justify-center h-full capitalize font-bold'>
                        <p>your wishlist is empty</p>
                        <Link to="/shop" className='btn'> Shop Now</Link>
                    </div>

                    }
                    
                </div>
            </div>
        </section>
    </div>
  )
}
