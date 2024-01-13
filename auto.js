const base = require('./base/cars');

//random 
const max = 4;
const min = 1;
const result = Math.random()*(max-min)+min;
const a = Math.floor(result);
switch(a){
    case 1: base.getMitsubishi();
    break;
    case 2: base.getToyota();
    break;
    case 3: base.getSubaru();
    break;
    case 4 : base.getNissan();
    break;
}
