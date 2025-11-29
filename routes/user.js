const { Router } = require('express');
const userRouter = Router();
const auth = require('./middleware/auth.js');

app.use(auth);

userRouter.post('/signup', async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        if (!email || !password) 
            return res.status(400).json({ 
                message: 'email and password required' 
            });

        res.status(201).json({ 
            id: user._id, email: user.email 
        });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports={
    userRouter: userRouter
}