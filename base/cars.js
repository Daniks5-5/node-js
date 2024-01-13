const toyota = require('./toyota');
const mitsubishi = require('./mitsubishi');
const nissan = require('./nissan');
const subaru = require('./subaru');

module.exports = {
    getToyota : function() {console.log(toyota);},
    getMitsubishi : function(){console.log(mitsubishi);},
    getNissan : function(){console.log(nissan);},
    getSubaru : function() {console.log(subaru);}
}