import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectToDB } from '@utils/database';

dotenv.config();

// ----------------------------------------------------- Server --------------------------------------------------------
const app = express();

// --------------------------------------------------- Middlewares -----------------------------------------------------
app.use(morgan(process.env.NODE_ENV == 'development' ? 'dev' : 'combined'));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Server is running on port ${process.env.PORT ?? 3000}`);
});

const ping = async () => {
    const db = await connectToDB();
    console.log(`MongoDB connection state: ${mongoose.ConnectionStates[mongoose.connection.readyState]}`);
    db.disconnect();
};
ping();
