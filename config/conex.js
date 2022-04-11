const mysql = require('mysql');


const conex = mysql.createConnection({
    host:process.env.HOSTDB,
    user:process.env.USERDB,
    password:"",
    database:process.env.DATABASEDB,

})

conex.connect((err)=>{
    if(err) throw err;
    console.log("conectado con la bd")
})

module.exports=conex;