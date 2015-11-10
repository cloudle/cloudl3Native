var Hello = require('./components/hello.jsx'),
  falcor = require('falcor'), httpDataSource = require('falcor-http-datasource');

model = new falcor.Model({source: new httpDataSource('/model.json')});

for (i of [1, 2, 3, 4]) {
  console.log(i);
}

ReactDOM.render(<Hello/>, document.getElementById("application"));