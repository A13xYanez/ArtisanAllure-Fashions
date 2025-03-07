import { createUser } from '../db/users.js';
import { generateRandomString, authentication } from '../helpers/index.js';
import { getUserByEmail } from '../db/users.js';
import pkg from 'lodash';
const { get, merge } = pkg;



// Creates a new user into the database
export const register = async (req, res) => {
    const registrationRequestBodyValid = get(
        req,
        'registrationRequestBodyValid',
        false
    );

    if (!registrationRequestBodyValid) {
        return res.status(400).json({
            error: 'Invalid request...',
        });
    }

    try {
        const { first_name, last_name, email, password } = req.body;

        const userExists = await getUserByEmail(email);

        if (userExists) {
            return res.status(400).json({
                error: 'User already exists...',
            });
        }

        const salt = generateRandomString();

        const user = await createUser({
            email,
            authentication: {
                password: authentication(salt, password),
                salt,
            },
            user_info: {
                first_name,
                last_name,
            },
        });

    return res.sendStatus(200);
    } catch (error) {
        console.error('Error registering user: ', error);
        return res.sendStatus(500);
    }
};



// Checks the users login credentials with the database
export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            error: 'Invalid email or password...',
        });
    }

    const user = await getUserByEmail(email, true);

    if (!user) {
    return res.status(400).json({
        error: 'Invalid email or password...',
    });
    }

    const { password: hashedPassword, salt } = user.authentication;

    if (authentication(salt, password) !== hashedPassword) {
        return res.status(400).json({
            error: 'Invalid email or password...',
        });
    }

    user.authentication.session_token = authentication(
        generateRandomString(),
        user._id.toString()
    );

    await user.save();

    res.cookie('session_token', user.authentication.session_token, {
        domain: 'artisanallurefashions-backend.onrender.com',
        path: '/',
        secure: true,
        httpOnly: true,
        sameSite: 'none',
    });

    return res.sendStatus(200);
};



// Changes the users session token to revoke access
export const logout = async (req, res) => {
    const user = get(req, 'identity');

    user.authentication.session_token = authentication(
        generateRandomString(),
        user._id.toString()
    );

    await user.save();

    return res.sendStatus(200);
};