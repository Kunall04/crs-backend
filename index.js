const express=require('express');
const app=express();
const { userRouter } = require('./routes/user.js');
const { courseRouter } = require('./routes/course.js');
const { adminRouter } = require('./routes/admin.js');

app.use('/user',userRouter);
app.use('/allcourses',courseRouter);
app.use('/admin',adminRouter);

app.listen(3007);
