import { homeFeaturedProducts } from "../controllers/products.js";

export default (router) => {
    router.get('/feed', homeFeaturedProducts);
}