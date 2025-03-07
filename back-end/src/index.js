import express from 'express';
import rateLimit from 'express-rate-limit';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import pkg from 'mongoose';
const { Promise } = pkg;
import router from './router/index.js';

// Rate limiter middleware to limit the number of requests per IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per 15 minutes per IP
    message: 'Too many requests from this IP, please try again after some time',
});

// Express app
const app = express();
// app.use(limiter);
app.use(
    cors({
        origin: 'https://artisanallurefashions-frontend.onrender.com',
        credentials: true,
    })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// HTTP server
const server = http.createServer(app);
const port = process.env.PORT || 8080

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// MongoDB connection
const MONGO_URL = process.env.MONGO_URL;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});

app.use('/', router());
