var express = require('express');
var app = express();

app.get('/', (req,res) => {
    res.send('Morinne Martinez')
});

app.listen(process.env.port || 3000 , () => {
    console.log('Web Server is running at port ' + (process.env.port || 3000))
});