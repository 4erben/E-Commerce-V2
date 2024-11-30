import React from 'react'
import PageAddress from '../../components/PageAddress/PageAddress';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, changeQuantity, removeFromCart } from '../../redux/Slices/cart.slice';
import { handleCalculateSubTotal ,handleCalculateTotal } from '../../utils/helperFunctions/cartFunctions';
import { Link } from 'react-router-dom';
export default function ShoppingCart() {
    const cartItems = useSelector(state=>state.cart.cartItems);
    console.log();
    
    const dispatch = useDispatch();
    const handleAddToCart = (product)=>{
        dispatch(addToCart(product))
    }
    const handleRemoveFromCart = (product)=>{
        dispatch(removeFromCart(product))
    }
    const handleChangeQuantity = (product,e)=>{
        dispatch(changeQuantity({product,newQuantity:e.target.value}))
    }
    const subTotal = handleCalculateSubTotal(cartItems);
    const total = handleCalculateTotal(cartItems);
    

  return (
    <div>
        <PageAddress address="shopping cart"/>
        <section className='py-10'>
            <div className='max-w-screen-lg grid grid-cols-1 md:grid-cols-6 gap-10 mx-auto px-6'>
                {/* left side */}
                <div className='md:col-span-4'>
                    {cartItems.length? 
                    <table className='w-full capitalize text-start'> 
                        <thead className=''>
                            <tr className='grid grid-cols-5 text-primaryA20 mb-4'>
                                <th className='col-span-2 text-start'>Product</th>
                                <th className='text-start'>price</th>
                                <th className='text-start'>quantity</th>
                                <th className='text-end'>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item)=>{
                                return(
                                <tr key={item._id} className='grid grid-cols-5 text-primaryA20 items-center font-semibold my-2 border-b-2 pb-2'>
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
                                    <td className='flex col-span-1 gap-2'>
                                        <button className='border px-2' onClick={()=>handleRemoveFromCart(item)}>-</button>
                                        <input 
                                        type='number' 
                                        min={0} 
                                        value={item.quantity} 
                                        onChange={(e)=>handleChangeQuantity(item,e)} 
                                        className='border flex-shrink-0 w-8 text-center'/>
                                        <button className='px-2 border' onClick={()=>handleAddToCart(item)}>+</button>
                                    </td>
                                    <td className='col-span-1 text-end'>{Number(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                                )
                            })}
                            
                            {/* <hr  className='border-2'/> */}
                        </tbody>
                    </table>
                    :
                    <div className='text-center flex items-center flex-col justify-center h-full capitalize font-bold'>
                        <p>your basket is empty</p>
                        <Link to="/shop" className='btn'> Shop Now</Link>
                    </div>

                    }
                    
                </div>
                {/* right side */}
                <div className='md:col-span-2 flex-col gap-2'>
                    <div className='mb-2'>
                        <h3 className='mb-5 text-center'>cart totals</h3>
                        <div className='flex flex-col gap-4 capitalize font-semibold bg-surfaceA30 p-6 rounded-md'>
                            <div className='flex justify-between'>
                                <span>subtotals:</span>
                                <span>${subTotal}</span>
                            </div>
                            <hr className='border-2'/>
                            <div className='flex justify-between'>
                                <span>totals:</span>
                                <span>${total}</span>
                            </div>
                            <hr className='border-2'/>
                            <p className='text-xs flex gap-1 items-center'>
                                <span><input type='checkbox' checked readOnly className='w-3'/></span>
                                <span>Shipping & taxes calculated at checkout</span>
                            </p>
                            <button className='btn'>
                                proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
