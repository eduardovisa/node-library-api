const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./routes/book');

const app = express();
const port = 3000;

app.use(bodyparser.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
