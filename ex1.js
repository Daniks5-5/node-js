function number(min, max){
    min = Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min);
}
module.exports = {
    number,
}
const userName = "Ivan";

const sayHi = (userName) => `Hello!I am ${userName}`;

