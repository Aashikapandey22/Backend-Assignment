const express = require("express");

const app = express();
const PORT = 3000;

app.get("/search", (req, res) => {
    const { name, course } = req.query;

    if (!name && !course) {
        return res.send("No search data provided.");
    }

    res.send(`Name: ${name}<br>Course: ${course}`);
});

app.listen(PORT, () => {
    console.log(`Assignment 2 running on http://localhost:${PORT}`);
});