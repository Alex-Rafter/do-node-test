const fetch = require("node-fetch");

var headers = new fetch.Headers();
let aKey = process.env.API_KEY_SHEETY;
headers.append("Authorization", `${aKey}`);
let url = 'https://api.sheety.co/7016cabf6b37601c93f0bcbd5ec85980/testForWeb/formResponses1';

fetch(url, {
	method: "GET",
	headers: headers
})
.then(response => response.json())
.then(json => {
	// Do something with your data
	console.log(json);
});