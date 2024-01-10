const os =require('os');

// имя текущего пользователя
const userName =os.userInfo().username;

console.log(userName);

const greeting = require('./greeting');

console.log(`Время: ${greeting.date}`);


