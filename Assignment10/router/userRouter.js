const express = require("express");
const router = express.Router();

const db = require("../config/firebase");
const userSchema = require("../schema/userSchema");

// POST API: /api/users
router.post("/users", async (req, res) => {
    try {
        // Validate request body
        const { error, value } = userSchema.validate(req.body);

        // If validation fails
        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: error.details.map(
                    (detail) => detail.message
                )
            });
        }

        // Store valid data in Firestore
        const docRef = await db.collection("users").add({
            name: value.name,
            email: value.email,
            age: value.age,
            course: value.course,
            createdAt: new Date()
        });

        // Success response
        return res.status(201).json({
            success: true,
            message: "User stored successfully",
            userId: docRef.id
        });

    } catch (error) {
        console.error("Error storing user:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

module.exports = router;