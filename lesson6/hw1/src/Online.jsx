import React from "react";

export default function Online({isOnline}) {
  if(!isOnline) {
    return null;
  }

  return (<span className="status__text">All good!</span>);
}
