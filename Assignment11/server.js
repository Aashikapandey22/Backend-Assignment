require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const teacherRouter = require("./router/teacherRouter.js");
const studentRouter = require("./router/studentRouter.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Teacher and Student Registration API is running!");
});

// Registration routes
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

// Connect MongoDB and start server
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    });