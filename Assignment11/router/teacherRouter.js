const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const Teacher = require("../model/teacherModel");
const teacherSchema = require("../schema/teacherSchema");

// POST /teacher/register
router.post("/register", async (req, res) => {
    try {
        const { error, value } = teacherSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: error.details.map((d) => d.message)
            });
        }

        const existingTeacher = await Teacher.findOne({
            email: value.email.toLowerCase()
        });

        if (existingTeacher) {
            return res.status(409).json({
                success: false,
                message: "Teacher email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(value.password, 10);

        const teacher = await Teacher.create({
            name: value.name,
            email: value.email,
            password: hashedPassword,
            subject: value.subject
        });

        return res.status(201).json({
            success: true,
            message: "Teacher registered successfully",
            teacher: {
                id: teacher._id,
                name: teacher.name,
                email: teacher.email,
                subject: teacher.subject
            }
        });

    } catch (error) {
        console.error("Teacher registration error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

module.exports = router;