const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId=mongoose.ObjectId;
console.log("connected");
//mongoose.connect();

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,  //can use refs.
    courseId: ObjectId
});

const userModel = mongoose.model("user",userSchema);
const courseModel = mongoose.model("course",courseSchema);
const adminModel = mongoose.model("admin",adminSchema);
const purchasedSchemaModel = mongoose.model("purchased",purchaseSchema);

module.exports={
    userModel: userModel,
    courseModel: courseModel,
    adminModel: adminModel,
    purchaseSchema: purchaseSchema
}