const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/userModel");

const router = express.Router();

// POST - Create User
router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);

        await user.save();

        res.status(201).json({
            message: "User created successfully",
            user: user
        });

    } catch (error) {
        res.status(400).json({
            message: "Invalid request data",
            error: error.message
        });
    }
});

// PATCH - Update User
router.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        // Check whether ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid MongoDB ID"
            });
        }

        // Find and update user
        const user = await User.findByIdAndUpdate(
            id,
            updatedData,
            {
                new: true,
                runValidators: true
            }
        );

        // User not found
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User updated successfully",
            user: user
        });

    } catch (error) {
        res.status(500).json({
            message: "Database error",
            error: error.message
        });
    }
});


// DELETE - Delete User
router.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;

        // Check whether ID is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid MongoDB ID"
            });
        }

        // Find and delete user
        const user = await User.findByIdAndDelete(id);

        // User not found
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Database error",
            error: error.message
        });
    }
});


module.exports = router;