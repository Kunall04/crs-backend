const { Router } = require('express');
const { adminModel } = require('../db');
const adminRouter = Router();

app.use(express.json());

adminRouter.get('/courses',function(req,res){
    const email=req.body.email;
    const password=req.body.password;

    adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    });

    res.json({
        message: "c"
    })
}); 

module.exports={
    adminRouter: adminRouter
}