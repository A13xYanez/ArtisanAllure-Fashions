import mongoose from 'mongoose';



// Schema for product data
const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    brand: { type: String, required: true },
    product_image: { type: String, required: true },
    description: { type: String, required: true },
    regular_price: { type: Number, required: true },
    sale_price: { type: Number },
    arrival_date: { type: Date, default: Date.now },
    gender: { type: String, required: true },
    age_group: { type: String, required: true },
    category: { type: String, required: true },
    product_evaluations: {
      total_reviews: { type: Number, default: 0 },
      rating_avg: { type: Number, default: 0 },
      reviews: [{
                review: { type: String },
                rating: { type: Number },
                reviewer: { type: String },
                date_reviewed: { type: Date, default: Date.now },
            }]
    }
});

export const ProductModel = mongoose.model('Product', productSchema);



// Gets the featured products by newest to display on the homepage
export const fetchHomeFeaturedProducts = async () => {
  try {
    const itemsToFetch = 7; // maximum items to fetch

    // Fetch the newest products sorted by arrival_date in descending order
    const products = await ProductModel.find()
      .limit(itemsToFetch) // limits the amount of products fetched
      .sort({ arrival_date: -1 }) // -1 for descending order

    return products;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    throw error;
  }
};



// Gets the on sale products to display on the homepage
export const fetchHomeSaleProducts = async () => {
  try {
    const itemsToFetch = 7; // maximum items to fetch

     // Fetch the products on sale sorted by sale_price
    const products = await ProductModel.find({ sale_price: { $gt: 0 } })
      .limit(itemsToFetch) // limits the amount of products fetched

    return products;
  } catch (error) {
    console.error('Error fetching on sale products:', error);
    throw error;
  }
};



// Gets the featured products by newest to display on the homepage
export const fetchHomeTopRatedProducts = async () => {
  try {
    const itemsToFetch = 7; // maximum items to fetch

    // Fetch the highly rated products
    const products = await ProductModel.find()
      .limit(itemsToFetch) // limits the amount of products fetched
      .sort({ ratings: -1 }) // -1 for descending order

    return products;
  } catch (error) {
    console.error('Error fetching highly rated products:', error);
    throw error;
  }
};



// Gets the products filtered by gender male and adult
export const fetchFilterMensProducts = async (page) => {
  try {
    const itemsToFetch = 12; // maximum items to fetch

    // Fetch the products filtered by gender, age, and limits products by page
    const products = await ProductModel.find({ gender: "Male", age_group: "Adult" })
      .skip((page - 1) * itemsToFetch)
      .limit(itemsToFetch)
      
    return products;
  } catch (error) {
    console.error('Error fetching mens products:', error);
    throw error;
  }
};



// Gets the products filtered by gender female and adult
export const fetchFilterWomansProducts = async (page) => {
  try {
    const itemsToFetch = 12; // maximum items to fetch

    // Fetch the products filtered by gender, age, and limits products by page
    const products = await ProductModel.find({ gender: "Female", age_group: "Adult" })
      .skip((page - 1) * itemsToFetch)
      .limit(itemsToFetch)
      
    return products;
  } catch (error) {
    console.error('Error fetching womans products:', error);
    throw error;
  }
};



// Gets the products filtered by age group kids
export const fetchFilterKidsProducts = async (page) => {
  try {
    const itemsToFetch = 12; // maximum items to fetch

    // Fetch the products filtered by age and limits products by page
    const products = await ProductModel.find({ age_group: "Kid" })
      .skip((page - 1) * itemsToFetch)
      .limit(itemsToFetch)
      
    return products;
  } catch (error) {
    console.error('Error fetching kids products:', error);
    throw error;
  }
};



// Gets the products filtered by items on sale
export const fetchFilterOnSaleProducts = async (page) => {
  try {
    const itemsToFetch = 12; // maximum items to fetch

    // Fetch the products filtered by sale price grater than 0 and limits products by page
    const products = await ProductModel.find({  sale_price: { $gt: 0 } })
      .skip((page - 1) * itemsToFetch)
      .limit(itemsToFetch)
      
    return products;
  } catch (error) {
    console.error('Error fetching on sale products:', error);
    throw error;
  }
};



// Gets the products filtered by newest
export const fetchFilterFeaturedProducts = async (page) => {
  try {
    const itemsToFetch = 12; // maximum items to fetch

    // Fetch the products filtered by newest and limits products by page
    const products = await ProductModel.find()
      .skip((page - 1) * itemsToFetch)
      .limit(itemsToFetch)
      .sort({ arrival_date: -1 }) // -1 for descending order
      
    return products;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    throw error;
  }
};



// Finds a product by ID and returns its details
export const getProductById = async (product) => {
    return ProductModel.findById(product);
};



// Adds review and rating to product
export const addProductReview = async (product, review) => {
  return ProductModel.findById(product)
  .updateOne({$push: {"product_evaluations.reviews": {review: review.review, rating: review.rating, reviewer: review.reviewer}}});
};



// Update review counter
export const updateTotalReviews = async (product, total) => {
  return ProductModel.findById(product)
  .updateOne({"product_evaluations.total_reviews": total});
};



// Update the average ratings
export const updateRatingAvg = async (product, avgRating) => {
  return ProductModel.findById(product)
  .updateOne({"product_evaluations.rating_avg": avgRating});
};



// Returns product reviews limited by page
export const fetchProductReviews = async (product, page) => {
  try {
    const itemsToFetch = 5; // maximum items to fetch
    const skip = 5 * page; // skips items

    const reviews = ProductModel.find( {_id: product}, { "product_evaluations.reviews": { $slice: [ skip, itemsToFetch ] } } );

    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};



// Get a search query to find products
// with similar matching names
export const searchProductModel = async (query) => {
  try {
    const itemsToFetch = 5; // maximum items to fetch

    const products = await ProductModel.find({"product_name": {$regex: ".*" + query + ".*", $options: 'i'}})
      .limit(itemsToFetch);
      
    return products;
  } catch (error) {
    console.error('Error finding product:', error);
    res.status(500).send('Server Error');
  }
}