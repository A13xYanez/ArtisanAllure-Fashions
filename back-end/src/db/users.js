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