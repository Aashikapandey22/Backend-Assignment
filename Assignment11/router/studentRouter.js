const express = require("express");
const bcrypt = require("bcrypt");
const Student = require("../model/studentModel");
const studentValidationSchema = require("../schema/studentSchema");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { error } = studentValidationSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }

        const { name, email, password, course, age } = req.body;

        const existingStudent = await Student.findOne({ email });

        if (existingStudent) {
            return res.status(409).json({
                success: false,
                message: "Student with this email already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const student = new Student({
            name,
            email,
            password: hashedPassword,
            course,
            age,
        });

        await student.save();

        return res.status(201).json({
            success: true,
            message: "Student registered successfully",
            student: {
                id: student._id,
                name: student.name,
                email: student.email,
                course: student.course,
                age: student.age,
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Student registration failed",
            error: error.message,
        });
    }
});

module.exports = router;