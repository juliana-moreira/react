var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    this.setState({
      isLoading: true
    });

    OpenWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (errorMessage) => {
      console.log(errorMessage);
      this.setState({
        isLoading: false
      });
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage location={location} temperature={temp} />;
      }
    };

    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;