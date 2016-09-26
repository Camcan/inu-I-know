var path = require('path')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
})

app.listen(app.get('port'), function() {
  console.log('The wizardry is happening on port ' + app.get('port') + '/')
})