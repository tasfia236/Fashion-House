import express from "express";
import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import { errorHandle } from "../utils/error.js";

const router = express.Router();

router.post('/signup', async (req, res, next) => {
    const { username, email, photo, password } = req.body;

    if (!username || !email || !photo || !password || username === '' || email === '' || photo === '' || password === '') {
        next(errorHandle(400, 'All fields are required.')); // middleware error handle
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        photo,
        password: hashedPassword,
    });
    try {
        await newUser.save();
        res.json('SignUp Seccessfully.')
    } catch (err) {
        next(err.message); // middleware error handle
    }
})

//All User
router.get('/user', async (req, res) => {
    const result = await User.find({})
    res.send(result)
})

export default router;