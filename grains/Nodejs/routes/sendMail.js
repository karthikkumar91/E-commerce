const nodemailer = require('nodemailer')


exports.sending=function(){
    nodemailer.createTestAccount((err,account)=>{

        let tranporter = nodemailer.createTransport({
            host : 'smtpout.secureserver.net',
            port : 465,
            secure : true,
            service:'gmail',
            auth :{
                user :'ouroffice143@gmail.com',
                pass : 'ouroffice@143'
            }
        });
    
        let mailOption={
            from :'<ouroffice143@gmail.com>',
            to : 'ouroffice143@gmail.com',
            subject :"hello",
            text :'first one',
        };
    
        tranporter.sendMail(mailOption,(error,info)=>{
            if(error){
                console.log("error pa"+error);
                return "fail";
            }
            console.log("mail Send Successfully: %s",nodemailer.getTestMessageUrl(info));
            return "sucess";
        })
    })
            
}