const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Main route serving rideLogger.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'rideLogger.html'));
});

// Default route for 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'rideLogger.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});