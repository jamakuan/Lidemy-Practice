const request = require('request');
const process = require('process')

console.log(process.argv)

request(
	'https://reqres.in/api/users/' + process.argv[2],
	function(error, response, body) {
		console.log(body);
	}
);

