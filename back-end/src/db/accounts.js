import mongoose from 'mongoose';
import {UserModel} from './users.js';

const accountSchema = new mongoose.Schema({
    account_owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    // FIXME: figure out how to add products to user account
    cart: {
        totalPrice: {type: Number, default: 0},
        items: [{
            item: {type: mongoose.Schema.Types.ObjectId},
            quantity: {type: Number, default: 1},
            price: {type: Number, default: 0}
        }]
    },
});

export const PostsModel = mongoose.model('Account', postSchema);