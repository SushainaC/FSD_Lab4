const express = require('express');
const app = express();

const PORT = 3000;   // <-- define port number

app.get('/', (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});