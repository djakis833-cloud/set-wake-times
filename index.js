const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/wake-times', async (req, res) => {
  try {
    const googleUrl = "https://script.google.com/macros/s/AKfycbxSgGKwFKwgCjaTGakyTdlAht8ebFQ8vp7ku6BaaBlJ_mdUjsM-avYfMHTpAUGHXyUB/exec";
    const response = await axios.get(googleUrl);
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching sheet data");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
