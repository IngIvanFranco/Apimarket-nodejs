const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser');
require("dotenv").config();


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(require('./routes/correoRoutes'));

app.listen('3000',()=>{
console.log('escuchando puerto 3000');
})

