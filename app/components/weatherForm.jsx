var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var locationInput = this.refs.location.value;

    if(locationInput.length > 0) {
      this.refs.location.value = "";
      this.props.onSearch(locationInput);
    }
  },
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
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type='text' ref='location' placeholder='Enter city name' style={inputStyle} />
        </div>
        <div>
          <button style={buttonStyle}>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;