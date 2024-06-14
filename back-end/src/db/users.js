import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    user_info: {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, required: true, select: false },
        session_token: { type: String, select: false },
    },
        });

export const UserModel = mongoose.model('User', userSchema);

// Create a new user
export const createUser = async (values) => {
    return UserModel(values)
        .save()
        .then((user) => user.toObject());
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