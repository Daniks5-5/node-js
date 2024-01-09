const http = require("http"); //созадём модуль http, который необходим для создания сервера
http.createServer(function(request,response){ //с помощью метода createServer() создается новый сервер для прослушивания входящих подключений и обработки запросов.
     
    response.end("Hello NodeJS! It is my first simple server on Node js!");//сообщение, которое будет отображаться
     
}).listen(8080,function(){ //сервер слушается через порт 8080 и создаётся функция, которая выводит в консоль сообщение
    console.log("Сервер начал прослушивание запросов на порту 3000");
});