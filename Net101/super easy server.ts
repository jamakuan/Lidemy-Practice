var http = require('http')

var server = http.createServer(handleRequest)
function handleRequest(req, res) {
	console.log(req.url)
	if (req.url === '/') {
		res.write('welcome!')
		res.end()
		return
	}
	
	if (req.url ==='/hello') {
		res.write('hello')
		res.end()
		return
	}
	
	if (req.url === '/redirect') {
		res.writeHead(302, {
			'Location': 'https://google.com'
		})
		res.end()
		return
	}
	
	res.writeHead(404)
	res.end()
}


server.listen(5000) // port