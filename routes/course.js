const { Router } = require('express');
const courseRouter = Router();
const auth = require('../middleware/auth');
const { CourseModel, PurchaseModel } = require('../db.js'); // ensure db exports these models

courseRouter.use(auth);

// purchase a course
courseRouter.post('/purchases', async function (req, res) {
    try {
        const userId = req.userId; // set by auth middleware
        const { courseId } = req.body;
        if (!courseId) return res.status(400).json({ message: 'courseId required' });

        // check course exists
        const course = await CourseModel.findById(courseId);
        if (!course) return res.status(404).json({ message: 'Course not found' });

        // avoid duplicate purchases
        const existing = await PurchaseModel.findOne({ userId, courseId });
        if (existing) return res.status(409).json({ message: 'Course already purchased' });

        const purchase = await PurchaseModel.create({ userId, courseId });
        res.status(201).json({ message: 'Purchased', purchaseId: purchase._id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = {
    courseRouter: courseRouter
}