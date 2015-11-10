var Hello = require('./components/hello.jsx'),
  falcor = require('falcor'), httpDataSource = require('falcor-http-datasource');

model = new falcor.Model({source: new httpDataSource('/model.json')});

model.get("events[0..3]['name', 'description']").then((results) => {
  var items = results.json.events;

  for (i of Object.keys(items)) {
    console.log(items[i]);
  }
});


ReactDOM.render(<Hello/>, document.getElementById("application"));