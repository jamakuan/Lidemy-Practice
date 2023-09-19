const request = require('request')
const process = require('process')

request.post(
    {
        url:'https://reqres.in/api/users',
        form: {
            name:'jama',
            job:'free'

        }
    },
        function(error, response, body) {
            console.log(body);
        }
);