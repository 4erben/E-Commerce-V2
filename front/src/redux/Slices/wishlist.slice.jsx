import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[],

    },
    reducers:{
        addToWishlist : (state,action)=>{       
            const product = action.payload;
            const pIndex = state.wishlist.findIndex(p=>p._id === product._id);
            if(pIndex >= 0){
                state.wishlist[pIndex].quantity += 1;
            }else{
                const tempProduct = {
                    ...product,
                    quantity:1
                }
                state.wishlist.push(tempProduct);
            }
        },
        removeFromWishlist: (state,action)=>{
            const product = action.payload;
            const pIndex = state.wishlist.findIndex(p=>p._id === product._id);
            if(state.wishlist[pIndex].quantity > 1 ){
                state.wishlist[pIndex].quantity -= 1;
            }else{
                state.wishlist.splice(pIndex,1)
            }
        },
        changeQuantity : (state,action)=>{
            const { product , newQuantity } = action.payload;    
            const pIndex = state.wishlist.findIndex(p=>p._id === product._id);
            if(newQuantity == 0){      
                state.wishlist.splice(pIndex,1)
            }else{
                state.wishlist[pIndex].quantity = newQuantity;
            }
            
            
        }
        
    }
});


export const {addToWishlist , removeFromWishlist , changeQuantity } = wishlistSlice.actions;

export default wishlistSlice.reducer;