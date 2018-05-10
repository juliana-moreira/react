var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();

    var location = this.refs.navLocation.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0) {
      this.refs.navLocation.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
    console.log(encodedLocation);
  },
  render: function() {
    var navListLinkStyle = {
      textDecoration: 'none'
    };
    var navListLinkActiveStyle = {
      fontWeight: 'bold'
    };
    
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName='active' activeStyle={navListLinkActiveStyle} style={navListLinkStyle}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName='active' activeStyle={navListLinkActiveStyle} style={navListLinkStyle}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName='active' activeStyle={navListLinkActiveStyle} style={navListLinkStyle}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="navLocation" placeholder="Search Weather By City" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;