import React from 'react';
import ReactDOM from 'react-dom';

import Controller from './controller/Controller';

export class CommentForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
      author: "",
      text: "",
      fetchAfterNewComment: props.fetchAfterNewComment,
    };
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

    let payload = `{
        "author": "${author}",
        "text": "${text}"
      }`;

    payload = JSON.parse(payload);

    Controller.storeCommentsFile(payload, this.state.fetchAfterNewComment);
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
