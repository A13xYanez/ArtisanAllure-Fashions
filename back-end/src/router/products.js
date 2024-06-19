import { homeFeaturedProducts, homeSaleProducts, homeTopRatedProducts } from "../controllers/products.js";
import { filterMensProducts, filterWomansProducts, filterKidsProducts } from "../controllers/products.js";
import { filterOnSaleProducts } from "../controllers/products.js";

export default (router) => {
    router.get('/home/featured', homeFeaturedProducts);
    router.get('/home/sale', homeSaleProducts);
    router.get('/home/ratings', homeTopRatedProducts);
    router.get('/products/mens/:page', filterMensProducts);
    router.get('/products/womans/:page', filterWomansProducts);
    router.get('/products/kids/:page', filterKidsProducts);
    router.get('/products/sale/:page', filterOnSaleProducts);
};