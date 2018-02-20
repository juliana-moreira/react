var React = require('react');

var WeatherForm = React.createClass({
  render: function() {

    var inputStyle = {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      boxSizing: 'border-box'
    };
    var buttonStyle = {
      width: '100%',
      padding: '10px',
      background: 'white',
      border: '1px solid cornflowerblue',
      color: 'cornflowerblue'
    };

    return (
      <form>
        <div>
          <input type='text' ref='cityInput' placeholder='Enter city name' style={inputStyle} />
        </div>
        <div>
          <button style={buttonStyle}>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;