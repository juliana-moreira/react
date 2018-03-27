var React = require('react');

// Original Code
// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// Refactoring the Code
var About = (props) => {
  return (
    <h3>About Component</h3>
  );
};

module.exports = About;