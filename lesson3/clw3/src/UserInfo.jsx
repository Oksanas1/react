import React from 'react';

const UserInfo = props => {
  console.log(props)
  return (<div className="user-info__name">{ props.user.name }</div>)
};

export default UserInfo;
