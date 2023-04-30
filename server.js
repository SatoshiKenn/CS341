const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const port = 3000;

app.use('/', require('./routes'));

app.listen(process.env.port || port , () => {
    console.log('Web Server is running at port ' + (process.env.port || 3000))
});

mongoose.connect(process.env.connection).then(() => 
{
          console.log("\n");
          console.log("*******************************");
          console.log("✔ Mongo Successfully Connected!");
          console.log("*******************************");
          console.log("\n");
        },
        err => {
          console.log("\n");
          console.log("*******************************");
          console.log("    Mongo Connection Failed    ");
          console.log("*******************************");
          console.log("\n");
          console.log(err);
        }
      
);