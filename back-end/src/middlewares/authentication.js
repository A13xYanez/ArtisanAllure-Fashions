import express from 'express';
import pkg from 'lodash';
import { getUserBySessionToken } from '../db/users.js';
const { get, merge } = pkg;

// ensures user meets registration requirements
export const isValidRegistrationRequestBody = (req, res, next) => {
    const { first_name, last_name, email, password } =
    req.body;

    if (!first_name) {
        return res.status(400).json({
        error: 'First name is required...',
        });
    }

    if (!last_name) {
        return res.status(400).json({
            error: 'Last name is required...',
        });
    }

    if (!email) {
        return res.status(400).json({
            error: 'Email is required...',
        });
    }

    if (!password) {
        return res.status(400).json({
            error: 'Password is required...',
        });
    }

    if (first_name.length < 3) {
        return res.status(400).json({
            error: 'First name must be at least 3 characters...',
        });
    }

    if (last_name.length < 3) {
        return res.status(400).json({
            error: 'Last name must be at least 3 characters...',
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            error: 'Password must be at least 6 characters...',
        });
    }

    const registrationRequestBodyValid = true;
    merge(req, { registrationRequestBodyValid });

    next();
};

// checks if user is authenticated
export const isAuthenticated = async (req, res, next) => {
    const session_token = req.cookies.session_token;

    if (!session_token) {
        return res.status(403).json({ error: 'No session token' });
    }

    const user = await getUserBySessionToken(session_token);

    if (!user) {
        return res.status(403).json({ error: 'Invalid session token' });
    }

    merge(req, { identity: user });

    next();
};


// sends success status
export const success = (req, res) => {
    return res.sendStatus(200);
};