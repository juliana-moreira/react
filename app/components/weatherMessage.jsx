var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {temperature, location} = this.props;

    return (
      <div>
        <h3>It's it {temperature} in {location}.</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;