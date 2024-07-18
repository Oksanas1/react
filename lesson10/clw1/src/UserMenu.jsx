import React from "react";

export default function UserMenu({userData}) {
  if(!userData) return null;

  const { avatar_url, name } = userData;
  return (
    <div className="menu">
      <span className="menu__greeting"> Hello, {name} </span>
      <img
        alt="User Avatar"
        src={avatar_url}
        className="menu__avatar"
      />
    </div>
  );
}
