

export const handleCalculateSubTotal = (cartItems)=>{
    const total = cartItems.reduce((total,item)=>{
       return total += (item.price * item.quantity);
    },0)
    return Number(total).toFixed(2);
};

export const handleCalculateTotal = (cartItems)=>{
    const total = cartItems.reduce((total,item)=>{
        return total += (item.price - (item.price * (item.discountPercentage/100)))*item.quantity;
    },0)
    return Number(total).toFixed(2);
}
