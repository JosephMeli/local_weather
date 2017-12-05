// This is the entry for my weahter app 
//Prurpose: to learn API request with basic JavaScript applications
const request = require('request');

let apiKey = '222a83f17004dc9f53192725ca10e3e6'; 
let city = 'Boston, US'; 
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`


request(url, function ( err, response, body) {
	if(err){
		console.log('error: ', error);
	} else {
		let weather = JSON.parse(body)
		let message= "It's " + weather.main.temp + " degrees in " + weather.name; 
		console.log(message);
	}
});


