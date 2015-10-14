require('coffee-script/register');

var express = require('express'), app = express(),
  apiRouter = express.Router(), classicRouter = express.Router(),
  Wings = require('../app/scripts/wings/wings.coffee'),
  rabbitMQ = require('./utilities/queue.coffee');


app.set('views', './server/views');
app.set('view engine', 'jade');
app.use(express.static('./assets'));
require('./utilities/redis-session.coffee')(app);

classicRouter.get('*', function (req, res) {
  res.render('home', {});
});

apiRouter.get('/', function(req, res) {
  res.json({message: 'yay!'});
});

app.use('/api', apiRouter);
app.use('/', classicRouter);

app.listen(7000);