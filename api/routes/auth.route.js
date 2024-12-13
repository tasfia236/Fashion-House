import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, photo, password } = req.body;

    if(!username || !email || !photo || !password	|| username === '' || email === '' || photo === '' || password === '') {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = new User({
        username,
        email,
        photo,
        password,
    });
    await newUser.save();
    res.json('SignUp Seccessfully.')
})

export default router;