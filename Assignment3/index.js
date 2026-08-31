    const fs = require("fs");

    // Task 1: Create student.txt
    fs.writeFile(
    "student.txt",
    "Name: Aashika Pandey\nCourse: Full Stack Development\nTechnology: Node.js\n",
    (err) => {
        if (err) {
        console.log("Error creating file:", err);
        return;
        }

        console.log("File created successfully");

        // Task 2: Read student.txt
        fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("\nStudent Information:");
        console.log(data);

        // Task 3: Update student.txt
        fs.appendFile(
            "student.txt",
            "Experience: 1 Year\nCity: Kolkata\n",
            (err) => {
            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("Data updated successfully");

            // Task 4: Rename file
            fs.rename("student.txt", "studentDetails.txt", (err) => {
                if (err) {
                console.log("Error renaming file:", err);
                return;
                }

                console.log("File renamed successfully");

                // Task 5: Delete file
                fs.unlink("studentDetails.txt", (err) => {
                if (err) {
                    console.log("Error deleting file:", err);
                    return;
                }

                console.log("File deleted successfully");
                });
            });
            }
        );
        });
    }
    );