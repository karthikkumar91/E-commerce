const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const path = require('path');
const body = require('body-parser');
const mysql = require('mysql');
const connection = require('express-myconnection');

const cookieParser = require('cookie-parser');
const session =require('express-session');

// const redis = require('redis');
// const RedisStore = require('connect-redis')(session);
// const client = redis.createClient()

const admin = require('./routes/admin');
const customer = require('./routes/customer');
const starting = require('./routes/default');
const products = require('./routes/add_products');
//  const PORT =3000;

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use(cors({origin :["http://localhost:4200"],credentials : true}))
app.set('port',process.env.PORT||5000);
app.set('views',path.join(__dirname,'view'));
app.use(body.json());
app.use(cookieParser());
app.use(session({secret : 'secretkey',saveUninitialized : true,resave : true,
cookie : {maxAge : 6000}
}))

app.use(
    connection(mysql,{
        host : 'localhost',
        user : 'root',
        password : 'karthik@1991',
        port : 3306,
        database : 'grains'
    },'request')
);

app.get('/default',starting.default);
app.post('/admin/login',admin.validation);
app.post('/customer/register',customer.register);
app.post('/customer/login',starting.customer_login);
app.post('/sample',starting.sample);
app.post('/api/check',products.add_products);
http.createServer(app).listen(app.get('port'),function(){
    console.log('Express server port no:-->'+app.get('port'));
})

