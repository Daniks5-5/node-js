console.log("hello!It's your computrer");
console.log(module);
const currentDatе = new Date();

exports.date = currentDatе;


 exports.printMessage =  function(userName){
    const hour = currentDatе.getHours();

    if(hour > 16){
        console.log(`Добрый вечер ${userName}`);
    }
    else if( hour<16){
        console.log(`добрый день ${userName} `);
    }
}
console.log(this.printMessage);