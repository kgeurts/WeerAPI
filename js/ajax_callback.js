function makeAjaxCall(url, methodType){
	let promiseObj = new Promise(function(resolve, reject){
		debug ? console.log(url) : "" ; // Conditional ternary
		let xmlhttp = new XMLHttpRequest();
		xmlhttp.open(methodType, url, true);
		xmlhttp.send();
		xmlhttp.onreadystatechange = function(){
			if (xmlhttp.readyState === 4){
				if (xmlhttp.status === 200){
					debug ? console.log("xmlhttp done succesfully") : "";
					let serverResponse = xmlhttp.responseText // Server antwoord met string.
					debug ? console.log(serverResponse) : ""; // debug
					resolve(serverResponse); // Wordt via return promiseObj teruggegeven.
				} else {
					reject (xmlhttp.status);
					console.log("xmlhttp failed"); // debug
				}
			} else {
				debug ? console.log("xmlhttp processing going on") : "";
			}
		}
		debug ? console.log("request send succesfully") : ""; // debug
	});
	return promiseObj;
}
function errorHandler(statusCode){
	console.log("failed with status", status)
}
function getWeather(){
	weatherHere.innerHTML = "";
	makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}
function showWeather(weatherString){
	let weatherObject = JSON.parse(weatherString); // Convert JSON string => Object.
	let ditWeer = 
		weatherObject.liveweer[0].plaats+ 
		"<br>Temperatuur" +
		weatherObject.liveweer[0].temp + " &#176;C" +
		"<br> Gemiddelde tempratuur "+
		weatherObject.liveweer[0].gtemp+ 
		"<br> Bewolking "+
		weatherObject.liveweer[0].samenv+ 
		"<br> Windkracht "+
		weatherObject.liveweer[0].windk+ 
		"<br> Zicht "+
		weatherObject.liveweer[0].zicht+
		"<br>"+
		weatherObject.liveweer[0].image+
		'<img src="iconen-weerlive/' + weatherObject.liveweer[0].image + '.png">';
		

		weatherHere.innerHTML = ditWeer; // String printen in de browser
}
function showWeather2(weatherString){
	let weatherObject = JSON.parse(weatherString)// Convert JSON string => Object
	let completeData = "";
	for (const [key, value] of Object.entries(weatherObject.liveweer[0])){
		debug ? console.log(`${key}; ${value}`) : ""; // debug naar console
		completeData += key + " : " + value + "<br>"; // Maak string
		weatherHere.innerHTML = completeData; // String printen in de browser
			}
}
function tickerWeather(weatherString){
let weatherObject = JSON.parse(weatherString); // Convert JSON string => Object.
let reclame = ["Challenge Reclame", "Dit is reclame!", "<img src='ma.jpg'>  ", "Laatste reclame bericht!"];
	let ditWeer = 
		weatherObject.liveweer[0].plaats+ " -" +

		"<span class=tickWrapper>" +
		"<span class='yellow'>T</span>emperatuur | " +
		weatherObject.liveweer[0].temp + " &#176;C" +
		"</span>" +

		//Reclame
		"<span class=tickWrapper>" +
		"<span class='yellow'>R</span>eclame | " +
		reclame[0] + 
		"</span>" +		


		"<span class=tickWrapper>" +
		" <span class='yellow'>G</span>emiddelde tempratuur | "+
		weatherObject.liveweer[0].gtemp+ 
		"</span>" +

		//Reclame
		"<span class=tickWrapper>" +
		"<span class='yellow'>R</span>eclame | " +
		reclame[1] + 
		"</span>" +		


		"<span class=tickWrapper>" +
		" <span class='yellow'>B</span>ewolking | "+
		weatherObject.liveweer[0].samenv+ 
		"</span>" +

		//Reclame
		"<span class=tickWrapper>" +
		"<span class='yellow'>R</span>eclame | " +
		reclame[2] + 
		"</span>" +		


		"<span class=tickWrapper>" +
		" <span class='yellow'>W</span>indkracht | "+
		weatherObject.liveweer[0].windk+ 
		"</span>" +

		//Reclame
		"<span class=tickWrapper>" +
		"<span class='yellow'>R</span>eclame | " +
		reclame[3] + 
		"</span>" +		


		"<span class=tickWrapper>" +
		" <span class='yellow'>Z</span>icht | "+ 
		weatherObject.liveweer[0].zicht+
		" "+
		"</span>" +

		"<span class=tickWrapper>" + weatherObject.liveweer[0].image+
		' <img src="iconen-weerlive/' + weatherObject.liveweer[0].image + '.png" >';
		

		tickerHere.innerHTML = ditWeer; // String printen in de browser

			}
