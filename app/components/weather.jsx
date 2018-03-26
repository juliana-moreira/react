var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: "Miami",
      temp: 88
    }
  },
  handleSearch: function(location) {
    console.log(location);

    this.setState({
      location: location,
      temp: 23
    });
  },
  render: function() {
    var generalStyle = {
      textAlign: 'center',
      width: '40%',
      marginLeft: 'auto',
      marginRight: 'auto'
    };

    var {temp, location} = this.state;

    return (
      <div style={generalStyle}>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage location={location} temperature={temp} />
      </div>
    );
  }
});

module.exports = Weather;