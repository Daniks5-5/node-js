const {number, userName} = require('./ex1');
console.log(number(1,20));

const fs = require('fs');

fs.readFile('./estima1.txt', 'utf8',(error,data) =>{

    console.log(data);
    fs.writeFile('./estima2.txt', data, () => {

    } );

});


fs.readFile('./main.js',(error,data) =>{
fs.writeFile('./main2.js', data, () =>{

});
});
