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
      <h3 className="text-center">It's it <span style={{color: '#2199e8'}}>{temperature}º</span><br/>in <span style={{textTransform: 'capitalize'}}>{location}</span></h3>
    </div>
  );
};

module.exports = WeatherMessage;