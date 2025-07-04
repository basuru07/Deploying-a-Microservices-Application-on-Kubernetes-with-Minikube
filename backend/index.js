const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});