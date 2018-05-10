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
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type='search' ref='location' placeholder='Search Weather By City' />
        </div>
        <div>
          <button className="hollow button expanded">Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;