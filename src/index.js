import React from 'react';
import ReactDOM from 'react-dom';
import { CommentList } from './commentList';
import $ from 'jquery';

import Controller from './controller/Controller';

class CommentBox extends React.Component {
	//In ES6 structure we use the constructor to generate new state variables
	constructor(props) {
		super(props);
		this.state = {data: [], url: this.props.url};
  }

  componentDidMount() {
    Controller.createCommentsFile();
  }

  renderCommentAfterPost() {

  }

	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
        <CommentList />
			</div>
		);
	}
}

ReactDOM.render (
	<CommentBox url="comments.json" pollInterval={2000} />,
	document.getElementById('content')
);
