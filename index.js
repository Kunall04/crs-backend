const express=require('express');
const app=express();
const mongoose = require('mongoose');

const { userRouter } = require('./routes/user.js');
const { courseRouter } = require('./routes/course.js');
const { adminRouter } = require('./routes/admin.js');

app.use('/user',userRouter);
app.use('/allcourses',courseRouter);
app.use('/admin',adminRouter);

app.listen(3007);

async function main(){
    await mongoose.connect("mongodb+srv://admin:nqTRM9DmS50YZYDD@cluster0.d1zoolc.mongodb.net/coursera");
    app.listen(3007);
}

main();