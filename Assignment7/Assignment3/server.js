const express = require("express");

const app = express();
const PORT = 3000;

app.get("/student/:id", (req, res) => {
    const id = req.params.id;
    const { name, course } = req.query;

    res.send(
        `Student ID: ${id}<br>Name: ${name}<br>Course: ${course}`
    );
});

app.listen(PORT, () => {
    console.log(`Assignment 3 running on http://localhost:${PORT}`);
});