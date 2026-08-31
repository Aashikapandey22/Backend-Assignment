const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
                <head>
                    <title>Aashika Pandey - Portfolio</title>
                </head>

                <body>
                    <h1>Welcome to Aashika Pandey's Portfolio</h1>

                    <nav>
                        <a href="/">Home</a> |
                        <a href="/about">About Me</a> |
                        <a href="/skills">Skills</a> |
                        <a href="/projects">Projects</a> |
                        <a href="/contact">Contact</a>
                    </nav>

                    <hr>

                    <p>Welcome to my personal portfolio website.</p>
                    <p>I am learning Full Stack Development and Node.js.</p>
                </body>
            </html>
        `);

    } else if (req.url === "/about") {

        res.end(`
            <h1>About Me</h1>
            <p>Name: Aashika Pandey</p>
            <p>I am learning Full Stack Development and Node.js.</p>
            <a href="/">Home</a>
        `);

    } else if (req.url === "/skills") {

        res.end(`
            <h1>Skills</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
            </ul>
            <a href="/">Home</a>
        `);

    } else if (req.url === "/projects") {

        res.end(`
            <h1>Projects</h1>
            <ul>
                <li>Node.js HTTP Server</li>
                <li>Student Portal</li>
                <li>Personal Portfolio</li>
            </ul>
            <a href="/">Home</a>
        `);

    } else if (req.url === "/contact") {

        res.end(`
            <h1>Contact Details</h1>
            <p>Name: Aashika Pandey</p>
            <p>College: ITM SKILLS UNIVERSITY</p>
            <p>Email: your-email@example.com</p>
            <a href="/">Home</a>
        `);

    } else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>404 - Page Not Found</h1>
            <a href="/">Go to Home</a>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});