var React = require('react');
var ReactDOM = require('react-dom');
// call the component this way:
// var ComponentExample = require('./components/ComponentExample');
// or this way if you are using alias:
// var ComponentExample = require('ComponentExampleAlias');


var objOne = {
  name: 'Juliana',
  location: 'Brazil'
};

var objTwo = {
  age: 26,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
