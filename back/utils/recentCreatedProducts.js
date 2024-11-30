function getRecentCreatedProducts(products,day =7) {
    const currentDate = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(currentDate.getDate() - day); // Set the date to 7 days ago
  
    return products.filter((product) => {
      const productDate = new Date(product.meta.createdAt);
      return productDate >= sevenDaysAgo && productDate <= currentDate;
    });
  }


  module.exports = getRecentCreatedProducts;