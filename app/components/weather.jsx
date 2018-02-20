var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  render: function() {
    var generalStyle = {
      textAlign: 'center',
      width: '40%',
      marginLeft: 'auto',
      marginRight: 'auto'
    };

    return (
      <div style={generalStyle}>
        <h2>Get Weather</h2>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
});

module.exports = Weather;