const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: { title: 'CSE 341 API', description: 'Kennette Guevara API for CSE341' },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);