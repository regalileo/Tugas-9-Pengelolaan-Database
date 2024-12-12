// models/user-model.js
const db = require('../config/db');

const getStudentById = async (studentId) => {
    const [rows] = await db.query('SELECT * FROM siswa WHERE id = ?', [studentId]);
    return rows[0];
};

module.exports = { getStudentById };