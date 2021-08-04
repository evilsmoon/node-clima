const argv = require("./config/yargs").argv;
const clima  = require('./controllers/clima');

const command = argv._[0];

switch (command){
    case "clima":
        clima.getClima(argv.city,argv.key)
             .then(res=>{
                if (res.cod =='404'){
                    console.log(res.message);
                }else{
                    console.log(res)
                } 
             })
             .catch(err=>{
                 console.log(err)
             })
        

}

