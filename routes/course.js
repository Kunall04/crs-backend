const { Router } = require('express');
const courseRouter = Router();
const auth = require('../middleware/auth');

courseRouter.use(auth);

courseRouter.post('/purchases',function(req,res){
    res.json({
        message: "purchased courses"
    })
});

module.exports={
    courseRouter: courseRouter
}