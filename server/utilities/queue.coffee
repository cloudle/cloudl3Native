amqp = require('amqp'); gutil = require('gulp-util'); chalk = require('chalk')

connection = amqp.createConnection
	host: 'localhost',
	login: 'cloud',
	password: 'Ultimate',
	vhost: 'cloud-vhost'

connection.on 'ready', ->
	gutil.log chalk.green('Successfully connected to RabbitMQ..')

connection.on 'error', (message) ->
	if message.code is 'ENOTFOUND'
		gutil.log chalk.red('Unable to connect to'),
				chalk.magenta.bold(message.host),
				chalk.red('check your configuration...')
	else
		gutil.log chalk.red('Unable to connect RabbitMQ, error code:'),
				chalk.magenta.bold(message.code),
				chalk.blue('check your connection options..')

module.exports = connection