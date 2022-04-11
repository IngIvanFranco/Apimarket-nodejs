const mysql = require('mysql');
const conex = require('../config/conex')
 

function insert(data, callback) {
    
    let insertsql = "INSERT INTO BONOS (codigo,valor,estado) VALUES ('prueba desde nodejs','25000','1')";
  
    conex.query(insertsql, function (err, result) {
        if (err) throw err;
       else{
           callback.json(result)
       }
    })
}


function guardar(datos,respuesta){
    const {codigo,valor}= datos.body
    let insertsql = `INSERT INTO BONOS (codigo,valor,estado) VALUES ('${codigo}','${valor}','1')`;
    conex.query(insertsql, function (err, result) {
        if (err) throw err;
        else{
            respuesta.json(result)
        }
    })

}


function listar(datos,respuesta) {
    let insertsql = `SELECT * FROM bonos`;
    conex.query(insertsql, function (err, result, fields) {
        if(err) throw err;
        else{
            respuesta.json(result)
        }
        
    })
}


module.exports={insert,guardar, listar}