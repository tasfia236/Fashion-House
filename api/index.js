import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDB is Connected');
    })
    .catch((err) => {
        console.error(err);
    })

// MiddleWare
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message= err.message || 'Internet Server Error.';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running port ${port}`);
});