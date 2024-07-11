import React from "react";

export default function Offline({isOffline}) {
  if(isOffline) {
    return null;
  }

  return (
    <>
      <span className="status__text">Offline</span>
      <button className="status__btn">Reconnect</button>
    </>);
}