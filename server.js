//This is the webapp version of the api implementation for OpenWeather

const rquest = require('request');

const apiKey ='222a83f17004dc9f53192725ca10e3e6';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true} ));
app.set('view engine', 'ejs');


app.get('/',function ( request, res) {
	res.render('index', {weather:null, error:null});
})

app.post('/',function (request , res){
	// Setting up our url to access api
	// takes req call from body by way of field called city
	let city = req.body.city;
	// I am calling for all wether data in imperial units from the requested city 
	let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}'
	//Request call takes in the url
	request(url, function(err , response,body){
	// If error it will render the message below to user 
	if(err){
		res.render('index',{weather: null, error: 'Error, please try again'});
	}else{
		let weather= JSON.parse(body)
		// if api returns an unknown value. for example an unkown city it will print error message to screen
		if(weather.main == undefined){
			res.render('index', {weather: null, error: 'Error, please try again'});
		}else{
			//Finally will display the message based user location choice
			let weatherText = "It's " + weather.main.temp + " degrees in " + weather.name + "!" ;
			res.render('index',{weather: weatherText, error:null});
		}
	}
	});
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!')

})


