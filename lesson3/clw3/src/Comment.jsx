import React from 'react';
import './comment.scss';
import moment from 'moment';
import Avatar from './Avatar';
import UserInfo from './UserInfo';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <div className="user-info">
        <Avatar user={ props.user } />
        <UserInfo user={ props.user } />
      </div>
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
