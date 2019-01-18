const crypo = require('crypto');
var key="karthik"

exports.encrypt=function(data){
    var encrp=crypo.createCipher("aes-256-ctr",key).update(data,"utf-8","hex");
    return encrp.toString();
}
exports.decrypt=function(data){
    var decrp=crypo.createDecipher("aes-256-ctr",key).update(data,"hex","utf-8");
    return decrp.toString();
}