const db = require('../models/db');
const JWT = require('jsonwebtoken');
const crypto =require('./crypto');
const cookieService = require('cookie-parser');


exports.default=function(request,response){
    console.log('welcome');
    console.log(request.session.pwd);
}

exports.customer_login = function(request,response){

    var mail = request.body.user_name;
    var pwd = request.body.user_password;
  
   console.log(request.session);
   pwd= crypto.encrypt(pwd);
    request.getConnection(function(err,connection){
        var query = connection.query(db.cutomer_validate1,[mail,pwd],function(err,rows){
           if(err)throw err;
           if(rows.length !=0){
               request.session.mail=mail;
               request.session.pwd=pwd;
               response.end(JSON.stringify("sucess"));
           }
           else{
               console.log('Sorry Login Failed')
               response.end(JSON.stringify(request.session.pwd));
           }
        })
    });
}

exports.sample=function(request,response){
    console.log(request.session);
    console.log("result:--->"+request.session.key);
        if(request.session.key){
            request.session.key++;
            
            response.end(JSON.stringify(rows));
        }
        else{
            request.session.key = 1;
            response.end(JSON.stringify('refersh page'));
        }
}