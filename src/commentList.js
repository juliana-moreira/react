import React from 'react';
import ReactDOM from 'react-dom';
import { CommentForm } from './commentForm';
import { Comment } from './comment';

import Controller from './controller/Controller';

export class CommentList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentsState: false,
    };

    this.fetchComments = this.fetchComments.bind(this);
    this.renderComments = this.renderComments.bind(this);

    this.fetchComments();
  }

  fetchComments() {
    let commentsJson = Controller.fetchComments((commentsJson) => {
      console.log(commentsJson.comments);
      let { commentsState } = this.state;
      this.setState({ commentsState: commentsJson.comments });
    });
  }

  renderComments() {
    if (this.state.commentsState) {
      let { commentsState } = this.state;

      let comment = commentsState.map(({ author, text }, idx) => {
        return (
          <Comment author={author} key={idx}>
            {text}
          </Comment>
        );
      });
      return (
        <div>{comment}</div>
      );
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        { this.renderComments() }
        <CommentForm fetchAfterNewComment={this.fetchComments}/>
      </div>
    );
  }
}
