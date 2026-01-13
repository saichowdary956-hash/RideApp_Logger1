const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Main route - serve dataloggers.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dataloggers.html'));
});

// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'dataloggers.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ DataLogger server is running on port ${PORT}`);
    console.log(`🌐 Access the app at: http://localhost:${PORT}`);
});