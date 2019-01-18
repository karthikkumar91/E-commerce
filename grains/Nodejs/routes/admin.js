const body = require('body-parser')
const db = require('../models/db');
const JWT = require('jsonwebtoken');
const crypto =require('./crypto');
const sendMail = require('./sendMail');

const SECRET = 'abc';
exports.validation=function(request,response){
    console.log('validation started');
    console.log(request.body);
    name = request.body.username;
    password = request.body.password;

    const payload = {
        name : name
    }
    var result=crypto.encrypt(name);
    console.log("Encrypt:-->"+result);
    var result1=crypto.decrypt(result);
    console.log("Decrypt:-->"+result1);
    request.getConnection(function(err,connection){
        var query=connection.query(db.admin_validate,[name,password],function(err,rows){
            if(err)throw err;
            if(rows.length !=0){
                var sucess=sendMail.sending();
                const token=JWT.sign(payload,SECRET);
                response.end(JSON.stringify(token));
            }
            else{
                response.end(JSON.stringify(rows));
            }
        })
        
    })
    
}