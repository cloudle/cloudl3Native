gutil = require('gulp-util'); chalk = require('chalk')
session = require('express-session'); redisStore = require('connect-redis')(session)

sessionStore = new redisStore({})

#events [connect, ready, reconnecting, error, end]
sessionStore.client.on 'error', (message) ->
	if message.code is 'CONNECTION_BROKEN'
		gutil.log chalk.red.bold('Maximum Redis attempts connection exceeded..')
	else
		gutil.log chalk.red('Unable to connect to Redis, at'),
				chalk.magenta.bold(message.address)+':'+chalk.magenta(message.port),
				chalk.red('attempt to reconnect...')

sessionStore.client.on 'ready', ->
	gutil.log chalk.green('Successfully connected to Redis as [SessionStorage] source..')

module.exports = (app) ->
	app.use session
		store: sessionStore
		key: 'jsessionid'
		secret:'secretCannotBeTold'
		resave: false
		saveUninitialized: true