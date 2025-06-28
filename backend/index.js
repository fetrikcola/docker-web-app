const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// CORS untuk semua origin (development)
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  console.log('Health check called');
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API endpoint
app.get("/api/hello", (req, res) => {
  console.log('API /api/hello called from:', req.ip);
  res.json({ message: "Hello from backend!" });
});

// Bind ke 0.0.0.0 agar bisa diakses dari container lain
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on http://0.0.0.0:${PORT}`);
  console.log('Ready to receive requests...');
});