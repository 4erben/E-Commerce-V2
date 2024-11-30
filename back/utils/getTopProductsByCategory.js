// Mongoose aggregation pipeline
async function getTopProductsByCategory(Product) {
    return Product.aggregate([
      {
        $match: {
          rating: { $gte: 3 }, // Filter products by rating condition
        },
      },
      {
        $sort: {
          category: 1,  // Sort categories (optional)
          rating: -1,   // Sort products within categories by highest rating
        },
      },
      {
        $group: {
          _id: "$category",       // Group by the category field
          topProduct: { $first: "$$ROOT" }, // Get the first (highest-rated) product
        },
      },
      {
        $replaceRoot: { newRoot: "$topProduct" }, // Flatten the grouped structure
      },
    ]);
}

module.exports = getTopProductsByCategory;

