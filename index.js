const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the root directory
app.use(express.static(path.join(__dirname)));

// Route to dynamically serve audio files from any nested directory
app.get('/*', (req, res) => {
    const requestedPath = req.params[0]; // Get the full path after the root
    const supportedExtensions = ['.mp3', '.wav', '.ogg'];

    let found = false;

    // Check if file exists with any of the supported extensions
    for (const ext of supportedExtensions) {
        const audioPath = path.join(__dirname, ${requestedPath}${ext});
        if (fs.existsSync(audioPath)) {
            res.sendFile(audioPath);
            found = true;
            break;
        }
    }

    if (!found) {
        res.status(404).send('Audio file not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});