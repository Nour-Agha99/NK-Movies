const router = require('./routes/route');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
 app.use(router)
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
