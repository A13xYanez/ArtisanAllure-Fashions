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
    // Fetch the newest products sorted by arrival_date in descending order
    const itemsToFetch = 5;
    const products = await ProductModel.find()
      .limit(itemsToFetch)
      .sort({ arrival_date: -1 }) // -1 for descending order

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};