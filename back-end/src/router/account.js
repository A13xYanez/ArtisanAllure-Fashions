import express from 'express';
import { isAuthenticated } from '../middlewares/authentication.js';
import { addToAccountCart } from '../controllers/account.js';

export default (router) => {
    router.post('/account/addToCart/:id', isAuthenticated, addToAccountCart);
}