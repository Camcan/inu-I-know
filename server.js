var path = require('path')
var express = require('express')
var httpsRedirect = require('express-https-redirect')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'html')
app.use('/', httpsRedirect(), express.static(path.join(__dirname, 'public')))
app.locals.settings['x-powered-by'] = false

app.get(['/de/resume'], function(req, res){
   res.sendFile(path.join(__dirname, 'public/resume/CV.html'));
})

app.get(['/'], function(req, res) {
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
     res.render('500.jade', {title:'Congratulations; you found a five-hundy error', error: error});
 })

app.listen(app.get('port'), function() {
  console.log('The wizardry is happening on port ' + app.get('port') + '/')
})
