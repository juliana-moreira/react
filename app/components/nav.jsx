var React = require('react');

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
          <li style={navListStyle}><a href='#'>Get Weather</a></li>
          <li style={navListStyle}><a href='#'>About</a></li>
          <li style={navListStyle}><a href='#'>Examples</a></li>
        </ul>
        <span style={navNameStyle}>Juliana Flor</span>
      </div>
    );
  }
});

module.exports = Nav;