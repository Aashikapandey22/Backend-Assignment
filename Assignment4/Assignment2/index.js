const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <html>
            <head>
                <title>Student Portal</title>
            </head>

            <body>
                <h1>Student Portal</h1>
                <hr>

                <p><b>Name:</b> Aashika Pandey</p>
                <p><b>Course:</b> Full Stack Development</p>
                <p><b>College:</b> ITM SKILLS UNIVERSITY</p>
                <p>Welcome to our Node.js application.</p>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});