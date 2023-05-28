const express = require('express');
const bodyparser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes/book');
const swaggerDocument = require('../swagger.json');

const app = express();
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyparser.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
