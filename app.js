const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('AWS CI/CD Pipeline Deployment Successful');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
