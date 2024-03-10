// ---------------------------------------------------------------------------------------------------------------------
//!                                                       Imports
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------- Mongoose -------------------------------------------------------
import mongoose from 'mongoose';
// ---------------------------------------------------------------------------------------------------------------------
import dotenv from 'dotenv';
dotenv.config();

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    try {
        await mongoose.connect(process.env.MONGO_URI ?? '', {
            dbName: process.env.MONGO_DB ?? '',
        });

        mongoose.Schema.Types.String.checkRequired((v) => v != null);
    } catch (error) {
        console.error(error);
    }

    return mongoose;
};
