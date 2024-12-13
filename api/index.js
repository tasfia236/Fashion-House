import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
const port = process.env.PORT || 3000;

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


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running port ${port}`);
});