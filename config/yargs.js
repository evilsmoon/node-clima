const options={
    city:{
        alias:'c',
        desc:'Nombre de la ciudad para obtener el clima',
        demand:true
    },
    key:{
        alias:'k',
        desc:'Api Key de la api de OpenWeatherMap',
        demand:true
    }
}

const argv = require('yargs').command("clima","Temperatura de la Cuidad",{
    options
}).argv;

module.exports = {
    argv
};