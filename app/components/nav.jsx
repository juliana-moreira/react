var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function() {
    
    var navStyle = {
      background: '#d4d4d4',
      position: 'relative',
      overflow: 'hidden',
      padding: '10px'
    };
    var navItemsStyle = {
      float: 'left',
      top: '0',
      bottom: '0',
      margin: '0'
    };
    var navListStyle = {
      display: 'inline-block',
      padding: '0 5px'
    };
    var navNameStyle = {
      float: 'right'
    };

    return (
      <div style={navStyle}>
        <span style={navItemsStyle}>React Weather</span>
        <ul style={navItemsStyle}>
          <li style={navListStyle}>
            <Link to="/">Get Weather</Link>
          </li>
          <li style={navListStyle}>
            <Link to="/about">About</Link>
          </li>
          <li style={navListStyle}>
            <Link to="/examples">Examples</Link>
          </li>
        </ul>
        <span style={navNameStyle}>Juliana Flor</span>
      </div>
    );
  }
});

module.exports = Nav;