var path = require('path')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'html')
app.use('/', express.static(path.join(__dirname, 'public')))
app.locals.settings['x-powered-by'] = false

app.get(['/de/resume'], function(req, res){
   res.sendFile(path.join(__dirname, 'public/cv/CV.html'));
})

app.get(['/', '/who', '/work', '/de'], function(req, res) {
   res.sendFile(path.join(__dirname, 'client/views/base.html'))
})

app.get(['/de/*'], function(req, res){
	res.redirect('/')
})






app.use(function(req, res) {
      res.status(400);
     res.sendFile(path.join(__dirname, 'client/views/404.html'));
 })
app.use(function(error, req, res, next) {
      res.status(500);
     res.render('500.jade', {title:'500: Internal Server Error', error: error});
 })

app.listen(app.get('port'), function() {
  console.log('The wizardry is happening on port ' + app.get('port') + '/')
})
