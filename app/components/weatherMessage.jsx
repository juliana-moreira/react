var React = require('react');

// var WeatherMessage = (props) => {
//   var {temperature, location} = props;

//   return (
//     <div>
//       <h3>It's it {temperature} in {location}.</h3>
//     </div>
//   );
// };

// New way to define the properties
var WeatherMessage = ({temperature, location}) => {
  return (
    <div>
      <h3>It's it {temperature} in {location}.</h3>
    </div>
  );
};

module.exports = WeatherMessage;