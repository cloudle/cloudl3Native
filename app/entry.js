var { Hello, Cloud } = require('./components/hello.jsx'),
  falcor = require('falcor'), httpDataSource = require('falcor-http-datasource');

var model = new falcor.Model({source: new httpDataSource('/model.json')});
//model.get("events[0..3]['name', 'description']").then((results) => {
//  var items = results.json.events;
//
//  for (i of Object.keys(items)) {
//    console.log(items[i]);
//  }
//});
global.print = ({name, position = 'Gate KEEPER!'}) => {
  console.log(`${name},`, position);
};
console.log([1, 2, 3, 4].find(num => num > 2));

ReactDOM.render(<Hello/>, document.getElementById("application"));