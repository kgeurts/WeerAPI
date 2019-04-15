"use strict"; // opt-out of "sloppy mode"
const debug = true; // debuggen
//bind HTML elements via DOM
let weerButton = document.getElementById('weatherButton'); // Bind via DOM
let weerButton2 = document.getElementById('weatherButton2'); // Bind via DOM
let weatherTickerTape = document.getElementById('weatherTickerTape') // Bind via DOM
let completeWeatherHere = document.getElementById('completeWeatherHere') // Bind via DOM
weerButton.addEventListener('click', getWeather);
weerButton2.addEventListener('click', getWeather2);
weatherTickerTape.addEventListener('click', getWeatherTicker);

// Overige variabelen
let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key="; // Address
// let key = "demo";
let key = "77f9e00dfd"; // Key van de docent.
let locatie = "&locatie=";
// Let GeoLocation = "52.391225, 4.856799"; // logitude lattitude als locatie
let GeoLocation = "Amsterdam" ;// Locatie als string
let url = apiAddress + key + locatie + GeoLocation; // Haal hier de data
//console.log(url);
function getWeather(){
	weatherHere.innerHTML = "";
	tickerHere.innerHTML= "";
	makeAjaxCall(url, "GET"). then (showWeather, errorHandler);
}
function getWeather2(){
	weatherHere.innerHTML = "";
	tickerHere.innerHTML= "";
	makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}
function getWeatherTicker(){
	weatherHere.innerHTML= "";
	tickerHere.innerHTML= "";
	makeAjaxCall(url, "GET"). then (tickerWeather, errorHandler);
}
