const express=require('express');
const app=express();
const mongoose = require('mongoose');
require('dotenv').config();  //dotenv

const { userRouter } = require('./routes/user.js');
const { courseRouter } = require('./routes/course.js');
const { adminRouter } = require('./routes/admin.js');

app.use('/user',userRouter);
app.use('/allcourses',courseRouter);
app.use('/admin',adminRouter);


async function main() {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION);
        app.listen(3007, ()=>{
            console.log("listening");
        });
    }
    catch(err) {
        console.log("Error: ",err);
    }
}

main();