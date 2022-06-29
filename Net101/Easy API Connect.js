const request = require('request');




request.patch(
	{
		url:'https://reqres.in/api/users/2',
		form: {
			name:'hello'
		}
	},
	function(error, response, body) {
		console.log(response.statusCode)
		console.log(body)
	}
);

