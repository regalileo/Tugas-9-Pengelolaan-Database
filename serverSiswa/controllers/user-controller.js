// controllers/user-controller.js
const userModel = require('../models/user-model');

const getStudentById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await userModel.getStudentById(studentId);

    if (!student) {
        res.status(404).json({ message: 'Student not found' });
    } else {
        res.json(student);
    }
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
}
};

module.exports = { getStudentById };