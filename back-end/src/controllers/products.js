import { fetchHomeFeaturedProducts, fetchHomeSaleProducts, fetchHomeTopRatedProducts } from '../db/products.js';
import { fetchFilterMensProducts, fetchFilterWomansProducts, fetchFilterKidsProducts } from '../db/products.js';
import { fetchFilterOnSaleProducts, fetchFilterFeaturedProducts, updateRatingAvg } from '../db/products.js';
import { getProductById, addProductReview, updateTotalReviews } from '../db/products.js';
import { fetchProductReviews, searchProductModel } from '../db/products.js';
import { getUserById } from '../db/users.js';
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



// Filters all products and gets the products that is for the gender male and adult
export const filterMensProducts = async (req, res) => {
  try {
    const page = Number(req.params.page);

    if (!Number.isInteger(page) || page <= 0) {
      return res.status(400).json({
        error: 'Page number must be integer greater than or equal to 1.',
      });
    }

    const products = await fetchFilterMensProducts(page);

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
    console.error('Error fetching mens products:', error);
    res.status(500).send('Server Error');
  }
};



// Filters all products and gets the products that is for the gender female and adult
export const filterWomansProducts = async (req, res) => {
  try {
    const page = Number(req.params.page);

    if (!Number.isInteger(page) || page <= 0) {
      return res.status(400).json({
        error: 'Page number must be integer greater than or equal to 1.',
      });
    }

    const products = await fetchFilterWomansProducts(page);

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
    console.error('Error fetching womans products:', error);
    res.status(500).send('Server Error');
  }
};



// Filters all products and gets the products that are for kids
export const filterKidsProducts = async (req, res) => {
  try {
    const page = Number(req.params.page);

    if (!Number.isInteger(page) || page <= 0) {
      return res.status(400).json({
        error: 'Page number must be integer greater than or equal to 1.',
      });
    }

    const products = await fetchFilterKidsProducts(page);

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
    console.error('Error fetching kids products:', error);
    res.status(500).send('Server Error');
  }
};



// Filters all products and gets the products on sale
export const filterOnSaleProducts = async (req, res) => {
  try {
    const page = Number(req.params.page);

    if (!Number.isInteger(page) || page <= 0) {
      return res.status(400).json({
        error: 'Page number must be integer greater than or equal to 1.',
      });
    }

    const products = await fetchFilterOnSaleProducts(page);

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
    console.error('Error fetching on sale products:', error);
    res.status(500).send('Server Error');
  }
};



// Filters all products and gets the newest products
export const filterFeaturedProducts = async (req, res) => {
  try {
    const page = Number(req.params.page);

    if (!Number.isInteger(page) || page <= 0) {
      return res.status(400).json({
        error: 'Page number must be integer greater than or equal to 1.',
      });
    }

    const products = await fetchFilterFeaturedProducts(page);

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
    console.error('Error fetching featured products:', error);
    res.status(500).send('Server Error');
  }
};



// Get only one product
export const getProductDetails = async (req, res) => {
  try {
    const productID = req.params.id;
    const productInformation = await getProductById(productID);

    const formattedProductDetails = {
                product_image: productInformation.product_image,
                product_name: productInformation.product_name,
                brand: productInformation.brand,
                ratings: productInformation.ratings,
                regular_price: productInformation.regular_price,
                sale_price: productInformation.sale_price,
                id: productInformation._id,
                description: productInformation.description
            };

    res.json(formattedProductDetails);
  } catch (error) {
    console.error('Error fetching product details:', error);
    res.status(500).send('Server Error');
  }
};



// Make a review for product
export const createProductReview = async (req, res) => {
    try {
        const user = get(req, 'identity');
        const productID = req.params.id;
        const { productReview, productRating } = req.body;
        let ratingsSum = productRating;
        
        const productInformation = await getProductById(productID);
        const totalReviews = productInformation.product_evaluations.total_reviews;
        const allRatings = productInformation.product_evaluations.reviews;

        const userInformation = await getUserById(user._id, false);
        const reviewerFirstName = userInformation.user_info.first_name;
        const reviewerLastName = userInformation.user_info.last_name;
        const reviewerFullName = reviewerFirstName + " " + reviewerLastName[0];

        addProductReview(productID, {
          review: productReview,
          rating: productRating,
          reviewer: reviewerFullName
        });

        updateTotalReviews(productID, totalReviews + 1);
        
        allRatings.map((rating) => {
          ratingsSum += rating.rating;
        })

        const averageRating = (ratingsSum / (totalReviews + 1)).toFixed(1);
        
        updateRatingAvg(productID, averageRating);

        return res.sendStatus(200);
    } catch (error) {
        console.error('Error creating product review:', error);
        res.status(500).send('Server Error');
    }
};



// Display all the products reviews
export const displayProductReviews = async (req, res) => {
  try {
    const productID = req.params.id;
    const page = Number(req.params.page);

    if (!Number.isInteger(page) || page <= 0) {
      return res.status(400).json({
        error: 'Page number must be integer greater than or equal to 1.',
      });
    }

    const productData = await fetchProductReviews(productID, page - 1);
    const productReviews = productData[0].product_evaluations.reviews;

    const formattedProductReviews = productReviews.map((review) => ({
      review: review.review,
      rating: review.rating,
      reviewer: review.reviewer,
      date_reviewed: review.date_reviewed
    }));

    res.json(formattedProductReviews);
  } catch (error) {
        console.error('Error displaying product reviews:', error);
        res.status(500).send('Server Error');
    }
};



// Display total reviews, average rating
// and the amount of each rating from 1 through 5
export const displayProductRatings = async (req, res) => {
  try {
    const productID = req.params.id;
    const productInformation = await getProductById(productID);
    const reviews = productInformation.product_evaluations.reviews;
    const ratingAvg = productInformation.product_evaluations.rating_avg;
    const totalReviews = productInformation.product_evaluations.total_reviews;

    let countFiveStars = 0;
    let countFourStars = 0;
    let countThreeStars = 0;
    let countTwoStars = 0;
    let countOneStars = 0;

    reviews.map((review) => {
      if (review.rating == 5) {
        countFiveStars++;
      } else if (review.rating == 4) {
        countFourStars++;
      } else if (review.rating == 3) {
        countThreeStars++;
      } else if (review.rating == 2) {
        countTwoStars++;
      } else {
        countOneStars++;
      }
    });

    const formatProductRating = {
      total_reviews: totalReviews,
      rating_avg: ratingAvg,
      five_stars: countFiveStars,
      four_stars: countFourStars,
      three_stars: countThreeStars,
      two_stars: countTwoStars,
      one_stars: countOneStars
    };

    res.json(formatProductRating);
  } catch (error) {
        console.error('Error displaying product reviews:', error);
        res.status(500).send('Server Error');
    }
};



// Get a users input to search
// for a product
export const searchProduct = async (req, res) => {
  try {
    const { searchQuery } = req.body;

    const products = await searchProductModel(searchQuery);

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
        console.error('Error searching for product:', error);
        res.status(500).send('Server Error');
  }
};