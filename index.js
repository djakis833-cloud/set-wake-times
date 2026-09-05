const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Απενεργοποίηση του HSTS header για να μην εξαναγκάζει HTTPS
app.use((req, res, next) => {
  res.removeHeader('Strict-Transport-Security');
  next();
});

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxSgGKwFKwgCjaTGakyTdlAht8ebFQ8vp7ku6BaaBlJ_mdUjsM-avYfMHTpAUGHXyUB/exec";

app.get('/wake-times', async (req, res) => {
  try {
    const response = await axios.get(GOOGLE_SHEET_URL);
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching sheet data");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
