var formidable = require('formidable');
const db = require('../models/db');

exports.add_products = function(request,response){
    console.log(request.body);
    var form = new formidable.IncomingForm();
     console.log("result:-->"+form)
     form.on('fileBegin', function (name, file){
         file.path = __dirname + '/../uploads/' + file.name;
     });
     form.parse(request,(err,fileds,file)=>{
     console.log(fileds);
     console.log(file.photo.name);
     var data={
         name : fileds.name,
         price : fileds.price,
         description : fileds.desc,
         specification :fileds.spcn,
         pic : file.photo.name
     }
     request.getConnection(function(err,connection){
        var query = connection.query(db.add_product,data,function(err,rows){
            if(err){
                throw err;
            }
            else{
                console.log(rows);
                response.end(JSON.stringify(rows));
            }
        })
     })
  })
 }