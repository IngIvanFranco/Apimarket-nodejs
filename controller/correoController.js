const { response } = require('express');
const { request } = require('http');

const nodeMailer= require('nodemailer');

const envioCorreo = (req= request, res=response) =>{
    let body = req.body;
    
    
    let config =  nodeMailer.createTransport({
        host:'smtp.gmail.com',
        post: 587,
        auth:{
            user:'invercomes.analisis@gmail.com',
            pass:'1nv3rc0m3s'
        }
    })


    const opciones = {
        from: 'MarketPlace Invercomes',
        subject:body.asunto,
        to:body.email,
        text:body.mensaje

    };

    config.sendMail(opciones,function ( error,result){
        
        if (error) return res.json({
            ok:false,
            msg:result
        })
        
        return res.json({
            ok:true,
            msg:result
        })
    })
}

module.exports={
    envioCorreo
}