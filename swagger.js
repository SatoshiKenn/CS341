const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: { title: 'CSE 341 API', description: 'Kennette Guevara API for CSE341' },
  host: 'cs341.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);