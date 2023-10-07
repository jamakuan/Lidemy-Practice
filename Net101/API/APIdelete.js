const request = require("request");

request.delete(
  "https://reqres.in/api/users/2",
  function (error, response, body) {
    console.log(response.statusCode);
  },
);

request.patch(
  {
    url: "http://service.com/upload",
    form: {
      name: "hell",
    },
  },
  function (error, response, body) {
    console.log(response.statusCode);
    console.log(body);
  },
);
