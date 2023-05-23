const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  console.log(1);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
