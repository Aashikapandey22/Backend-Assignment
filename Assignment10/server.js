const express = require("express");

const userRouter = require("./router/userRouter");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api", userRouter);

// Home route
app.get("/", (req, res) => {
    res.send("Express + Firebase Firestore API is running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});