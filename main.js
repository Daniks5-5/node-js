const {number, userName} = require('./ex1');
console.log(number(1,20));

const fs = require('fs');

fs.readFile('./estima2.txt', 'utf8', (error,data) =>{

fs.mkdir('./car', () =>{
fs.writeFile('./estima4.txt', `${data} New information about this car`, (error) =>{
    error ? console.log (error) : null;

});
});

});

fs.rmdirSync('./car');

fs.unlink('./car/estima4.txt', () =>{});