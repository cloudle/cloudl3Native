require('coffee-script/register');

var express = require('express'),
  app = express(),
  apiRouter = express.Router(), classicRouter = express.Router(),
  Wings = require('../app/scripts/wings/wings.coffee');

console.log(Wings);

app.set('views', './server/views');
app.set('view engine', 'jade');
app.use(express.static('./assets'));

classicRouter.get('*', function (req, res) {
  res.render('home', {});
});

apiRouter.get('/', function(req, res) {
  res.json({message: 'yay!'});
});

app.use('/api', apiRouter);
app.use('/', classicRouter);

app.listen(7000);