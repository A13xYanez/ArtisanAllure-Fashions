import { homeFeaturedProducts, homeSaleProducts } from "../controllers/products.js";

export default (router) => {
    router.get('/home/featured', homeFeaturedProducts);
    router.get('/home/sale', homeSaleProducts);
}