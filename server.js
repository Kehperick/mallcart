const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname+'/dist/ecommerceApp'));
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname+'/dist/ecommerceApp/index.html'));
});

app.listen(port,(req,res) => console.log('Server running at port: '+port));
