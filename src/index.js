import React from 'react';
import ReactDOM from 'react-dom';
import {CommentList} from './commentList';
import {CommentForm} from './commentForm';

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

class CommentBox extends React.Component {
	loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data})
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}

	getInitialState() {
		return {data: []};
	}

	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}

	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
			</div>
		);
	}
}

ReactDOM.render (
	<CommentBox url="./comments" pollInterval={2000} />,
	document.getElementById('content')
);