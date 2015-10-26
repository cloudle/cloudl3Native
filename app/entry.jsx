var Hello = require('./components/hello.jsx'),
  falcor = require('falcor'), httpDataSource = require('falcor-http-datasource');

model = new falcor.Model({source: new httpDataSource('/model.json')});
