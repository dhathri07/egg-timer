const express = require("express");
const { exec } = require("child_process");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("frontend"));

app.get("/start-timer", (req, res) => {
    const timerPath = path.join(__dirname, "backend", "timer");

    exec(timerPath, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            res.status(500).send("Error running timer.");
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            res.status(500).send("Error in execution.");
            return;
        }
        console.log(stdout);
        res.send(stdout);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
