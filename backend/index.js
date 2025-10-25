const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Simple test route
app.get('/', (req, res) => {
  res.send('Backend  running 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
