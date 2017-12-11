var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Some h1</h1>
        <p>Some paragraph</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" ref="name" />
        <button>Set Name</button>
      </form>
    );
  }
});

// This is a component
var Greeter = React.createClass({
    // If a property doesn't have a value, you can set a default value here
    getDefaultProps: function() {
      return {
        name: "React",
        paragraph: "This is a paragraph from a component"
      };
    },
  
    // this is a function from react that controls the state of the property
    // if a component will update my value, then I should use state, otherwise props will do.
    getInitialState: function() {
      return {
        name: this.props.name
      };
    },
  
    onButtonClick: function(e) {
      e.preventDefault();
  
      // refs gets values from input ref
      // var name = this.refs.name.value;
  
      var nameRef = this.refs.name;
      var name = nameRef.value;
      nameRef.value = ''; // clear the input after getting the value
  
      if(typeof name === 'string' && name.length > 0) {
        // this will be executed while render is being rendered
        // state can be updated by your components
        this.setState({
          name: name
        });
      }
    },
  
    render: function() {
      // This is how to access a property in react
      // using the state instead of props
      var name = this.state.name;
      var paragraph = this.props.paragraph;
  
      return (
        // This is a route. That's why you can't create two routes
        // in the same class.
        <div>

          <h1>Hello {name}!</h1>
          <p>{paragraph + "!"}</p>

          <GreeterMessage/>
  
          <form onSubmit={this.onButtonClick}>
            <input type="text" ref="name" />
            <button>Set Name</button>
          </form>

          <GreeterForm/>

        </div>
      );
    }
  });
  
  var firstName = "Juliana";
  var newParagraph = "This is from a property";
  
  ReactDOM.render(
    // Each variable should have it's own property
    <Greeter name={firstName} paragraph={newParagraph} />,
    document.getElementById('app')
  );