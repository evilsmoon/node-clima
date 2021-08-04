const axios = require('axios');

const getClima =async(ciudad,apikey)=>{

    try {
      
        const resp  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric`)

        if(resp.data.name !='True'){

            return {
                name : resp.data.name,
                temp : `${resp.data.main.temp}°C`
            }; 

        }else{
            return 'Ingrese una cuidad'; 

        }

    }catch(err){
        return  err.response.data;

    }
}

module.exports = {
    getClima
};