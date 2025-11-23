const { Router } = require('express');
const { adminModel } = require('../db');
const adminRouter = Router();

adminRouter.get('/courses',function(req,res){
    res.json({
        message: "c"
    })
}); 

module.exports={
    adminRouter: adminRouter
}