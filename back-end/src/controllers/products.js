import { fetchHomeFeaturedProducts, fetchHomeSaleProducts, fetchHomeTopRatedProducts } from '../db/products.js';
import { fetchFilterMaleProducts } from '../db/products.js';
import pkg from 'lodash';
const { get, merge } = pkg;



// Gets featured products for homepage and formats the products
export const homeFeaturedProducts = async (req, res) => {
  try {
    const products = await fetchHomeFeaturedProducts();

    const formattedProducts = products.map((products) => ({
      product_image: products.product_image,
      product_name: products.product_name,
      brand: products.brand,
      ratings: products.ratings,
      regular_price: products.regular_price,
      sale_price: products.sale_price,
      id: products._id,
    }));

    res.json(formattedProducts);
  } catch (error) {
    console.error('Error fetching homepage featured products:', error);
    res.status(500).send('Server Error');
  }
};



// Gets featured products for homepage and formats the products
export const homeSaleProducts = async (req, res) => {
  try {
    const products = await fetchHomeSaleProducts();

    const formattedProducts = products.map((products) => ({
      product_image: products.product_image,
      product_name: products.product_name,
      brand: products.brand,
      ratings: products.ratings,
      regular_price: products.regular_price,
      sale_price: products.sale_price,
      id: products._id,
    }));

    res.json(formattedProducts);
  } catch (error) {
    console.error('Error fetching homepage on sale products:', error);
    res.status(500).send('Server Error');
  }
};



// Gets top rated products for homepage and formats the products
export const homeTopRatedProducts = async (req, res) => {
  try {
    const products = await fetchHomeTopRatedProducts();

    const formattedProducts = products.map((products) => ({
      product_image: products.product_image,
      product_name: products.product_name,
      brand: products.brand,
      ratings: products.ratings,
      regular_price: products.regular_price,
      sale_price: products.sale_price,
      id: products._id,
    }));

    res.json(formattedProducts);
  } catch (error) {
    console.error('Error fetching homepage highly rated products:', error);
    res.status(500).send('Server Error');
  }
};



// Filters all products and gets the products that is for the gender male
export const filterMaleProducts = async (req, res) => {
  try {
    const page = Number(req.params.page);

    if (!Number.isInteger(page) || page <= 0) {
      return res.status(400).json({
        error: 'Page number must be integer greater than or equal to 1.',
      });
    }

    const products = await fetchFilterMaleProducts(page);

    const formattedProducts = products.map((products) => ({
      product_image: products.product_image,
      product_name: products.product_name,
      brand: products.brand,
      ratings: products.ratings,
      regular_price: products.regular_price,
      sale_price: products.sale_price,
      id: products._id,
    }));

    res.json(formattedProducts);
  } catch (error) {
    console.error('Error fetching male products:', error);
    res.status(500).send('Server Error');
  }
};