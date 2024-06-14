import express from 'express';
import { createUser } from '../db/users.js';
import { generateRandomString, authentication } from '../helpers/index.js';
import pkg from 'lodash';
const { get, merge } = pkg;

// creates a new user into the database
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
        const { first_name, last_name, username, email, password } = req.body;

        const userExists = await getUserByEmail(email);

        if (userExists) {
        return res.status(400).json({
            error: 'User already exists...',
        });
    }

    const salt = generateRandomString();

    const user = createUser({
        username,
        email,
        authentication: {
            password: authentication(salt, password),
            salt,
        },
        user_info: {
            first_name,
            last_name,
            date_of_birth,
        },
    });

    return res.sendStatus(200);
    
    } catch (error) {
        console.error('Error registering user: ', error);
        return res.status(400).json({
            error: 'Invalid request...',
        });
    }
};
