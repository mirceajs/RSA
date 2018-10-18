const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const APIData = require('./shipments_results.json');
//allow cross origin requests
app.use(function(req, res, next) { 
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/', express.static(path.join(__dirname, 'public'), { redirect: false }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(APIData);
    res.json({"data": APIData});
});

// listen for requests
app.listen(process.env.PORT || 3000, () => {
    var port = process.env.PORT || 3000;
    console.log("Server is listening on port "+port);
});
module.exports = app