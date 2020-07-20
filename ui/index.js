const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('../openapi.yaml');
 
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3001, function () {
    console.log('Servidor UI corriendo en http://localhost:3001');
});