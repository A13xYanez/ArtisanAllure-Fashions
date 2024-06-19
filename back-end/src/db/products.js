import mongoose from 'mongoose';



// Schema for product data
const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    brand: { type: String, required: true },
    product_image: { type: String, required: true },
    description: { type: String, required: true },
    regular_price: { type: String, required: true },
    sale_price: { type: String },
    ratings: { type: String },
    reviews: { type: String },
    arrival_date: { type: Date, default: Date.now },
    gender: { type: String, required: true },
    age_group: { type: String, required: true },
    category: { type: String, required: true }
});

export const ProductModel = mongoose.model('Product', productSchema);



// Gets the featured products by newest to display on the homepage
export const fetchHomeFeaturedProducts = async () => {
  try {
    const itemsToFetch = 5; // maximum items to fetch

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
    const itemsToFetch = 5; // maximum items to fetch

     // Fetch the products on sale sorted by sale_price
    const products = await ProductModel.find()
      .limit(itemsToFetch) // limits the amount of products fetched
      .sort({ sale_price: -1 }) // -1 for descending order

    return products;
  } catch (error) {
    console.error('Error fetching on sale products:', error);
    throw error;
  }
};



// Gets the featured products by newest to display on the homepage
export const fetchHomeTopRatedProducts = async () => {
  try {
    const itemsToFetch = 5; // maximum items to fetch

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



// Gets the products filtered by gender male
export const fetchFilterMaleProducts = async (page) => {
  try {
    const itemsToFetch = 20; // maximum items to fetch

    // Fetch the products filtered by gender and limits products by page
    const products = await ProductModel.find({ gender: "Male" })
      .skip((page - 1) * itemsToFetch)
      .limit(itemsToFetch)
      
    return products;
  } catch (error) {
    console.error('Error fetching male products:', error);
    throw error;
  }
};



// Gets the products filtered by gender female
export const fetchFilterFemaleProducts = async (page) => {
  try {
    const itemsToFetch = 20; // maximum items to fetch

    // Fetch the products filtered by gender and limits products by page
    const products = await ProductModel.find({ gender: "Female" })
      .skip((page - 1) * itemsToFetch)
      .limit(itemsToFetch)
      
    return products;
  } catch (error) {
    console.error('Error fetching female products:', error);
    throw error;
  }
};