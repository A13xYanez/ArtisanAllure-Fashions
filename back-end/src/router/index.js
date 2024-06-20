import express from 'express';
import authentication from './authentication.js';
import products from './products.js';

const router = express.Router();

//router function. This function will add the routes to the router.
//returns the router
export default () => {
    authentication(router);
    products(router);
    return router;
};