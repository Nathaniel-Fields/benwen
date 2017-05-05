var express = require('express');

var bodyParser = require('body-parser');

var pug = require('pug');

var app = express();

var doView = pug.compileFile('views/do.pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'))

app.get('/', function (req, res) {
	console.dir(req);
  res.send('Hello World!');
})

app.get('/do', function (req, res) {
	console.dir(req);
  res.send('anything else!');
})

app.post('/do', function (req, res) {
	console.dir(req.body);
	res.send(doView({
		name: req.body['full-name']
	}));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});