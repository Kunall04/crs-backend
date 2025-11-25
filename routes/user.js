const { Router } = require('express');
const userRouter = Router();

userRouter.get('/signup',function(req,res){

    res.json({
        message: "signup"
    })
}); 

module.exports={
    userRouter: userRouter
}