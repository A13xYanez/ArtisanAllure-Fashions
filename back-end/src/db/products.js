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
    const products = await ProductModel.find({  sale_price: { $gt: 0 } })
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



// Gets the products filtered by gender male and adult
export const fetchFilterMensProducts = async (page) => {
  try {
    const itemsToFetch = 20; // maximum items to fetch

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
    const itemsToFetch = 20; // maximum items to fetch

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
    const itemsToFetch = 20; // maximum items to fetch

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
    const itemsToFetch = 20; // maximum items to fetch

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