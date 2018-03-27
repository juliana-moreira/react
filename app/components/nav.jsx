var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
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
  var navListLinkStyle = {
    textDecoration: 'none',
    color: 'cornflowerblue'
  };
  var navListLinkActiveStyle = {
    color: 'blue',
    fontWeight: 'bold'
  };
  var navNameStyle = {
    float: 'right'
  };

  return (
    <div style={navStyle}>
      <span style={navItemsStyle}>React Weather</span>
      <ul style={navItemsStyle}>
        <li style={navListStyle}>
          <IndexLink to="/" activeClassName='active' activeStyle={navListLinkActiveStyle} style={navListLinkStyle}>Get Weather</IndexLink>
        </li>
        <li style={navListStyle}>
          <Link to="/about" activeClassName='active' activeStyle={navListLinkActiveStyle} style={navListLinkStyle}>About</Link>
        </li>
        <li style={navListStyle}>
          <Link to="/examples" activeClassName='active' activeStyle={navListLinkActiveStyle} style={navListLinkStyle}>Examples</Link>
        </li>
      </ul>
      <span style={navNameStyle}>Juliana Flor</span>
    </div>
  );
};

module.exports = Nav;