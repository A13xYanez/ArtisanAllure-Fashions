import mongoose from 'mongoose';



// Schema for user data
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, required: true, select: false },
        session_token: { type: String, select: false },
    },
    user_info: {
        country: { type: String },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        datetime_created: { type: Date, default: Date.now },
    },
    account_details: {
        cart: {
            totalPrice: {type: Number, default: 0},
            items: [{
                item: {type: mongoose.Schema.Types.ObjectId},
                quantity: {type: Number, default: 1},
                price_regular: {type: Number, default: 0},
                price_sale: {type: Number, default: 0}
            }]
        },
    }
});

export const UserModel = mongoose.model('User', userSchema);



// Create a new user
export const createUser = async (values) => {
    return UserModel(values)
        .save()
        .then((user) => user.toObject());
};



// Find a user by their ID
export const getUserById = async (id, includeCredentials) => {
    if (includeCredentials) {
        return UserModel.findById(id).select(
        'authentication.password authentication.salt'
        );
    }
    return UserModel.findById(id);
};



// Find a user by their email
export const getUserByEmail = async (email, includeCredentials) => {
    if (includeCredentials) {
        return UserModel.findOne({ email }).select(
            'authentication.password authentication.salt'
        );
    }

    return UserModel.findOne({ email });
};



// Find a user by their given session token
export const getUserBySessionToken = async (session_token) => {
    return UserModel.findOne({
        'authentication.session_token': session_token,
    }).select('authentication.salt');
};



// Gives the user a new session token
export const updateUserSessionToken = async (id, session_token) => {
    return UserModel.findByIdAndUpdate(id, {
        'authentication.session_token': session_token,
    });
};



// Adds new item to cart
export const addToCart = async (account_id, product) => {
    return UserModel.findById(account_id)
    .updateOne({$push: {"account_details.cart.items": {item: product.item, quantity: product.quantity, price_regular: product.price_regular, price_sale: product.price_sale}}});
};



// Updates the quantity of the item already in the cart
export const updateCartQty = async (account_id, product) => {
    return UserModel.findById(account_id)
    .findOneAndUpdate(
        {"account_details.cart.items.item": product.item}, 
        {$set: {"account_details.cart.items.$": {item: product.item, quantity: product.quantity, price_regular: product.price_regular, price_sale: product.price_sale}}}
    );
};