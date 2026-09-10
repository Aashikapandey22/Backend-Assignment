const express = require("express");

const app = express();
const router = express.Router();

const PORT = 3000;

// Router-level middleware
function routerLogger(req, res, next) {
    const dateTime = new Date().toLocaleString();

    console.log(`${req.method} ${req.originalUrl} ${dateTime}`);

    next();
}

// Apply middleware only to this router
router.use(routerLogger);

// Routes
router.get("/students", (req, res) => {
    res.send("Students List");
});

router.get("/courses", (req, res) => {
    res.send("Courses List");
});

router.get("/faculty", (req, res) => {
    res.send("Faculty List");
});

// Mount router using /api
app.use("/api", router);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});