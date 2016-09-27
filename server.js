var path = require('path')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'html')
app.use('/', express.static(path.join(__dirname, 'public')))
app.locals.settings['x-powered-by'] = false


app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, 'client/views/base.html'))
})

app.listen(app.get('port'), function() {
  console.log('The wizardry is happening on port ' + app.get('port') + '/')
})