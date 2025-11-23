const { Router } = require('express');
const courseRouter = Router();

courseRouter.post('/purchases',function(req,res){
    res.json({
        message: "purchased courses"
    })
});

module.exports={
    courseRouter: courseRouter
}