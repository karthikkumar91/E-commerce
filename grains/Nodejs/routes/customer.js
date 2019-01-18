const body = require('body-parser');
const db = require('../models/db');
const JWT = require('jsonwebtoken');
const crypto =require('./crypto');
const sendMail = require('./sendMail');

const SECRET = 'abc';

exports.register=function(request,response){
    console.log(request.body);
    var pwd =request.body.confirmpassword;
    var mbl = request.body.mobile;
    var mail =request.body.email;
    var en_pwd=crypto.encrypt(pwd); 
    var mobile = crypto.encrypt(mbl)
    var detail={
        name : request.body.username,
        mail : request.body.email,
        mobile : mobile,
        pwd : en_pwd,
        confirm_pwd : en_pwd
    }
    request.getConnection(function(err,connection){
        var query = connection.query(db.customer_mail,mail,function(err,rows){
            if(err)throw err
            else
            console.log(rows);
            if(rows.length !=0){
                console.log( "Email Alredy registered")
                response.end(JSON.stringify("Email Already registered"));
            }
            else{
                
                var query = connection.query(db.customer_mobile,mobile,function(err,rows){
                    if(err)throw err
                    else
                        console.log(rows);
                        if(rows.length !=0){
                            console.log( "Mobile Alredy registered")
                            response.end(JSON.stringify("Mobile Already registered"));
                        }
                        else{
                            var query=connection.query(db.customer_register,detail,function(err,rows){
                                if(err)
                                    throw err
                                else
                                {
                                    var success = sendMail.sending();
                                    console.log("Sucess msg:-->"+rows);
                                    response.end(JSON.stringify('Updated'));
                                }
                            })
                        }
                })
            }
        })
        
    })
}