import React from 'react';
import ReactDOM from 'react-dom';

export class CommentForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {author: "", text: ""};
  }

  //called on the onChange event
  handleAuthorChange(e) {
  	this.setState({author: e.target.value});
  }

  //called on the onChange event
  handleTextChange(e) {
  	this.setState({text: e.target.value});
  }

  handleSubmit(e) {
  	e.preventDefault();
  	var author = this.state.author.trim();
  	var text = this.state.text.trim();
  	if(!text || !author) {
  		return;
  	}
  	//get the callback when the user submits the form
  	this.props.onCommentSubmit({author: author, text: text});
  	//clear the inputs
  	this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange.bind(this)} />
        <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange.bind(this)} />
        <input type="submit" value="Post" />
      </form>
    );
  }
}