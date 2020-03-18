const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const routes = require("./routes/routes");

const app = express();

require('./config/mongoDB');

app.use(bodyParser.json()); //agr entende req no formato json
app.use(bodyParser.urlencoded({
    extended: false
}))

//cors config
app.use(cors());

app.use(routes);


app.listen(PORT, () => {
    console.log('on')
})