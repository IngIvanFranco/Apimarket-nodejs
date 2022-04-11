const express = require('express');
const { send } = require('process');
const app = express();

let insert = require('../controller/guardarControler')
let envio= require('../controller/correoController');


app.post('/envio',envio.envioCorreo)
app.get('/',function (req,res) {
    res.send(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <nav class="navbar navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
    </a>
    <a style="color:white;">Ing. Ivan Franco</a>
  </div>
</nav>
    <br>
    <div class="container">
    <div class="alert alert-success" style="text-align:center;" role="alert">
 Back-end con Nodejs para la Marketplace en Angular
</div>
</div>
`)
})

app.get('/salo', insert.insert)
app.get('/listar', insert.listar)
app.post('/pote', insert.guardar)


module.exports = app;