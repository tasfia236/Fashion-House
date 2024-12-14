import express from "express";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, photo, password } = req.body;

    if (!username || !email || !photo || !password || username === '' || email === '' || photo === '' || password === '') {
        return res.status(400).json({ message: 'All fields are required' });
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
        res.status(500).json({ message: err.message })
    }
})

export default router;